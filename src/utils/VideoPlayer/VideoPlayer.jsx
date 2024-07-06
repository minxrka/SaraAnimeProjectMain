import React, { useState, useRef, useEffect } from 'react';

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
	const [controlsVisible, setControlsVisible] = useState(false);
	const [mouseOver, setMouseOver] = useState(false);
	const [cursorVisible, setCursorVisible] = useState(false);
	const [userSeeking, setUserSeeking] = useState(false);
	const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
	const [selectedQuality, setSelectedQuality] = useState('1080p');
	const [selectedEpisode, setSelectedEpisode] = useState(1);
	const [lastButtonPress, setLastButtonPress] = useState(0);

	const videoRef = useRef(null);
	const containerRef = useRef(null);
	const timeoutRef = useRef(null);
	const timelineRef = useRef(null);
	const volumeRef = useRef(null);

	useEffect(() => {
		const video = videoRef.current;
		video.volume = volume;
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
		setUserSeeking(true);
	};

	const handleTimelineMouseUp = () => {
		setUserSeeking(false);
		if (videoRef.current.readyState === 4) {
			if (!playing) {
				videoRef.current.play();
				setPlaying(true);
			}
		} else {
			videoRef.current.addEventListener('canplay', () => {
				if (!playing) {
					videoRef.current.play();
					setPlaying(true);
				}
			});
		}
	};

	const handleMuteClick = () => {
		setMuted(!muted);
		if (muted) {
			videoRef.current.volume = volume;
			volumeRef.current.value = volume * 100;
		} else {
			videoRef.current.volume = 0;
			volumeRef.current.value = 0;
		}
	};

	const handleInputChange = (event) => {
		const videoVolume = event.target.value / 100;
		setVolume(videoVolume);
		videoRef.current.volume = videoVolume;
		if (muted) {
			setMuted(false);
		}
	};

	const getVolumeIcon = () => {
		if (volume === 0 || muted) {
			return (
				<VolumeMute className='h-5 w-5 fill-gray-50/80 drop-shadow-md animate-smooth-appearance' />
			);
		} else if (volume < 0.5) {
			return (
				<VolumeLow className='h-5 w-5 fill-gray-50/80 drop-shadow-md animate-smooth-appearance' />
			);
		} else {
			return (
				<VolumeFull className='h-5 w-5 fill-gray-50/80 drop-shadow-md animate-smooth-appearance' />
			);
		}
	};

	const handlePlayPause = () => {
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
			setFullscreen(true);
		}
	};

	const handleMouseMove = () => {
		clearTimeout(timeoutRef.current);
		setControlsVisible(true);
		setCursorVisible(true);
		if (playing) {
			timeoutRef.current = setTimeout(() => {
				setControlsVisible(false);
				setCursorVisible(false);
			}, 2500);
		}
	};

	const handleMouseEnter = () => {
		setMouseOver(true);
		setControlsVisible(true);
		setCursorVisible(true);
		if (playing) {
			timeoutRef.current = setTimeout(() => {
				setControlsVisible(false);
				setCursorVisible(false);
			}, 2500);
		}
	};

	const handleMouseLeave = () => {
		setControlsVisible(false);
		setCursorVisible(false);
		clearTimeout(timeoutRef.current);
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

	const handleEpisodeSelect = (event) => {
		const episodeSelect = event.target.value;
		setSelectedEpisode(episodeSelect);
		setCurrentVideoIndex(episodeSelect - 1);
		videoRef.current.src =
			currentEpisode[currentVideoIndex][`video${selectedQuality}`];
		videoRef.current.load();
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
					onEnded={handleVideoEnd}
					onTimeUpdate={handleTimeUpdate}
					className='rounded-xl aspect-video bg-black'
				>
					<source type='video/mp4' />
				</video>
				<div
					className={`absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center transition-colors duration-300 bg-gradient-to-t from-0% from-black/50 to-15% rounded-xl ${!playing ? 'bg-black/40' : 'bg-gradient-to-t from-0% from-black/50 to-15%'}`}
					onClick={handlePlayPause}
					onDoubleClick={handleToggleFullscreen}
				></div>
				<div
					className={`absolute bottom-0 left-0 z-20 flex w-full px-4 text-gray-50/80 text-base mb-1 items-center transition-opacity-transform will-change-transform ${controlsVisible || !playing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
				>
					<button onClick={handlePlayPause}>
						{playing ? (
							<Pause className='h-10 w-10 fill-gray-50/80 drop-shadow-md' />
						) : (
							<Play className='h-10 w-10 fill-gray-50/80 drop-shadow-md' />
						)}
					</button>
					<div className='flex justify-center items-center ml-2'>
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
							className='w-24 select-none cursor-pointer ml-2 h-1 bg-white/50 rounded-full border-none outline-none appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#d9abc5] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-[1.05] [&::-webkit-slider-thumb]:active:scale-[1.15]'
						/>
					</div>
					<div className='flex w-full items-center ml-5 mr-3 select-none'>
						<span className='font-GothamPro w-14 text-center'>
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
							className='w-full select-none cursor-pointer mx-2 h-1 bg-white/50 rounded-full border-none outline-none appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#d9abc5] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-webkit-slider-thumb]:active:scale-[1.3]'
						/>
						<span className='font-GothamPro w-14 text-center'>
							{formatTime(duration)}
						</span>
					</div>
					<div className='flex justify-center items-center mr-2 gap-1'>
						<button onClick={handlePreviousEpisode}>
							<PreviousEpisode className='h-7 w-7 fill-gray-50/80 drop-shadow-md select-none outline-none border-none' />
						</button>
						<select
							value={selectedEpisode}
							onChange={handleEpisodeSelect}
							className='font-GothamPro cursor-pointer text-sm outline-none border-none bg-transparent mx-2 py-2 [&>option]:p-4 [&>option]:bg-black/90 border-0'
						>
							{currentEpisode.map((episode) => (
								<option value={episode.id}>{episode.episode}</option>
							))}
						</select>
						<button onClick={handleNextEpisode}>
							<NextEpisode className='h-7 w-7 fill-gray-50/80 drop-shadow-md select-none outline-none border-none' />
						</button>
					</div>
					<select
						value={selectedQuality}
						onChange={handleQualityChange}
						className='font-GothamPro cursor-pointer text-sm outline-none border-none bg-transparent mx-4 py-2 [&>option]:p-4 [&>option]:bg-black/90 border-0 ml-2'
					>
						{Object.keys(currentEpisode[currentVideoIndex])
							.filter((key) => key.startsWith('video'))
							.map((key) => (
								<option value={key.replace('video', '')}>
									{key.replace('video', '')}
								</option>
							))}
					</select>
					<button onClick={handleToggleFullscreen}>
						{fullscreen ? (
							<ExitFullscreen className='h-6 w-6 fill-gray-50/80 drop-shadow-md' />
						) : (
							<OpenFullscreen className='h-6 w-6 fill-gray-50/80 drop-shadow-md' />
						)}
					</button>
				</div>
			</div>
		</>
	);
};

export default VideoPlayer;
