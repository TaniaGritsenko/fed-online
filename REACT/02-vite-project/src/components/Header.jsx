import React from 'react';
import Logo from '../assets/netflix-logo.png.png';
import SearchIcon from '../assets/fe_search.png.png';
import Avatar from '../assets/avatar.png.png';


const Header = () => {
    return (
    <header>
    <div className="netflix-container">
        <div className="logo">
            <img src={Logo} alt="Netflix logo"/>
            <p className="release-date">
                Friday July 8th
            </p>
        </div>
        <div className="search">
        <button className="search-icon">
            <img src={SearchIcon} alt="search"/>
        </button>
        <img src={Avatar} alt="avatar" className="avatar"/>
        </div>
    </div>
    </header>
    );
};


export default Header;
