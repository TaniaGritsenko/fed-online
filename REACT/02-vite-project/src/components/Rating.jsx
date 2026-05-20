import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar as solidStar} from "@fortawesome/free-solid-svg-icons"
import {faStar as regularStar} from "@fortawesome/free-regular-svg-icons"
//import RatingImg from '../assets/rating.png.png'

const Rating = () => {
    const [rating,setRating] = useState(3);
    return (
        <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                  key={star}
                  className='star-btn'
                  onClick={() => setRating(star)}
                  >
                    <FontAwesomeIcon icon={star <= rating ? solidStar : regularStar}/>
                    </button>
                  ))}
            </div>
    );
};

export default Rating;