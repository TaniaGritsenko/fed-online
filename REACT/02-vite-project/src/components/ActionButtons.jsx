import React from 'react';
import PlayImg from '../assets/play.png.png'

const ActionButtons = () => {
    return (
        <div className="buttons">
                <button className="stream-now">
                    <span>
                        STREAM NOW
                    </span>
                    <img src={PlayImg} alt="play" className="img-stream"/>
                    </button>
                    <button className="episodes">
                        <span>
                            ALL EPISODES
                        </span>
                    </button>
            </div>
    );
};

export default ActionButtons;