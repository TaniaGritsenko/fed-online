import { useState } from 'react';


const Header = ({logo, date, searchIcon, avatar, isLoggedIn}) => {
    const [showSearch, setShowSearch] = useState(false);
    const[searchText, setSearchText] = useState('');
    function changeShowSearch(){
        setShowSearch(!showSearch);
    }
    function changeSearchText(e){
        const value = e.target.value;
        if (value.length >= 3){
            setSearchText('Stranger Things');
        } else{
            setSearchText(value);
        }
    }
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
        <button onClick={changeShowSearch}
         className="search-icon">
            <img src={searchIcon} alt="search"/>
        </button>
        {showSearch && (
            <div className='search-block'>
              <input value={searchText} 
              onChange={changeSearchText}
              type='text'
              placeholder='Пошук фільму:'
              className='search-input'/>
              {searchText.trim() ? (
                <p className='search-result'>
                 Назва фільму: <br/>
                 {searchText}   
                </p>
              ) : (
                <p className='search-result'>
                 Пошук   
                </p>
              )}  
            </div>
        )}
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
