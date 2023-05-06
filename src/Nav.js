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
        <nav className='w-full overflow-hidden'>
            <div class="nav-header flex h-32 w-full bg-primary">
                <div className='w-full h-full flex justify-start ml-6'>
                    <Link onClick={handleClick} to="/"><img className='h-full' src='image0.webp' alt="fix later"></img></Link>
                </div>
                <div className='w-1/5 h-full flex justify-start items-center'>
                    <button onClick={toggleMenu}> <img src='burger-simple-svgrepo-com.svg' alt='fix later'></img></button>
                </div>
            </div>
            <div  className={`h-[85vh] w-full nav-collapse flex justify-center ${menuOpen ? 'open' : ''}`}> 
                <ul className='list-none w-full flex flex-col items-center justify-center  border-t-2 text-5xl'>
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

