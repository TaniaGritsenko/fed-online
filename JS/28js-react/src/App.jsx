import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <img src={reactLogo} className='logo' alt='React logo'></img>
    <h1>React проєкт</h1>
  <p>Я створила цей проект за допомогою Vite</p>
  <p>Для цього завдання я вибрала бібліотеку React</p>
  <button onClick={() => setCount(count + 1)}>
    Натиснуто {count} разів
  </button>
  </div>
  )
}

export default App
