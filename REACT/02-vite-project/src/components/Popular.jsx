import React from 'react';
import ArrowPrev from '../assets/Group2.png.png';
import ArrowNext from '../assets/Group1.png.png';
import Card1 from '../assets/Rectangle1.png';
import Card2 from '../assets/Rectangle2.png';
import Card3 from '../assets/Rectangle3.png';
import Card4 from '../assets/Rectangle4.png';
import Card5 from '../assets/Rectangle5.png';

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
            <div className="cards-container">
                <img src={Card1} alt="Rectangle1"/>
                <img src={Card2} alt="Rectangle2"/>
                <img src={Card3} alt="Rectangle3"/>
                <img src={Card4} alt="Rectangle4"/>
                <img src={Card5} alt="Rectangle5"/>
            </div>
            </div>
    </section>
    );
};

export default Popular;