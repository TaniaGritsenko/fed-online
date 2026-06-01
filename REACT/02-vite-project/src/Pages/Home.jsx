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
    <>
  <Hero
  title="Stranger Things"
  year="2019"
  director="Shawn Levy"
  seasons="3"
  episodes="5"
  description="In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries."
  />
  <Popular></Popular>
  <AgeBadge
  age="+16"
  />
  </>
  )
}

export default Home;
