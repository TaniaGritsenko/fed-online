import React, {useState} from 'react';
import {createPortal} from 'react-dom';
import PlayImg from '../assets/play.png.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const ActionButtons = () => {
    const[isPlayOpen, setIsPlayOpen] = useState(false);
    const[isEpisodesOpen, setIsEpisodesOpen] = useState(false);
    const elementStream = () => {
        console.log('натиснула дивитися зараз')
        setIsPlayOpen(true);
    }
    const elementEpisode = () => {
        console.log('натиснула усі серії')
        setIsEpisodesOpen(!isEpisodesOpen);
}
    return (
        <>
        <div className="buttons d-flex align-items-center gap-4">
                <button className="stream-now d-flex align-items-center gap-2" onClick={elementStream}>
                 <span>ДИВИТИСЯ ЗАРАЗ</span>   
                    <img src={PlayImg} alt="play" className="img-stream"/>
                    </button>
                    <button className="episodes d-flex align-items-center justify-content-center" onClick={elementEpisode} > 
                        <span>УСІ СЕРІЇ</span>
                    </button>
                    </div>
                {(isPlayOpen || isEpisodesOpen) &&  createPortal (
                    <div className='player-screen'
                    style={{
                        position: 'fixed',
                        inset: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'black',
                        zIndex:999999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                    }}>
                        <button className='player-close' onClick={() => {
                            setIsPlayOpen (false)
                            setIsEpisodesOpen(false)}}
                            style={{
                                position: 'absolute',
                                top: '30px',
                                right: '35px',
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                fontSize: '40px',
                                cursor: 'pointer',
                            }}>
                            X
                        </button>
                        {isEpisodesOpen && (
                    <div className='player-episodes-menu'>
                        <div className='episodes-column'>
                            <p className='active'>
                                1 сезон
                            </p>
                            <p>2 сезон</p>
                            <p>3 сезон</p>
                            </div>
                            <div className='episodes-column'>
                                <p className='active'>
                                    1 серія
                                </p>
                                <p>2 серія</p>
                                <p>3 серія</p>
                                <p>4 серія</p>
                                <p>5 серія</p>
                            </div>
                        </div>
                        )}
                        <button className='player-play'
                        style={{
                            width:'100px',
                            height: '100px',
                            borderRadius: '50%',
                            border: '2px solid white',
                            background: '#333',
                            color: 'white',
                            fontSize: '38px',
                            cursor: 'pointer',
                        }}>
                            <FontAwesomeIcon icon = {faPlay}></FontAwesomeIcon>
                        </button>
                    </div>,
                    document.body
                )}   
                </>
            );
        }        
        


export default ActionButtons;