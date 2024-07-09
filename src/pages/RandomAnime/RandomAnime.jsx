import React from 'react';
import AnimePreview from '../../img/bg-anime-card/small/anime1.jpg';
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
	/* Свич эпизодов */
	const [currentEpisode, setCurrentEpisode] = useState(1);
	const currentSerie = PlayerSeriaAnimeRandom.filter(
		(result) => result.id === currentEpisode
	)[0];
	/* Свич эпизодов */

	useEffect(() => {
		const title = InformationAnime.map((anime) => anime.titleAnime).join(', ');
		document.title = `Anime with Sara - ${title}`;
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
							<img src={BgMain} className='w-full h-full object-cover'></img>
						</section>
					</SwiperSlide>
				</Swiper>

				{/* Бекграунд береться из 1 картинки слайдера!!!!!!! */}

				<main
					className='relative z-2 content-container'
					style={{ position: 'relative', zIndex: 2 }}
				>
					<section className='px-[300px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px]'>
						{/* огр.контента */}
						<div className='max-w-[1300px] mx-auto'>
							{/* огр.контента */}
							<section className='containerGrid md:grid-cols-1'>
								<aside className='flex flex-col gap-5 max-w-[300px] h-auto mt-[80px] md:max-w-full md:h-full'>
									<img
										className='w-full object-cover rounded-[10px] h-[420px] md:h-[600px] sm:h-[500px]'
										src={AnimePreview}
									/>
									<div className='flex justify-between items-center w-full gap-3'>
										<button
											onClick={handleClick}
											className='mybutton w-4/5 text-center whitespace-nowrap border-solid border border-[#cf97b5]/80 text-white/90 font-GothamPro text-base font-light will-change-transform'
										>
											Смотреть онлайн
										</button>
										<button className='flex w-1/5 px-4 justify-center flex-wrap bg-[#5663d580] border-solid border border-Blue600/80 rounded-[10px] py-4 text-center text-white font-GothamPro text-[20px] font-light active:scale-95 will-change-transform transition-transform'>
											<div>
												<svg
													width='24'
													height='24'
													viewBox='0 0 21 20'
													fill='white'
													opacity={0.8}
													xmlns='http://www.w3.org/2000/svg'
												>
													<path
														d='M14.0785 2.65625C12.4176 2.65625 10.9734 3.39609 10.1239 4.63594C9.27449 3.39609 7.83027 2.65625 6.16934 2.65625C4.9112 2.6577 3.70501 3.15202 2.81538 4.03079C1.92574 4.90955 1.42529 6.10099 1.42383 7.34375C1.42383 9.625 2.8633 11.9992 5.7027 14.3992C7.0038 15.4943 8.40924 16.4624 9.89932 17.2898C9.96837 17.3265 10.0455 17.3457 10.1239 17.3457C10.2023 17.3457 10.2795 17.3265 10.3486 17.2898C11.8386 16.4624 13.2441 15.4943 14.5452 14.3992C17.3846 11.9992 18.824 9.625 18.824 7.34375C18.8226 6.10099 18.3221 4.90955 17.4325 4.03079C16.5429 3.15202 15.3367 2.6577 14.0785 2.65625ZM10.1239 16.3367C8.82604 15.5969 2.37293 11.6969 2.37293 7.34375C2.37398 6.34951 2.77429 5.39628 3.48603 4.69324C4.19777 3.9902 5.16279 3.59478 6.16934 3.59375C7.77333 3.59375 9.12026 4.43984 9.68498 5.80234C9.72073 5.88832 9.78155 5.96185 9.85971 6.0136C9.93787 6.06535 10.0298 6.09298 10.1239 6.09298C10.218 6.09298 10.31 6.06535 10.3882 6.0136C10.4663 5.96185 10.5271 5.88832 10.5629 5.80234C11.1276 4.43984 12.4745 3.59375 14.0785 3.59375C15.0851 3.59478 16.0501 3.9902 16.7618 4.69324C17.4736 5.39628 17.8739 6.34951 17.8749 7.34375C17.8749 11.6969 11.4218 15.5969 10.1239 16.3367Z'
														fill='white'
													/>
												</svg>
											</div>
										</button>
									</div>
								</aside>
								{InformationAnime.map((result) => (
									<aside className='flex flex-col justify-between gap-5 mt-[80px] ml-[44px] md:ml-[0px] will-change-transform'>
										<div>
											<h1 className='text-white font-GothamPro text-[36px] font-light'>
												{result.titleAnime}
											</h1>
											<div className='flex mt-[12px] items-center gap-3'>
												<p className='py-[4px] px-[6px] text-center border-solid border border-Blue600 rounded-[5px] text-[16px] text-white font-GothamPro font-light'>
													{result.yearOfIssue}
												</p>
												<div className='flex gap-2 justify-center items-center'>
													<span className='border-solid border border-Blue600 rounded-[50%] w-[10px] h-[10px]'></span>
													<p className='text-[16px] text-white font-GothamPro font-light'>
														{result.yearOfRelease}
													</p>
												</div>
                        <div className='flex gap-2 justify-center items-center'>
												<span className='border-solid border border-Blue600 rounded-[50%] w-[10px] h-[10px]'></span>
												<p className='text-[16px] text-white font-GothamPro font-light'>
													{result.country}
												</p>
                        </div>
                        <div className='flex gap-2 justify-center items-center'>
												<span className='border-solid border border-Blue600 rounded-[50%] w-[10px] h-[10px]'></span>
												<p className='text-[16px] text-white font-GothamPro font-light'>
													{result.format}
												</p>
                        </div>
											</div>
										</div>
										<section class='gridcols2 items-center mt-6 gap-[16px]'>
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
												className={`break-words text-white leading-6 font-GothamPro text-[16px] font-extralight text-justify mt-[16px] transition-all duration-500 ${
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
												className='text-[#cf97b5] mt-[7px] hoverBtnShowMore flex items-center gap-[5px] hover:text-[#d9abc5] transition-colors font-GothamPro text-[16px]'
											>
												<p className='textBtnReadMore'>
													{isShowingMore ? 'Скрыть' : 'Читать далее'}
												</p>
											</button>
										</div>
									</aside>
								))}
							</section>

							<section>
								<div className='mt-7 w-full h-[1px] bg-Blue600'></div>
								<SliderAnimePreview sourceImg='img2' />
								<div className='w-full h-[1px] bg-Blue600'></div>
							</section>
						</div>
					</section>

					<main className='mt-7 px-[300px] xl:px-[80px] big:px-[50px] sm:px-[25px] lg:px-[73px]'>
						<section className='max-w-[1300px] mx-auto'>
							<div ref={myref}>
								<h1 className='text-white font-GothamPro text-2xl tracking-tight'>
									Смотреть аниме онлайн
								</h1>
							</div>
							<section className='pt-5'>
								<div className='h-full items-start w-full'>
									<VideoPlayer />
								</div>
							</section>

							<div className='mt-7 w-full h-[1px] bg-Blue600'></div>
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
							<div className='mt-[40px] w-full h-[1px] bg-Blue600 mb-[110px]'></div>
						</section>
					</main>
				</main>
				<Footer />
			</main>
		</>
	);
}
export default RandomAnime;
