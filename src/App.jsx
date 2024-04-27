import './App.css'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Events from './Pages/Events'
import Home from './Pages/Home'
import Members from './Pages/Members'
import Nav from './Pages/Nav'
import Societies from './Pages/Societies'


function App1() {
  

  return (
    <>
      <Nav />
      <Home />
      <AboutUs />
      <Events />
      <Members />
      <Contact />
      <Societies />

      
    </>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App1 />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/home" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/societies" element={<Societies />} />
      </Routes>
    </Router>
  )
}

export default App