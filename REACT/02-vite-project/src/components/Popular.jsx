import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, EffectCoverflow} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import ArrowPrev from '../assets/Group2.png.png';
import ArrowNext from '../assets/Group1.png.png';
import Card1 from '../assets/Rectangle1.png';
import Card2 from '../assets/Rectangle2.png';
import Card3 from '../assets/Rectangle3.png';
import Card4 from '../assets/Rectangle4.png';
import Card5 from '../assets/Rectangle5.png';

const movies = [
    {id: 1, img: Card1, alt: 'Breaking Bad', title: 'Пуститися берега'},
    {id: 2, img: Card2, alt: 'The Rain', title: 'Дощ'},
    {id: 3, img: Card3, alt: 'Life  in a Year', title: 'Життя за рік'},
    {id: 4, img: Card4, alt: 'Money Heist', title: 'Паперовий будинок'},
    {id: 5, img: Card5, alt: 'Squid Game', title: 'Гра в кальмана'},
];

const Popular = () => {
    return (
            <section className="popular-section">
        <div className="main-container">
            <div className="popular d-flex align-items-center justify-content-between">
                <div className="popular-tatle">
                    <strong>ПОПУЛЯРНЕ ЦЬОГО ТИЖНЯ</strong>
                </div>
                <div className="navigate">
                    <button className="prev">
                        <img src={ArrowPrev} alt="previous"/>
                    </button>
                    <button className="next">
                        <img src={ArrowNext} alt="next"/>
                    </button>
                </div>
            </div>
            <Swiper
            modules={[Navigation, EffectCoverflow]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={2.5}
            breakpoints={{
                320: {
                    slidesPerView: 1.4,
                },
                576: {
                    slidesPerView: 2,
                },
                768:{
                    slidesPerView: 2.3,
                },
                970:{
                    slidesPerView: 2.5,
                },
                1140:{
                    slidesPerView: 3,
                },
            }}
            navigation={{
                prevEl: '.prev',
                nextEl: '.next'
            }}
            coverflowEffect={{
                rotate: 35,
                stretch: 0, 
                depth:180,
                modifier: 1,
                slideShadows: true,
            }}
            className='popular-slider'>
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div className='popular-card'>
                            <img src={movie.img} alt={movie.alt}></img>
                            <p>{movie.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
    </section>
    );
};

export default Popular;