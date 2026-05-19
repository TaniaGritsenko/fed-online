import React from 'react';
import Genres from './Genres';
import MovieInfo from './MovieInfo';
import Rating from './Rating';
import ActionButtons from './ActionButtons';

const Hero = () => {
    return (
        <section className="content">
        <div className="main-container">
            <Genres/>
            <div className="movie-title">
                <p>
                    <strong>Stranger Things</strong>
                </p>
            </div>
            <MovieInfo/>
            <div className="text-content1">
                <p>
                     In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries
                </p>
            </div>
            <Rating/>
            <ActionButtons/>
            </div>
            </section>
    );
};

export default Hero;