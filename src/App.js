import NavBar from './Nav';
import { BrowserRouter as Router} from 'react-router-dom';
import Animated from './Animated';

function App() {
  
  return (
    <section className='min-w-screen h-screen  bg-thirdarylol'>
      <Router>
        <NavBar />
            <Animated />
      </Router>
      <Footer />
    </section >
  );
}
const Footer = () => {
  return (
      <div className="h-[30vh] lg:h-[30vh] w-full flex flex-col justify-center items-center pt-[2.5rem] lg:mt-[5rem] bg-thirdarylol">
                <span className="border-2 border-primary w-[50%] lg:w-[25%] mb-[2.5rem] mt-[2rem]"></span>
                  <div className="w-[80%] h-full flex flex-row md:w-[55%] lg:w-[25%]">
                  <div className="flex-[85%] gap-[1rem] flex flex-col w-full h-full">
                      <div className="h-[33%]  w-full flex flex-row items-center">
                          <img className='h-[2rem] w-[2rem] flex-[15%] ' src='phone.svg' alt="fix later"></img>
                          <h3 className="flex-[85%] text-[1.4rem] ml-[1rem] small">(661) 506-6023 </h3>
                      </div>
                      <div className="h-[33%]  w-full flex flex-row items-center">
                          <img className='h-[2rem] w-[2rem] flex-[15%] ml-[.25rem] lg:ml-[0]' src='email.svg' alt="fix later"></img>
                          <h3 className="flex-[85%] text-[1.4rem] ml-[1rem] lg:-[ml-.5rem] small">socaltubspecialist@gmail.com</h3>
                      </div>
                      <div className="h-[34%]  w-full flex flex-row items-center">
                          <img className='h-[2rem] w-[2rem] flex-[15%] ' src='location.svg' alt="fix later"></img>
                          <h3 className="flex-[85%] text-[1.4rem] ml-[1rem] small">Santa Clarita, California, 91355</h3>
                      </div>
                  </div>
                  
                  </div>
              <h4 className="mt-[2rem] mb-[3rem] lg:mb-[8rem] font-header-font text-[.8rem] md:text-[1.2rem] lg:text-[.6rem] opacity-[.6] small">@ 2023 by SoCalTubSpecialist. Designed by TySlyDesigns</h4>
              </div>
  )
}
export default App;
