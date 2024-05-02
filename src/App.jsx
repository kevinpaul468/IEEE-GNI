import './App.css'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Events from './Pages/Events'
import Home from './Pages/Home'
import Members from './Pages/Members'
import Nav from './Pages/Nav'
import Societies from './Pages/Societies'

function App() {
  return (
    <>
      <Nav/>
      <Home />
      <AboutUs/>
      <Societies />
      <Events />
      <Members />
      <Contact />
    </>
  )
}

export default App