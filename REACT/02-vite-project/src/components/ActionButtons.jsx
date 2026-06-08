import React, {useState} from 'react';
import {createPortal} from 'react-dom';
import PlayImg from '../assets/play.png.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const ActionButtons = () => {
    const[isPlayOpen, setIsPlayOpen] = useState(false);
    const[isEpisodesOpen, setIsEpisodesOpen] = useState(false);
    const[showSeasons, setShowSeasons] = useState(false);
    const[showSeries, setShowSeries] = useState(false);
    const[selectedSeason, setSelectedSeason] = useState('1 сезон');
    const[selectedSeries, setSelectedSeries] = useState('1 серія');
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
                    <div className='player-episodes-menu' 
                    style={{
                        position: 'absolute',
                        top: '120px',
                        left: '25px',
                        right: '25px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        zIndex: '10'
                    }}>
                        <div className='episodes-column'>
                            <p className='active' onClick={() => setShowSeasons(!showSeasons)}
                                style={{ cursor: 'pointer'}}>
                                {selectedSeason}
                            </p>
                            {showSeasons && (
                                <>
                            <p onClick={() => {
                                setSelectedSeason('1 сезон');
                                setShowSeasons(false)}}> 1 сезон</p>
                            <p onClick={() => {
                                setSelectedSeason('2 сезон');
                                setShowSeasons(false)}}> 2 сезон</p>
                            <p onClick={() => {
                                setSelectedSeason('3 сезон');
                                setShowSeasons(false)}}> 3 сезон</p>
                                </>
                            )}   
                            </div>
                            <div className='episodes-column'>
                                <p className='active' onClick={() => setShowSeries(!showSeries)}
                                style={{cursor: 'pointer'}}>
                                    {selectedSeries}
                                </p>
                                {showSeries && (
                                    <>
                                    <p onClick={() => {
                                        setSelectedSeries('1 серія');
                                        setShowSeries(false)
                                    }}>1 серія</p>
                                    <p onClick={() => {
                                        setSelectedSeries('2 серія');
                                        setShowSeries(false)
                                    }}>2 серія</p>
                                    <p onClick={() => {
                                        setSelectedSeries('3 серія');
                                        setShowSeries(false)
                                    }}>3 серія</p>
                                    <p onClick={() => {
                                        setSelectedSeries('4 серія');
                                        setShowSeries(false)
                                    }}>4 серія</p>
                                    <p onClick={() => {
                                        setSelectedSeries('5 серія');
                                        setShowSeries(false)
                                    }}>5 серія</p>
                                    </>
                                )}
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