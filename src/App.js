import NavBar from './Nav';
import Home from './Home';
import About from './About';
import { Porcelain, Glass, Vanity } from './Services';
import Gallery from './Gallery';
import {SantaClarita, AntelopeValley, Surrounding} from './LocationsServiced';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <section className='min-w-screen h-screen bg-thirdarylol'>
      <Router>
        <NavBar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services1" element={<Porcelain />} />
            <Route path="/services2" element={<Glass />} />
            <Route path="/services3" element={<Vanity />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/SantaClarita" element={<SantaClarita />} />
            <Route path="/AntelopeValley" element={<AntelopeValley />} />
            <Route path="/Surrounding" element={<Surrounding />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
      <Footer />
      </Router>
    </section >
  );
}
const Footer = () => {
  return (
      <div className="h-[30vh] lg:h-[30vh] w-full flex flex-col justify-center items-center pt-[2.5rem] border-t-[3px] border-primary bg-thirdarylol">
                  <div className="w-[75%] h-full flex flex-row md:w-[60%]">
                  <div className="flex-[85%] flex flex-col  ju  w-full h-full">
                      <div className="h-[33%]  w-full flex flex-row items-center">
                          <img className='h-[2.5rem] w-[2.5rem] flex-[15%] ml-[2rem]' src='phone.svg' alt="fix later"></img>
                          <h3 className="flex-[85%] text-[1.4rem] ml-[1rem]">(661) 506-6023 </h3>
                      </div>
                      <div className="h-[33%]  w-full flex flex-row items-center">
                          <img className='h-[2.5rem] w-[2.5rem] flex-[15%] ml-[2rem]' src='email.svg' alt="fix later"></img>
                          <h3 className="flex-[85%] text-[1.4rem] ml-[1rem]">socaltubspecialist@gmail.com</h3>
                      </div>
                      <div className="h-[34%]  w-full flex flex-row items-center">
                          <img className='h-[2.5rem] w-[2.5rem] flex-[15%] ml-[2rem]' src='location.svg' alt="fix later"></img>
                          <h3 className="flex-[85%] text-[1.4rem] ml-[1rem]">Santa Clarita, California, 91355</h3>
                      </div>
                  </div>
                  <div className="flex-[15%] w-full h-full flex flex-col justify-start items-start pl-[.5rem]">
                  <img className='h-[75%] w-[60%] lg:w-[2.5rem]' src='instagram.svg' alt="fix later"></img>
                  <img className='h-[75%] w-[60%] lg:w-[55%] ' src='facebook.svg' alt="fix later"></img>
                  </div>
                  </div>
              <h4 className="mt-[2rem] mb-[1rem] font-header-font text-[1rem] md:text-[1.2rem] opacity-[.6]">@ 2023 by SoCalTubSpecialist. Designed by TySlyDesigns</h4>
              </div>
  )
}
export default App;
