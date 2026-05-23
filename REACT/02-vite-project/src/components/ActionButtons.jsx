import React, {useState} from 'react';
import PlayImg from '../assets/play.png.png'

const ActionButtons = () => {
    const [modalText, setModalText] = useState('');
    const [isOpen, setIsOpen]= useState(false);
    const [message, setMessage] =useState('');
    const elementStream = () => {
        setModalText('Відтворити фільм');
        setIsOpen(true);
    };
    const elementEpisode = () => {
        setModalText('Вибрати сезон');
        setIsOpen(true);
    };
    const closeModal = () =>{
        setIsOpen(false);
    };
    return (
        <div className="buttons">
                <button className="stream-now" onClick={elementStream}>
                 <span>STREAM NOW</span>   
                    <img src={PlayImg} alt="play" className="img-stream"/>
                    </button>
                    <button className="episodes"onClick={elementEpisode} > 
                        <span>ALL EPISODES</span>
                    </button>
                {isOpen && (
                    <div className='modal'>
                        <div className='modal-content'>
                            <button className='modal-close' onClick={closeModal}>x</button>
                            <p>{modalText}</p>
                        </div>
                    </div>
                )}    
            </div>
    );
};

export default ActionButtons;