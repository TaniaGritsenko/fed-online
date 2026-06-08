import React from 'react';
import Genres from './Genres';
import MovieInfo from './MovieInfo';
import Rating from './Rating';
import ActionButtons from './ActionButtons';

const Hero = ({title, year, director, seasons, episodes, description, ratingImg}) => {
    return (
        <section className="content">
        <div className="main-container d-flex flex-column align-items-start">
            <Genres/>
            <div className="movie-title">
                <p>
                    <strong>{title}</strong>
                </p>
            </div>
            <MovieInfo
             year={year}
             director={director}
             seasons={seasons}
             episodes={episodes}
                />
            <div className="text-content1">
                <p>
                     {description}
                </p>
            </div>
            <Rating
            ratingImg={ratingImg}
            />
            <ActionButtons/>
            </div>
            </section>
    );
};

export default Hero;