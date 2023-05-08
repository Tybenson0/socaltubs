import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
      }
    function handleClick() {
        setMenuOpen(false);
    }
    return (
        <nav className='w-full overflow-hidden fixed'>
            <div class="nav-header flex h-32 w-full bg-primary">
                <div className='w-full h-full flex'>
                    <Link className='justify-self-start' onClick={handleClick} to="/"><img className='h-full' src='image0.webp' alt="fix later"></img></Link>
                    <h1 className='self-center text-center flex-1 text-3xl tracking-widest'>SoCalTubSpecialist</h1>
                </div>
                <div className='w-1/5 h-full flex justify-start items-center'>
                    <button onClick={toggleMenu}> <img className='h-[6rem]' src='burger-simple-svgrepo-com.svg' alt='fix later'></img></button>
                </div>
            </div>
            <div  className={`h-[85vh] relative z-50 bg-thirdarylol w-full nav-collapse flex justify-center ${menuOpen ? 'open' : ''}`}> 
                <ul className='list-none w-full flex flex-col items-center justify-center  border-t-2 text-5xl font-header-font'>
                    <li className='w-full text-center pb-6 underline'>
                         <Link onClick={handleClick} to="/">Home</Link>
                    </li>
                    <li className=' w-full text-center p-6'>
                        <Link onClick={handleClick} to="/About">About</Link>
                    </li>
                    <li className='w-full text-center p-6'>
                        <Link  onClick={handleClick} to="/Services">Services</Link>
                    </li >
                    <li className='w-full text-center p-6'>
                        <Link onClick={handleClick} to="/Gallery">Gallery</Link>
                    </li >
                    <li className='w-full text-center p-6'>
                        <Link onClick={handleClick} to="/LocationsServiced">Locations Serviced</Link>
                    </li>
                    <li className=' w-full text-center p-6'>
                        <Link onClick={handleClick} to="/Quote">Get a Quote</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;

