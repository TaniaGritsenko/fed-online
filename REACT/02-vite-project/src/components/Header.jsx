import React from 'react';
//import Logo from '../assets/netflix-logo.png.png';
//import SearchIcon from '../assets/fe_search.png.png';
//import Avatar from '../assets/avatar.png.png';


const Header = ({logo, date, searchIcon, avatar, isLoggedIn}) => {
    return (
    <header>
    <div className="netflix-container">
        <div className="logo">
            <img src={logo} alt="Netflix logo"/>
            <p className="release-date">
                {date}
            </p>
        </div>
        <div className="search">
        <button className="search-icon">
            <img src={searchIcon} alt="search"/>
        </button>
        {isLoggedIn? (
        <img src={avatar} alt="avatar" className="avatar"/>
        ):(
            <p className='not-login'>NETFLIX</p>
        )}
        </div>
    </div>
    </header>
    );
};


export default Header;
