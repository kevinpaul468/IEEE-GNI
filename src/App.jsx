
import './App.css'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Events from './Pages/Events'
import Home from './Pages/Home'
import Memebers from './Pages/Memebers'
import Nav from './Pages/Nav'
import Societies from './Pages/Societies'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';






function App() {
  

  return (
    <>
      <Nav />
      <Home />
      <AboutUs />
      <Events />
      <Memebers />
      <Contact />
      <Societies />
    
      
    </>
  )
}

export default App
