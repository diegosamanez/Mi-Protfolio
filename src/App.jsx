import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Error from './pages/Error_404';
import Portfolio from "./pages/Portfolio";
import Home from './pages/Home';
import Send from './pages/Send';

function App() {

  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/AboutMe" element={<AboutMe/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/Send" element={<Send/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
