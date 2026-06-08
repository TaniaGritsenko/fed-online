import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


const Header = ({logo, date, searchIcon, avatar, isLoggedIn}) => {
    const [showSearch, setShowSearch] = useState(false);
    const[searchText, setSearchText] = useState('');
    const [movieTitle, setMovieTitle] = useState('');
    const [login, setLogin] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);
    function changeShowSearch(){
        setShowSearch(!showSearch);
    }
    function changeSearchText(e){
            setSearchText(e.target.value);
        }
        useEffect(() => {
            if (searchText.length >= 3) {
                setMovieTitle('Stranger Things');
            } else {
                setMovieTitle('');
            }    
            console.log('Текс пошуку змінився:', searchText);
            } , [searchText]);
    return (
    <header>
    <div className="netflix-container container-fluid d-flex align-items-center justify-content-between">
        <div className="logo d-flex align-items-center flex-shrink-0">
            <img src={logo} alt="Netflix logo"/>
            <p className="release-date">
                {date}
            </p>
            </div>
            <button className='burger-btn' onClick={() => setMenuOpen(!menuOpen)}>
                <i className='fa-solid fa-bars'></i>
            </button>
        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <NavLink to='/' onClick={() => setMenuOpen(false)}>Головна</NavLink>
            <NavLink to='/about' onClick={() => setMenuOpen(false)}>Про Netflix</NavLink>
            <NavLink to='/price' onClick={() => setMenuOpen(false)}>Підписка</NavLink>
            <NavLink to='/contact' onClick={() => setMenuOpen(false)}>Контакти</NavLink>
        </nav>
        <div className="search d-flex align-items-center flex-shrink-0">
        <button onClick={changeShowSearch}
         className="search-icon">
            <img src={searchIcon} alt="search"/>
        </button>
        {showSearch && (
            <div className='search-block'>
                <button className='search-back' onClick={changeShowSearch}>
                    <i className='fa-solid fa-arrow-left'></i>
                </button>
              <input value={searchText} 
              onChange={changeSearchText}
              type='text'
              placeholder='Пошук фільмів, серіалів, ігор...'
              className='search-input'/>
            </div>
        )}
        {login ? (
        <img src={avatar} 
             alt="avatar" 
             className="avatar" 
             onClick={() => setLogin(false)}/>
        ):(
            <button className='login-btn' onClick={() => setLogin(true)}>Увійти</button>
        )}
        </div>
    </div>
    </header>
    );
};


export default Header;
