import React from 'react';
import AnimePerson from '../../img/trailer-photo/kensin/Himura_Kenshin_default.jpg';
import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import InformationAnime from './mainInfoAnime.json';
import GeneralPerson from './generalPerson.json';
import PlayerSeriaAnime from './PlayerSeriaAnime.json';
// Import Swiper React components
import './watchAnime.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import VideoPlayer from '../../utils/VideoPlayer/VideoPlayer.jsx';
import { ReactComponent as Play } from '../../img/icons/play-small.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { Footer } from '../footer/footer';

import { Header } from '../header/header';
import SliderAnimePreview from '../SliderAnimePreview/SliderAnimePreview';
const useTruncatedElement = ({ ref }) => {
	const [isTruncated, setIsTruncated] = useState(false);
	const [isShowingMore, setIsShowingMore] = useState(false);

	useLayoutEffect(() => {
		const { offsetHeight, scrollHeight } = ref.current || {};

		if (offsetHeight && scrollHeight && offsetHeight < scrollHeight) {
			setIsTruncated(true);
		} else {
			setIsTruncated(false);
		}
	}, [ref]);

	const toggleIsShowingMore = () => setIsShowingMore((prev) => !prev);

	return {
		isTruncated,
		isShowingMore,
		toggleIsShowingMore,
	};
};

