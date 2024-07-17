import React from 'react';
import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import BgMain from '../../img/other-content/BgCyberpunkMainPage.png';
import InformationAnime from './mainInfoAnimeRandom.json';
import GeneralPerson from './generalPersonRandom.json';
import PlayerSeriaAnimeRandom from './PlayerSeriaAnimeRandom.json';
// Import Swiper React components
import './RandomAnime.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import VideoPlayer from '../../utils/VideoPlayer/VideoPlayer.jsx';
import { ReactComponent as Play } from '../../img/icons/play-small.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { Footer } from '../../components/footer/footer';

import { Header } from '../../components/header/header';
import SliderAnimePreview from '../../components/SliderAnimePreview/SliderAnimePreview';

/* Скрытие и показ описания */
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
/* Скрытие и показ описания */

function RandomAnime() {
	const [isShowingMore, setIsShowingMore] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		if (isShowingMore) {
			ref.current.style.height = `${ref.current.scrollHeight}px`;
		} else {
			ref.current.style.height = '7.5rem'; // about 100px
		}
	}, [isShowingMore]);
	const [arrowDirection, setArrowDirection] = useState('down');

	function toggleIsShowingMore() {
		setIsShowingMore(!isShowingMore);
	}
	const myref = useRef(null);

	const handleClick = () => {
		myref.current?.scrollIntoView({
			behavior: 'smooth',
			timeout: '10000',
		});
	};

	useEffect(() => {
		const title = InformationAnime.map((anime) => anime.titleAnime).join(', ');
		document.title = `${title} | Otakuri`;
	}, [InformationAnime]);
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
					<SwiperSlide className=''>
						<section className='w-full h-[100vh] GradientWatchAnime'>
							<img
								src={BgMain}
								className='w-full h-full object-cover blur-[4px]'
							></img>
						</section>
					</SwiperSlide>
				</Swiper>

				{/* Бекграунд береться из 1 картинки слайдера!!!!!!! */}

				<main
					className='relative z-[2] content-container'
				>
					<section className='px-[300px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px]'>
						{/* огр.контента */}
						<div className='max-w-[1300px] mx-auto'>
							{/* огр.контента */}
							<section className='containerGrid md:grid-cols-1'>
								<aside className='flex flex-col gap-4 max-w-[300px] h-auto mt-[80px] md:max-w-full md:h-full'>
									<img
										className='w-full object-cover rounded-[10px] h-[420px] md:h-[600px] sm:h-[500px]'
										src='https://i.pinimg.com/736x/85/44/ff/8544ffe89a34c0555efb0cf7396c4bfc.jpg'
									/>
									<div className='flex justify-between items-center w-full'>
										<button
											onClick={handleClick}
											className='mybutton px-10 md:px-[84px] sm:px-0 rounded-[25px] md:rounded-[50px] h-11 md:h-20 sm:h-16 sm:w-full text-center flex justify-center items-center gap-1 md:gap-2 border border-transparent whitespace-nowrap text-[#eee]/90 font-GothamPro text-sm md:text-lg font-normal'
										>
											<Play className='h-7 md:h-9 w-7 md:w-9  fill-[#eee] drop-shadow-md' />
											Смотреть
										</button>
										<button className='mybutton px-[11px] rounded-full h-11 md:h-20 md:w-[84px] sm:hidden flex justify-center items-center flex-wrap border border-transparent font-GothamPro active:scale-95 will-change-transform transition-transform'>
											<div className='md:[&>svg]:w-8 md:[&>svg]:h-8'>
												<svg
													viewBox='0 0 24 24'
													fill='none'
													width='22'
													height='22'
													opacity={0.8}
												>
													<path
														d='M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z'
														fill='#eee'
													></path>
												</svg>
											</div>
										</button>
										<button className='mybutton px-[11px] rounded-full h-11 md:h-20 md:w-[84px] sm:hidden flex justify-center items-center flex-wrap border border-transparent font-GothamPro active:scale-95 will-change-transform transition-transform'>
											<div className='md:[&>svg]:w-8 md:[&>svg]:h-8'>
												<svg
													width='22'
													height='22'
													viewBox='0 0 24 24'
													opacity={0.8}
												>
													<path
														d='M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z'
														fill='#eee'
													></path>
												</svg>
											</div>
										</button>
									</div>
								</aside>
								{InformationAnime.map((result) => (
									<aside className='flex flex-col justify-between gap-2 mt-[80px] ml-[44px] md:ml-[0px] will-change-transform'>
										<div>
											<h1 className='text-white font-GothamPro text-[36px] font-light'>
												{result.titleAnime}
											</h1>
											<div className='flex mt-[12px] items-center gap-3'>
												<p className='py-[4px] px-[6px] text-center border-solid border border-[#7459ff] rounded-[5px] text-[16px] text-white font-GothamPro font-light'>
													{result.yearOfIssue}
												</p>
												<div className='flex gap-2 justify-center items-center'>
													<span className='border-solid border border-[#7459ff] rounded-[50%] w-[10px] h-[10px]'></span>
													<p className='text-[16px] text-white font-GothamPro font-light'>
														{result.yearOfRelease}
													</p>
												</div>
												<div className='flex gap-2 justify-center items-center'>
													<span className='border-solid border border-[#7459ff] rounded-[50%] w-[10px] h-[10px]'></span>
													<p className='text-[16px] text-white font-GothamPro font-light'>
														{result.country}
													</p>
												</div>
												<div className='flex gap-2 justify-center items-center'>
													<span className='border-solid border border-[#7459ff] rounded-[50%] w-[10px] h-[10px]'></span>
													<p className='text-[16px] text-white font-GothamPro font-light'>
														{result.format}
													</p>
												</div>
											</div>
										</div>
										<section class='gridcols2 items-center mt-6 gap-[16px] will-change-transform'>
											<div>
												<h1 className='text-white font-GothamPro text-[16px] lg:text-[15px]'>
													Кол-во серий:
												</h1>
											</div>
											<div>
												<h1 className='text-white font-GothamPro text-[16px] font-extralight'>
													{result.episodesReleased} / {result.totalEpisodes}
												</h1>
											</div>
											<div>
												<h1 className='text-white font-GothamPro text-[16px]'>
													Жанры:
												</h1>
											</div>
											<div>
												<h1 className='text-white font-GothamPro text-[16px] font-extralight'>
													{result.genres}
												</h1>
											</div>
											<div>
												<h1 className='text-white font-GothamPro text-[16px]'>
													Длительность:
												</h1>
											</div>
											<div>
												<h1 className='text-white font-GothamPro text-[16px] font-extralight'>
													{result.durationSeries}
												</h1>
											</div>
											<div>
												<h1 className='text-white font-GothamPro text-[16px]'>
													Статус:
												</h1>
											</div>
											<div>
												<p className='text-white font-GothamPro max-w-[100px] bg-lime-600 border-solid border border-lime-800 rounded-[10px] px-[7px] text-center py-[4px] text-[16px] font-extralight'>
													{result.status}
												</p>
											</div>
											<div>
												<h1 className='text-white font-GothamPro text-[16px]'>
													Режисёр:
												</h1>
											</div>
											<div>
												<h1 className='text-white font-GothamPro text-[16px] font-extralight'>
													{result.producer}
												</h1>
											</div>
										</section>

										<div className='block max-w-[971px] mt-[16px] h-auto'>
											<h1 className='text-white font-GothamPro text-[16px]'>
												Описание:
											</h1>
											<p
												ref={ref}
												className={`break-words text-white leading-6 font-GothamPro text-[16px] font-extralight text-justify mt-2 transition-all will-change-transform duration-[1000ms] ${
													!isShowingMore ? 'line-clamp-6' : ''
												}`}
												style={{
													maxHeight: isShowingMore
														? `${ref.current.scrollHeight}px`
														: '7.5rem',
													overflow: 'hidden',
												}}
											>
												{result.description}
											</p>
											<button
												onClick={toggleIsShowingMore}
												className='text-[#8f88ff] mt-[7px] hoverBtnShowMore flex items-center gap-[5px] hover:text-[#7459ff] transition-colors font-GothamPro text-[16px]'
											>
												<p className='textBtnReadMore'>
													{isShowingMore ? 'Скрыть' : 'Читать далее'}
												</p>
											</button>
										</div>
									</aside>
								))}
							</section>

							<section className='mt-8 mb-7'>
								<hr className='border-t-[#7459ff] mb-6' />
								<SliderAnimePreview sourceImg='img2' />
								<hr ref={myref} className='border-t-[#7459ff] mt-6' />
							</section>
						</div>
					</section>

					<main className='px-[300px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px]'>
						<section className='max-w-[1300px] mx-auto'>
							<div>
								<h1 className='text-white font-GothamPro text-2xl tracking-tight'>
									Смотреть аниме онлайн
								</h1>
							</div>
							<section className='pt-5'>
								<div className='h-full items-start w-full'>
									<VideoPlayer />
								</div>
							</section>

							<div className='mt-7 w-full h-[1px] bg-[#7459ff]'></div>
							<div className='mt-10'>
								<h1 className='text-white font-GothamPro text-[21px]'>
									Главные персонажи
								</h1>
							</div>
							<aside className='mt-[20px] flex flex-wrap gap-[35px] md:justify-between sm:justify-center'>
								{GeneralPerson.map((result) => (
									<section className='block w-[180px] cursor-pointer hoverGeneralPerson transition-colors'>
										<div className=''>
											<img
												className='w-full object-cover rounded-[10px] h-[250px]'
												src={result.img}
												alt=''
											/>
										</div>
										<div className='mt-[15px]'>
											<h1 className='text-[16px] font-GothamPro font-light text-white textwrap lineclampone'>
												{result.name}
											</h1>
										</div>
									</section>
								))}
							</aside>
							<div className='mt-[40px] w-full h-[1px] bg-[#7459ff] mb-[110px]'></div>
						</section>
					</main>
				</main>
				<Footer />
			</main>
		</>
	);
}
export default RandomAnime;
