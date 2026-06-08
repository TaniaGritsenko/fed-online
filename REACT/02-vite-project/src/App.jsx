import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Logo from './assets/netflix-logo.png.png';
import SearchIcon from './assets/fe_search.png.png';
import Avatar from './assets/avatar.png.png';
import Home from './Pages/Home';
import About from './Pages/About';
import Price from './Pages/Price';
import Contact from './Pages/Contact';
import './App.css';

function App() {
  return (
    <>
    <Header
    logo={Logo}
    date="П'ятниця , 8 липня "
    searchIcon={SearchIcon}
    avatar={Avatar}
    isLoggedIn={true}
    />
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/price' element={<Price></Price>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
    </Routes>
  </>
  )
}

export default App
