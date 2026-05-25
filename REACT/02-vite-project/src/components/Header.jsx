import { useState, useEffect } from 'react';


const Header = ({logo, date, searchIcon, avatar, isLoggedIn}) => {
    const [showSearch, setShowSearch] = useState(false);
    const[searchText, setSearchText] = useState('');
    const [movieTitle, setMovieTitle] = useState('');
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

       // useEffect(() => {
         //   console.log('Пошук відкритий або закритий:', showSearch);
       // },[showSearch]);
       // useEffect(() => {
          //  console.log('Текст пошуку змінився:', searchText);
      //  },[searchText]);
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
              {movieTitle.trim() ? (
                <p className='search-result'>
                 Назва фільму: <br/>
                 {movieTitle}   
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
