import React from 'react';
import currentEpisode from './currentEpisode.json';

const SettingsMenu = ({
	visible,
	selectedSource,
	animeName,
	onChange,
	videoRef,
	setPlaying,
	selectedQuality,
	currentVideoIndex,
	currentTime,
	mode,
	setMode,
}) => {
	const isMobile =
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		);

	const handleQualitySelect = (event) => {
		const newQuality = event.target.getAttribute('value');
		if (selectedQuality !== newQuality) {
			onChange.handleQualityChange(newQuality);
			const waitForLoad = setInterval(() => {
				if (videoRef.current.readyState === 4) {
					videoRef.current
						.play()
						.then(() => {
							videoRef.current.currentTime = currentTime;
							setPlaying(true);
							clearInterval(waitForLoad);
						})
						.catch((error) => {
							console.error('Error playing video:', error);
						});
				}
			}, 100);
		}
	};

	const handleDubSelect = (event) => {
		const newSource = event.target.getAttribute('value');
		if (selectedSource !== newSource) {
			onChange.handleDubsChange(newSource);
			const waitForLoad = setInterval(() => {
				if (videoRef.current.readyState === 4) {
					videoRef.current
						.play()
						.then(() => {
							setPlaying(true);
							clearInterval(waitForLoad);
						})
						.catch((error) => {
							console.error('Error playing video:', error);
						});
				}
			}, 100);
		}
	};

	const renderContent = () => {
		switch (mode) {
			case 'default':
				return (
					<>
						<div>
							<div
								className='settings flex w-full justify-between items-center p-2 cursor-pointer transition-[background-color] hover:bg-white/10'
								onClick={() => setMode('quality')}
							>
								<span className='settings mx-3'>Качество</span>
								<span className='settings rounded-full bg-[#ff9fd2]/70 py-1 my-1 mx-3 px-3'>
									{selectedQuality}
								</span>
							</div>
							<div
								className='settings flex w-full justify-between items-center p-2 cursor-pointer transition-[background-color] hover:bg-white/10'
								onClick={() => setMode('dubs')}
							>
								<span className='settings mx-3'>Озвучка</span>
								<span className='settings rounded-full bg-[#ff9fd2]/70 py-1 my-1 mx-3 px-3'>
									{selectedSource}
								</span>
							</div>
						</div>
					</>
				);
			case 'quality':
				return (
					<>
						<div
							className='settings flex flex-col justify-between items-center'
							onClick={() => setMode('default')}
							value={selectedQuality}
						>
							{Object.keys(
								currentEpisode[animeName].Dubs[selectedSource][
									currentVideoIndex
								]
							)
								.filter((key) => key.startsWith('video'))
								.map((key) => (
									<div
										onClick={handleQualitySelect}
										className={`settings flex justify-center items-center w-full py-3 px-10 cursor-pointer transition-[background-color] hover:bg-white/10 ${key.replace('video', '') === selectedQuality ? 'text-[#ff9fd2]' : ''}`}
										value={key.replace('video', '')}
									>
										{key.replace('video', '')}
									</div>
								))}
						</div>
					</>
				);
			case 'dubs':
				return (
					<>
						<div
							value={selectedSource}
							className='flex flex-col justify-between items-center'
							onClick={() => setMode('default')}
						>
							{Object.keys(currentEpisode[animeName].Dubs).map((key) => (
								<div
									onClick={handleDubSelect}
									className={`flex justify-center items-center w-full py-3 px-10 cursor-pointer transition-[background-color] hover:bg-white/10 ${key === selectedSource ? 'text-[#ff9fd2]' : ''}`}
									value={key}
								>
									{key}
								</div>
							))}
						</div>
					</>
				);
		}
	};

	return (
		<div
			className={`settings absolute select-none flex flex-col overflow-hidden justify-center items-start font-GothamPro text-sm font-semibold bg-[#0a0a0a]/80 text-white/80 w-auto h-auto right-0 mx-6 rounded-xl bottom-16 will-change-transform transition-opacity-transform ${isMobile ? 'text-xs bottom-14' : ''} ${!visible ? 'opacity-0 translate-y-2 invisible' : 'opacity-100 translate-y-0 visible'}`}
		>
			{renderContent()}
		</div>
	);
};

export default SettingsMenu;