function WatchAnime() {
	/*   Реф ссылка для описания */
	const [activeTab, setActiveTab] = useState('Описание');
	const [isShowingMore, setIsShowingMore] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		if (isShowingMore) {
			ref.current.style.height = `${ref.current.scrollHeight}px`;
		} else {
			ref.current.style.height = '9.75rem'; // about 100px
		}
	}, [isShowingMore]);
	const [arrowDirection, setArrowDirection] = useState('down');

	function toggleIsShowingMore() {
		setIsShowingMore(!isShowingMore);
	}

	/*   Реф ссылка для описания */
	const myref = useRef(null);
	/* При клике скролится до плеера */
	const handleClick = () => {
		myref.current?.scrollIntoView({
			behavior: 'smooth',
			timeout: '10000',
		});
	};
	/* При клике скролится до плеера */

	/* Свич эпизодов */
	const [currentEpisode, setCurrentEpisode] = useState(1);
	const currentSerie = PlayerSeriaAnime.filter(
		(result) => result.id === currentEpisode
	)[0];
	/* Свич эпизодов */

	useEffect(() => {
		const title = InformationAnime.map((anime) => anime.titleAnime).join(', ');
		document.title = `Anime with Sara - ${title}`;
	}, [InformationAnime]);

	const handleTabChange = (tab) => {
		setIsShowingMore(false);
		setTimeout(() => {
			setActiveTab(tab);
		}, 0);
	};

	const descAnimated = useSpring({
		opacity: activeTab === 'Описание' ? 1 : 0,
		transform: activeTab === 'Описание' ? 'translateX(0)' : 'translateX(-14px)',
		config: { duration: 300 },
	});
	const charAnimated = useSpring({
		opacity: activeTab === 'Персонажи' ? 1 : 0,
		transform:
			activeTab === 'Персонажи' ? 'translateX(0)' : 'translateX(-14px)',
		config: { duration: 300 },
	});
	const infoAnimated = useSpring({
		opacity: activeTab === 'Информация' ? 1 : 0,
		transform:
			activeTab === 'Информация' ? 'translateX(0)' : 'translateX(-14px)',
		config: { duration: 300 },
	});

	return (
		<>
			<main>
				<Header />
				<Swiper
					slidesPerView={1}
					mousewheel={true}
					modules={[Pagination]}
					style={{ position: 'absolute', zIndex: 1, top: 0, left: 0 }}
					className='mySwiper w-full'
				>
					<SwiperSlide>
						<section className='w-[100vw] h-[840px] GradientBGr object-cover'>
							<div className='w-[100vw] h-[840px] GradientBGv object-cover'>
								<img
									src='https://www.mirf.ru/wp-content/uploads/2023/05/310e42389a.png'
									className='h-full w-full object-cover object-top pl-60'
								></img>
							</div>
						</section>
					</SwiperSlide>
				</Swiper>

				{/* Бекграунд береться из 1 картинки слайдера!!!!!!! */}
				<main className='relative z-[2]'>
					<section>
						{/* огр.контента */}
						<div className='px-14'>
							{/* огр.контента */}
							<section className='flex'>
								{InformationAnime.map((result) => (
									<aside className='flex flex-col mt-[210px] mx-11 w-full'>
										<div className='flex flex-col gap-3'>
											<h1 className='text-white font-GothamPro text-6xl font-semibold tracking-[5px]'>
												{result.titleAnime}
											</h1>
											<div className='flex gap-3'>
												<h2 className='text-[#C9C9C9] font-GothamPro text-xl font-extralight pl-[3px]'>
													Rurouni Kenshin: Meiji Kenkaku Romantan
												</h2>
												<div className='cursor-pointer'>
													<p className='text-[#EEEEEE]/90 font-GothamPro bg-[#7459ff]/70 transition-colors duration-500 hover:bg-[#7459ff] rounded-[25px] px-3 text-center py-1 text-[16px] font-normal select-none'>
														{result.status}
													</p>
												</div>
											</div>
										</div>
										<section class='gridcols2 items-center gap-6 mt-10 pl-[3px]'>
											<div>
												<h1 className='text-[#F0F0F0] font-GothamPro text-[20px]'>
													Жанры:
												</h1>
											</div>
											<div>
												<h1 className='text-[#EEEEEE] font-GothamPro text-[20px] font-extralight'>
													{result.genres}
												</h1>
											</div>
											<div>
												<h1 className='text-[#F0F0F0] font-GothamPro text-[20px] lg:text-[15px]'>
													Эпизоды:
												</h1>
											</div>
											<div>
												<h1 className='text-[#EEEEEE] font-GothamPro text-[20px] font-extralight'>
													{result.episodesReleased} / {result.totalEpisodes}
												</h1>
											</div>
											<div>
												<h1 className='text-[#F0F0F0] font-GothamPro text-[20px]'>
													Год выпуска:
												</h1>
											</div>
											<div>
												<h1 className='text-[#EEEEEE] font-GothamPro text-[20px] font-extralight'>
													{result.yearOfRelease}
												</h1>
											</div>
											<div>
												<h1 className='text-[#F0F0F0] font-GothamPro text-[20px]'>
													Режиссёр:
												</h1>
											</div>
											<div>
												<h1 className='text-[#EEEEEE] font-GothamPro text-[20px] font-extralight'>
													{result.producer}
												</h1>
											</div>
										</section>
										<div className='flex items-center gap-3 mt-10 select-none'>
											<button
												onClick={handleClick}
												className='mainWatchButton px-12 rounded-[25px] h-12 text-center flex justify-center items-center gap-1 md:gap-2 border border-transparent whitespace-nowrap text-[#eee] font-GothamPro text-lg md:text-lg font-normal'
											>
												<Play className='h-7 w-7 fill-[#eee] drop-shadow-md' />
												Смотреть
											</button>
											<button className='watchbutton px-10 rounded-[25px] h-12 text-center flex justify-center items-center gap-1 md:gap-2 border border-transparent whitespace-nowrap text-[#eee] font-GothamPro text-lg md:text-lg font-normal'>
												Трейлер
											</button>
											<button className='watchbutton px-[13px] rounded-full h-12 flex justify-center items-center flex-wrap border border-transparent font-GothamPro active:scale-95 will-change-transform transition-transform'>
												<div>
													<svg
														viewBox='0 0 24 24'
														fill='none'
														width='22'
														height='22'
													>
														<path
															d='M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z'
															fill='#eee'
														></path>
													</svg>
												</div>
											</button>
											<button className='watchbutton px-[13px] rounded-full h-12 flex justify-center items-center flex-wrap border border-transparent font-GothamPro active:scale-95 will-change-transform transition-transform'>
												<div>
													<svg width='22' height='22' viewBox='0 0 24 24'>
														<path
															d='M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z'
															fill='#eee'
														></path>
													</svg>
												</div>
											</button>
										</div>
										<div className='mt-[200px]'>
											<div className='relative flex gap-8 border-0 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#C9C9C9]/30 after:mx-[2px]'>
												<button
													className={`text-[#F0F0F0]/90 select-none cursor-pointer inline-block z-50 relative py-5 font-GothamPro text-[20px] border-transparent border-solid border-2 ${
														activeTab === 'Описание' ? 'border-b-[#7459ff]' : ''
													}`}
													onClick={() => handleTabChange('Описание')}
												>
													Описание
												</button>
												<button
													className={`text-[#F0F0F0]/90 select-none cursor-pointer inline-block z-50 relative py-5 font-GothamPro text-[20px] border-transparent border-solid border-2 ${
														activeTab === 'Персонажи'
															? 'border-b-[#7459ff]'
															: ''
													}`}
													onClick={() => handleTabChange('Персонажи')}
												>
													Персонажи
												</button>
												<button
													className={`text-[#F0F0F0]/90 select-none cursor-pointer inline-block z-50 relative py-5 font-GothamPro text-[20px] border-transparent border-solid border-2 ${
														activeTab === 'Информация'
															? 'border-b-[#7459ff]'
															: ''
													}`}
													onClick={() => handleTabChange('Информация')}
												>
													Информация
												</button>
											</div>
											<div>
												{activeTab === 'Описание' && (
													<>
														<animated.div style={descAnimated}>
															<p
																ref={ref}
																className={`break-words text-[#EEEEEE]/90 max-w-[820px] mt-8 leading-[26px] font-GothamPro text-xl font-light text-left transition-all duration-500 ${
																	!isShowingMore ? 'line-clamp-6' : ''
																}`}
																style={{
																	maxHeight: isShowingMore
																		? `${ref.current.scrollHeight}px`
																		: '9.75rem',
																	overflow: 'hidden',
																}}
															>
																{result.description}
															</p>
															<button
																onClick={toggleIsShowingMore}
																className='text-[#8f88ff] mt-4 mb-20 hoverBtnShowMore flex items-center gap-[5px] hover:text-[#7459ff] transition-colors font-GothamPro text-[20px]'
															>
																<p className='textBtnReadMore'>
																	{isShowingMore
																		? 'Свернуть описание'
																		: 'Подробное описание'}
																</p>
															</button>
														</animated.div>
													</>
												)}
												{activeTab === 'Персонажи' && (
													<>
														<animated.div style={charAnimated}>
															<aside className='mt-8 mb-20 flex flex-wrap gap-[35px] md:justify-between sm:justify-center'>
																{GeneralPerson.map((result) => (
																	<section className='block w-[180px] cursor-pointer hoverGeneralPerson transition-colors'>
																		<div>
																			<img
																				className='w-full object-cover rounded-[10px] h-[250px]'
																				src={result.img}
																			/>
																		</div>
																		<div className='mt-[15px]'>
																			<h1 className='text-xl font-GothamPro font-light text-[#EEEEEE]/90'>
																				{result.name}
																			</h1>
																		</div>
																	</section>
																))}
															</aside>
														</animated.div>
													</>
												)}
												{activeTab === 'Информация' && (
													<>
														<animated.div style={infoAnimated}>
															<section className='flex justify-between'>
																<div class='flex flex-col gap-6 mt-8 mb-20'>
																	<div className='flex flex-col gap-3'>
																		<h2 className='text-[#F0F0F0] font-GothamPro text-[20px]'>
																			Жанры:
																		</h2>
																		<h3 className='text-[#EEEEEE] font-GothamPro text-[20px] font-extralight'>
																			{result.genres}
																		</h3>
																	</div>
																	<div className='flex flex-col gap-3'>
																		<h2 className='text-[#F0F0F0] font-GothamPro text-[20px] lg:text-[15px]'>
																			Эпизоды:
																		</h2>
																		<h3 className='text-[#EEEEEE] font-GothamPro text-[20px] font-extralight'>
																			{result.episodesReleased} /{' '}
																			{result.totalEpisodes}
																		</h3>
																	</div>
																	<div className='flex flex-col gap-3'>
																		<h2 className='text-[#F0F0F0] font-GothamPro text-[20px]'>
																			Длительность:
																		</h2>
																		<h3 className='text-[#EEEEEE] font-GothamPro text-[20px] font-extralight'>
																			{result.durationSeries}
																		</h3>
																	</div>
																	<div className='flex flex-col gap-3'>
																		<h2 className='text-[#F0F0F0] font-GothamPro text-[20px]'>
																			Год выпуска:
																		</h2>
																		<h3 className='text-[#EEEEEE] font-GothamPro text-[20px] font-extralight'>
																			{result.yearOfRelease}
																		</h3>
																	</div>
																</div>
																<div class='flex flex-col gap-6 mt-8 mb-20'>
																	<div className='flex flex-col gap-3'>
																		<h2 className='text-[#F0F0F0] font-GothamPro text-[20px]'>
																			Режиссёр:
																		</h2>
																		<h3 className='text-[#EEEEEE] font-GothamPro text-[20px] font-extralight'>
																			{result.producer}
																		</h3>
																	</div>
																	<div className='flex flex-col gap-3'>
																		<h2 className='text-[#F0F0F0] font-GothamPro text-[20px]'>
																			Автор оригинала:
																		</h2>
																		<h3 className='text-[#EEEEEE] font-GothamPro text-[20px] font-extralight'>
																			{result.author}
																		</h3>
																	</div>
																	<div className='flex flex-col gap-3'>
																		<h2 className='text-[#F0F0F0] font-GothamPro text-[20px] lg:text-[15px]'>
																			Первоисточник:
																		</h2>
																		<h3 className='text-[#EEEEEE] font-GothamPro text-[20px] font-extralight'>
																			{result.basedOn}
																		</h3>
																	</div>
																	<div className='flex flex-col gap-3'>
																		<h2 className='text-[#F0F0F0] font-GothamPro text-[20px]'>
																			Возрастные ограничения:
																		</h2>
																		<h3 className='text-[#EEEEEE] font-GothamPro text-[20px] font-extralight'>
																			{result.yearOfIssue}
																		</h3>
																	</div>
																</div>
																<div class='flex flex-col gap-6 mt-8 mb-20'>
																	<div className='flex flex-col gap-3'>
																		<h2 className='text-[#F0F0F0] font-GothamPro text-[20px]'>
																			Жанры:
																		</h2>
																		<h3 className='text-[#EEEEEE] font-GothamPro text-[20px] font-extralight'>
																			{result.genres}
																		</h3>
																	</div>
																	<div className='flex flex-col gap-3'>
																		<h2 className='text-[#F0F0F0] font-GothamPro text-[20px] lg:text-[15px]'>
																			Эпизоды:
																		</h2>
																		<h3 className='text-[#EEEEEE] font-GothamPro text-[20px] font-extralight'>
																			{result.episodesReleased} /{' '}
																			{result.totalEpisodes}
																		</h3>
																	</div>
																	<div className='flex flex-col gap-3'>
																		<h2 className='text-[#F0F0F0] font-GothamPro text-[20px]'>
																			Год выпуска:
																		</h2>
																		<h3 className='text-[#EEEEEE] font-GothamPro text-[20px] font-extralight'>
																			{result.yearOfRelease}
																		</h3>
																	</div>
																	<div className='flex flex-col gap-3'>
																		<h2 className='text-[#F0F0F0] font-GothamPro text-[20px]'>
																			Режиссёр:
																		</h2>
																		<h3 className='text-[#EEEEEE] font-GothamPro text-[20px] font-extralight'>
																			{result.producer}
																		</h3>
																	</div>
																</div>
															</section>
														</animated.div>
													</>
												)}
											</div>
										</div>
									</aside>
								))}
							</section>
							<section className='mx-11 mb-20'>
								<div className='w-full h-[1px] bg-[#7459ff]'></div>
								<SliderAnimePreview sourceImg='img' />
								<div ref={myref} className='w-full h-[1px] bg-[#7459ff]'></div>
							</section>
						</div>
					</section>
				</main>
				<Footer />
			</main>
		</>
	);
}
export default WatchAnime;
