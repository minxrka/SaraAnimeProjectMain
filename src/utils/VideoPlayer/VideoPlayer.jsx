import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import currentEpisode from './currentEpisode.json';
import { ReactComponent as Pause } from '../../img/icons/pause-small.svg';
import { ReactComponent as Play } from '../../img/icons/play-small.svg';
import { ReactComponent as VolumeMute } from '../../img/icons/volume-mute.svg';
import { ReactComponent as VolumeLow } from '../../img/icons/volume-low.svg';
import { ReactComponent as VolumeFull } from '../../img/icons/volume-full.svg';
import { ReactComponent as OpenFullscreen } from '../../img/icons/open-fullscreen.svg';
import { ReactComponent as ExitFullscreen } from '../../img/icons/exit-fullscreen.svg';
import { ReactComponent as PreviousEpisode } from '../../img/icons/episode-back.svg';
import { ReactComponent as NextEpisode } from '../../img/icons/episode-next.svg';

const VideoPlayer = () => {
	const [playing, setPlaying] = useState(false);
	const [volume, setVolume] = useState(0.2);
	const [muted, setMuted] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [timelineValue, setTimelineValue] = useState(0);
	const [fullscreen, setFullscreen] = useState(false);
	const [controlsVisible, setControlsVisible] = useState(true);
	const [mouseOver, setMouseOver] = useState(false);
	const [cursorVisible, setCursorVisible] = useState(false);
	const [isSeeking, setIsSeeking] = useState(false);
	const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
	const [selectedQuality, setSelectedQuality] = useState('1080p');
	const [selectedEpisode, setSelectedEpisode] = useState(1);
	const [lastButtonPress, setLastButtonPress] = useState(0);
	const [isMuteButtonClicked, setIsMuteButtonClicked] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	const videoRef = useRef(null);
	const containerRef = useRef(null);
	const timeoutRef = useRef(null);
	const timelineRef = useRef(null);
	const volumeRef = useRef(null);

	useEffect(() => {
		const video = videoRef.current;
		video.addEventListener('loadstart', () => {
			setIsLoading(true);
		});
		video.addEventListener('waiting', () => {
			setIsLoading(true);
		});
		video.addEventListener('canplay', () => {
			setIsLoading(false);
		});
	}, [videoRef]);

	useEffect(() => {
		const video = videoRef.current;
		if (!isMobile) {
			video.volume = volume;
		} else {
			video.volume = 1;
		}
		video.addEventListener('timeupdate', () => {
			setCurrentTime(video.currentTime);
		});
		video.addEventListener('durationchange', () => {
			setDuration(video.duration);
		});

		const hasQuality = currentEpisode[currentVideoIndex].hasOwnProperty(
			`video${selectedQuality}`
		);
		if (hasQuality) {
			video.src = currentEpisode[currentVideoIndex][`video${selectedQuality}`];
		} else {
			const availableQualities = Object.keys(
				currentEpisode[currentVideoIndex]
			).filter((key) => key.startsWith('video'));
			if (availableQualities.length > 0) {
				setSelectedQuality(availableQualities[0].replace('video', ''));
			}
		}
	}, [videoRef, currentVideoIndex, selectedQuality]);

	useEffect(() => {
		const progress = (timelineValue / videoRef.current.duration) * 100;
		timelineRef.current.style.background = `linear-gradient(to right, #cf97b5 ${progress}%, #ffffff80 ${progress}%)`;
	}, [timelineValue]);

	useEffect(() => {
		volumeRef.current.style.background = `linear-gradient(to right, #cf97b5 ${volumeRef.current.value}%, #ffffff80 ${volumeRef.current.value}%)`;
	});

	useEffect(() => {
		document.addEventListener('fullscreenchange', () => {
			setFullscreen(document.fullscreenElement !== null);
		});
		return () => {
			document.removeEventListener('fullscreenchange', () => {
				setFullscreen(document.fullscreenElement !== null);
			});
		};
	}, []);

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);
		return () => {
			document.removeEventListener('keydown', handleKeyPress);
		};
	}, []);

	const isMobile =
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		);

	const handleKeyPress = (event) => {
		if (event.code === 'Space') {
			event.preventDefault();
			if (videoRef.current.paused) {
				if (videoRef.current.readyState === 4) {
					videoRef.current.play();
					setPlaying(true);
				}
			} else {
				videoRef.current.pause();
				setPlaying(false);
			}
		} else if (event.code === 'ArrowLeft') {
			event.preventDefault();
			const changedTime = Math.max(0, videoRef.current.currentTime - 10);
			videoRef.current.currentTime = changedTime;
			setCurrentTime(changedTime);
			setTimelineValue(changedTime);
			setControlsVisible(true);
			setTimeout(() => {
				setControlsVisible(false);
			}, 2500);
		} else if (event.code === 'ArrowRight') {
			event.preventDefault();
			const changedTime = Math.min(
				videoRef.current.duration,
				videoRef.current.currentTime + 10
			);
			videoRef.current.currentTime = changedTime;
			setCurrentTime(changedTime);
			setTimelineValue(changedTime);
			setControlsVisible(true);
			setTimeout(() => {
				setControlsVisible(false);
			}, 2500);
		}
	};

	const handleSeek = (e) => {
		const timelineValue = e.target.value;
		videoRef.current.currentTime = timelineValue;
		setCurrentTime(timelineValue);
		setTimelineValue(timelineValue);
		setIsSeeking(true);
		setIsLoading(true);
	};

	const handleTimelineMouseUp = () => {
		setIsSeeking(false);
		if (videoRef.current.readyState >= 3) {
			if (!playing) {
				videoRef.current.play();
				setPlaying(true);
			}
		} else {
			const waitForLoad = setInterval(() => {
				if (videoRef.current.readyState >= 3) {
					videoRef.current.play();
					setPlaying(true);
					clearInterval(waitForLoad);
				}
			}, 100);
		}
	};

	const handleMuteClick = () => {
		setMuted(!muted);
		setIsMuteButtonClicked(true);
		if (muted) {
			if (!isMobile) {
				if (volume === 0 && !isMuteButtonClicked) {
					setVolume(0.2);
					videoRef.current.volume = 0.2;
					volumeRef.current.value = 0.2;
				} else {
					setVolume(volume);
					videoRef.current.volume = volume;
					volumeRef.current.value = volume * 100;
				}
			} else {
				setVolume(1);
				videoRef.current.volume = 1;
				volumeRef.current.value = 1;
			}
		} else {
			videoRef.current.volume = 0;
			volumeRef.current.value = 0;
		}
	};

	const handleInputChange = (event) => {
		const videoVolume = event.target.value / 100;
		setIsMuteButtonClicked(false);
		if (videoVolume === 0) {
			setMuted(true);
			setVolume(0);
			videoRef.current.volume = 0;
			volumeRef.current.value = 0;
		} else {
			setMuted(false);
			setVolume(videoVolume);
			videoRef.current.volume = videoVolume;
			volumeRef.current.value = videoVolume;
		}
	};

	const getVolumeIcon = () => {
		if (volume === 0 || muted) {
			return (
				<VolumeMute className='h-5 w-5 fill-gray-50/80 drop-shadow-md animate-smooth-appearance sm:h-[18px] sm:w-[18px]' />
			);
		} else if (volume < 0.5) {
			return (
				<VolumeLow className='h-5 w-5 fill-gray-50/80 drop-shadow-md animate-smooth-appearance sm:h-[18px] sm:w-[18px]' />
			);
		} else {
			return (
				<VolumeFull className='h-5 w-5 fill-gray-50/80 drop-shadow-md animate-smooth-appearance sm:h-[18px] sm:w-[18px]' />
			);
		}
	};

	const handlePlayPause = () => {
		if ((isMobile && controlsVisible) || !isMobile) {
			if (videoRef.current.paused) {
				if (videoRef.current.readyState === 4) {
					videoRef.current.play();
					setPlaying(true);
				} else {
					videoRef.current.addEventListener('canplay', () => {
						videoRef.current.play();
						setPlaying(true);
					});
				}
			} else {
				videoRef.current.pause();
				setPlaying(false);
			}
		}
	};

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds.toString().padStart(2, '0')}`;
	};

	const handleToggleFullscreen = () => {
		if (fullscreen) {
			document.exitFullscreen();
			setFullscreen(false);
		} else {
			containerRef.current.requestFullscreen();
			if (
				isMobile &&
				typeof window.screen.orientation !== 'undefined' &&
				typeof window.screen.orientation.lock !== 'undefined'
			) {
				window.screen.orientation.lock('landscape');
			}
			setFullscreen(true);
		}
	};

	const handleMouseMove = () => {
		if (isMobile && !playing) {
			clearTimeout(timeoutRef.current);
			setControlsVisible(true);
		} else {
			clearTimeout(timeoutRef.current);
			setControlsVisible(true);
			setCursorVisible(true);
			if (playing && !isMobile) {
				timeoutRef.current = setTimeout(() => {
					setControlsVisible(false);
					setCursorVisible(false);
				}, 2500);
			}
		}
	};

	const handleMouseEnter = () => {
		if (!isMobile) {
			setMouseOver(true);
			setControlsVisible(true);
			setCursorVisible(true);
			if (playing) {
				timeoutRef.current = setTimeout(() => {
					setControlsVisible(false);
					setCursorVisible(false);
				}, 2500);
			}
		}
	};

	const handleMouseLeave = () => {
		if (!isMobile) {
			setControlsVisible(false);
			setCursorVisible(false);
			clearTimeout(timeoutRef.current);
		}
	};

	const handleVideoEnd = () => {
		const nextVideoIndex = currentVideoIndex + 1;
		if (nextVideoIndex < currentEpisode.length) {
			setTimeout(() => {
				setSelectedEpisode(nextVideoIndex + 1);
				setCurrentVideoIndex(nextVideoIndex);
				videoRef.current.src =
					currentEpisode[nextVideoIndex][`video${selectedQuality}`];
				videoRef.current.load();
				let isReadyToPlay = false;
				videoRef.current.addEventListener('canplay', () => {
					isReadyToPlay = true;
				});
				setTimeout(() => {
					if (isReadyToPlay) {
						videoRef.current.currentTime = 0;
						videoRef.current.play();
					}
				}, 200);
			}, 1500);
		}
	};

	const handleTimeUpdate = () => {
		const timelineValue = videoRef.current.currentTime;
		setCurrentTime(timelineValue);
		setTimelineValue(timelineValue);
	};

	const handleQualityChange = (event) => {
		const changeQuality = event.target.value;
		setSelectedQuality(changeQuality);
		videoRef.current.src =
			currentEpisode[currentVideoIndex][`video${changeQuality}`];
		videoRef.current.load();
		videoRef.current.currentTime = currentTime;
		videoRef.current.addEventListener('loadedmetadata', () => {
			let isReadyToPlay = false;
			videoRef.current.addEventListener('canplay', () => {
				isReadyToPlay = true;
			});
			setTimeout(() => {
				if (isReadyToPlay) {
					videoRef.current.play();
				}
			}, 200);
		});
	};

	const handleEpisodeSelect = (index) => {
		setSelectedEpisode(index + 1);
		setCurrentVideoIndex(index);
		videoRef.current.src = currentEpisode[index][`video${selectedQuality}`];
		videoRef.current.load();
		videoRef.current.addEventListener('loadedmetadata', () => {
			let isReadyToPlay = false;
			videoRef.current.addEventListener('canplay', () => {
				isReadyToPlay = true;
			});
			setTimeout(() => {
				if (isReadyToPlay) {
					videoRef.current.play();
					setPlaying(true);
				}
			}, 200);
		});
	};

	const handlePreviousEpisode = () => {
		if (Date.now() - lastButtonPress < 500) return;
		const previousVideoIndex = currentVideoIndex - 1;
		if (previousVideoIndex >= 0) {
			setSelectedEpisode(currentVideoIndex);
			setCurrentVideoIndex(previousVideoIndex);
			videoRef.current.src =
				currentEpisode[previousVideoIndex][`video${selectedQuality}`];
		}
		setLastButtonPress(Date.now());
	};

	const handleNextEpisode = () => {
		if (Date.now() - lastButtonPress < 500) return;
		const nextVideoIndex = currentVideoIndex + 1;
		if (nextVideoIndex < currentEpisode.length) {
			setSelectedEpisode(nextVideoIndex + 1);
			setCurrentVideoIndex(nextVideoIndex);
			videoRef.current.src =
				currentEpisode[nextVideoIndex][`video${selectedQuality}`];
		}
		setLastButtonPress(Date.now());
	};

	return (
		<>
			<div
				className={`relative w-full duration-300 ${controlsVisible ? '' : 'cursor-none'}`}
				ref={containerRef}
				onMouseMove={handleMouseMove}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<video
					ref={videoRef}
					width='100%'
					preload='metadata'
					playsInline
					poster={currentEpisode[currentVideoIndex].poster}
					onEnded={handleVideoEnd}
					onTimeUpdate={handleTimeUpdate}
					className='rounded-xl aspect-video bg-black'
				>
					<source
						type='video/mp4'
						src={currentEpisode[currentVideoIndex][`video${selectedQuality}`]}
					/>
				</video>
				<div
					className={`flex absolute top-0 right-0 py-2 z-50 text-gray-50/80 mx-8 my-3 sm:mx-4 sm:my-1 transition-opacity-transform will-change-transform ${controlsVisible || !playing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
				>
					<select
						value={selectedQuality}
						onChange={handleQualityChange}
						className='font-GothamPro cursor-pointer text-sm sm:text-xs outline-none border-none rounded-full bg-black/20 py-1 px-2 [&>option]:bg-black/90 border-0 ml-2'
					>
						{Object.keys(currentEpisode[currentVideoIndex])
							.filter((key) => key.startsWith('video'))
							.map((key) => (
								<option value={key.replace('video', '')}>
									{key.replace('video', '')}
								</option>
							))}
					</select>
				</div>
				<div
					className={`absolute z-10 top-0 left-0 w-full h-full`}
					onClick={handlePlayPause}
					onDoubleClick={handleToggleFullscreen}
				>
					<div className='absolute w-full h-full text-white z-50'>
						{isLoading ? (
							<div className='w-full h-full flex items-center justify-center'>
								<div className='w-14 h-14 border-4 animate-spin border-solid border-transparent border-t-[#d9abc5]/90 rounded-full'></div>
							</div>
						) : (
							''
						)}
					</div>
					<div
						className={`absolute z-10 top-0 left-0 w-full h-full flex justify-center items-end transition-colors duration-300 bg-gradient-to-t from-0% from-black/50 to-15% rounded-xl ${!playing || isLoading ? 'bg-black/40' : 'bg-gradient-to-t from-0% from-black/50 to-15%'}`}
					>
						<div
							className={`flex select-none font-GothamPro text-center text-gray-50/80 justify-center items-center text-xs bg-white/20 drop-shadow-md rounded-full p-1 mb-20 transition-opacity-transform will-change-transform md:opacity-0 ${controlsVisible || !playing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
						>
							<span className='w-12 drop-shadow-sm'>
								{formatTime(currentTime)}
							</span>
							<span className='text-[10px] drop-shadow-sm w-[6px]'>/</span>
							<span className='w-12 drop-shadow-sm'>
								{formatTime(duration)}
							</span>
						</div>
					</div>
				</div>
				<div
					className={`absolute bottom-0 left-0 z-30 flex flex-col w-full px-4 text-gray-50/80 text-base items-center transition-opacity-transform will-change-transform ${controlsVisible || !playing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
				>
					<div className='flex w-full h-2 font-GothamPro text-center text-xs items-center select-none'>
						<span className='w-12 drop-shadow-sm hidden md:block'>
							{formatTime(currentTime)}
						</span>
						<input
							type='range'
							min='0'
							max={videoRef.current && videoRef.current.duration}
							value={timelineValue}
							ref={timelineRef}
							onChange={handleSeek}
							onMouseUp={handleTimelineMouseUp}
							className='w-full select-none cursor-pointer mx-2 my-1 h-1 hover:h-2 bg-white/50 rounded-full border-none outline-none appearance-none transition-all duration-200 [&::-webkit-slider-thumb]:opacity-0 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#d9abc5] [&::-webkit-slider-thumb]:transition-opacity-transform [&::-webkit-slider-thumb]:hover:opacity-100 [&::-webkit-slider-thumb]:duration-200 [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:active:scale-[1.3]'
						/>
						<span className='w-12 drop-shadow-sm hidden md:block'>
							{formatTime(duration)}
						</span>
					</div>
					<div className='flex w-full justify-between items-center my-1'>
						<div className='flex items-center justify-start w-[240px]'>
							<button
								className='flex w-10 h-10 sm:h-7 justify-center items-center'
								onClick={handlePlayPause}
							>
								{playing ? (
									<Pause className='h-9 w-9 fill-gray-50/80 drop-shadow-md sm:h-7 sm:w-7' />
								) : (
									<Play className='h-9 w-9 fill-gray-50/80 drop-shadow-md sm:h-7 sm:w-7' />
								)}
							</button>
							<div className='flex justify-center items-center sm:ml-0 ml-2 group'>
								<button onClick={handleMuteClick} className='ml-2'>
									{getVolumeIcon()}
								</button>
								<input
									type='range'
									min='0'
									max='100'
									value={muted ? 0 : volume * 100}
									ref={volumeRef}
									onChange={handleInputChange}
									className='w-24 sm:hidden opacity-0 select-none cursor-pointer ml-2 h-1 translate-x-0 will-change-transform transition-opacity-transform bg-white/50 rounded-full border-none outline-none appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#d9abc5] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-[1.05] [&::-webkit-slider-thumb]:active:scale-[1.15] group-hover:opacity-100 group-hover:translate-x-1 group-hover:[&::-webkit-slider-thumb]:translate-x-0 duration-200'
								/>
							</div>
						</div>
						<div className='select-none whitespace-nowrap font-GothamPro text-sm py-2 sm:py-1 sm:text-xs'>
							Эпизод {selectedEpisode}
						</div>
						<div className='flex w-[240px] justify-end items-center'>
							<div className='flex justify-center items-center mr-2 gap-1'>
								<button
									className='flex w-10 h-10 sm:h-7 sm:w-7 justify-center items-center'
									onClick={handlePreviousEpisode}
								>
									<PreviousEpisode className='h-7 w-7 fill-gray-50/80 drop-shadow-md select-none outline-none border-none sm:h-6 sm:w-6' />
								</button>
								<button
									className='flex w-10 h-10 sm:h-7 sm:w-7 justify-center items-center'
									onClick={handleNextEpisode}
								>
									<NextEpisode className='h-7 w-7 fill-gray-50/80 drop-shadow-md select-none outline-none border-none sm:h-6 sm:w-6' />
								</button>
							</div>
							<button
								className='flex w-10 sm:w-8 justify-center items-center'
								onClick={handleToggleFullscreen}
							>
								{fullscreen ? (
									<ExitFullscreen className='h-6 w-6 fill-gray-50/80 drop-shadow-md sm:h-5 sm:w-5' />
								) : (
									<OpenFullscreen className='h-6 w-6 fill-gray-50/80 drop-shadow-md sm:h-5 sm:w-5' />
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
			<div>
				<Swiper
					slidesPerView={5}
					navigation={true}
					spaceBetween={20}
					modules={[Navigation]}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						400: {
							slidesPerView: 2,
						},
						900: {
							slidesPerView: 3,
						},
						1220: {
							slidesPerView: 4,
						},
						1537: {
							slidesPerView: 5,
						},
					}}
					className='mySwiper my-5'
				>
					{currentEpisode.map((episode, index) => (
						<SwiperSlide key={index} onClick={() => handleEpisodeSelect(index)}>
							<div className='h-full relative aspect-video cursor-pointer'>
								<img
									value={index + 1}
									className='rounded-3xl w-full h-full object-cover brightness-50'
									src={episode.poster}
								/>
								<div className='absolute flex justify-center items-center w-full h-full top-0 left-0 text-white/90 z-50 font-GothamPro text-xl'>
									{index + 1} Эпизод
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};

export default VideoPlayer;
