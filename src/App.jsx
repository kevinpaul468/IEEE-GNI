import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Events from './Pages/Events'
import Home from './Pages/Home'
import AllMem from './Pages/Indepages/Allmem'
import Members from './Pages/Members'
import Nav from './Pages/Nav'
import Societies from './Pages/Societies'
import NotFound from './Pages/NotFound'
import ComputerSociety from './Pages/societies/ComputerSociety'
import CommunicationSociety from './Pages/societies/CommunicationSociety'
import CircuitsAndSystemsSociety from './Pages/societies/CircuitsAndSystemsSociety'
import FacltyAdv from './Pages/FacltyAdv'
import AllEvents from './Pages/AllEvents.jsx'
import CodeOfConduct from './Pages/CodeOfConduct'
import FutureEventTimeLine from './Pages/FutureEventTimeLine'



function App1() {
  return (
    <>
      <Nav/>
      <Home />
     
  
    </>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/IEEE-GNI" element={<App1 />} />
        <Route path="/IEEE-GNI/members" element={<AllMem />} />
        <Route path='/IEEE-GNI/ComputerSociety' element={<ComputerSociety/>} />
        <Route path='/IEEE-GNI/CommunicationSociety' element={<CommunicationSociety/>} />
        <Route path='/IEEE-GNI/CircuitsAndSystemsSociety' element={<CircuitsAndSystemsSociety/>} />
        <Route path="/IEEE-GNI/events" element={<AllEvents />} />
        <Route path="/IEEE-GNI/events/:event" element={<Event/>} />
        <Route path='/IEEE-GNI/code-of-conduct' element={<CodeOfConduct />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App


