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
    {id: 1, img: Card1, alt: 'Rectangle1'},
    {id: 2, img: Card2, alt: 'Rectangle2'},
    {id: 3, img: Card3, alt: 'Rectangle3'},
    {id: 4, img: Card4, alt: 'Rectangle4'},
    {id: 5, img: Card5, alt: 'Rectangle5'},
];

const Popular = () => {
    return (
            <section className="popular-section">
        <div className="main-container">
            <div className="popular">
                <div className="popular-tatle">
                    <strong>POPULAR THIS WEEK</strong>
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
            effect='coverflow'
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
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
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
    </section>
    );
};

export default Popular;