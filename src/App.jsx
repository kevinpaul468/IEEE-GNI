import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Events from './Pages/Events'
import Home from './Pages/Home'
import Allmem from './Pages/Indepages/Allmem'
import Members from './Pages/Members'
import Nav from './Pages/Nav'
import Societies from './Pages/Societies'
import NotFound from './Pages/NotFound'

function App1() {
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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/IEEE-GNI" element={<App1 />} />
        {/* <Route path="/members" element={<AllMembers />} />
        <Route path="/events/:event" element={<Event/>} />
        <Route path='/code-of-conduct' element={<CodeOfConduct />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App