//import Header from "../components/Header"
//import Logo from "../assets/netflix-logo.png.png";
//import SearchIcon from "../assets/fe_search.png.png";
//import Avatar from "../assets/avatar.png.png";
import Hero from "../components/Hero"
import Popular from "../components/Popular"
import AgeBadge from "../components/AgeBadge";
import "../App.css";

function Home() {
  return (
    <main className="home-page">
  <Hero
  title="Stranger Things"
  year="2019"
  director="Шон Леві"
  seasons="3"
  episodes="5"
  description="У 1980-х роках в Індіані група друзів стикається з надприродними силами та таємними урядовими експерементами. У пошуках відповідей діти розкривають низку незвичайних таємниць."
  />
  <Popular></Popular>
  <AgeBadge
  age="+16" />
  </main>
  )
}

export default Home;
