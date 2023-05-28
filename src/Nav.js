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

    
    const DropServices = () => {
        const [dropOpen, setDropOpen] = useState(0);
        
        function menuToggle() {
            setDropOpen(!dropOpen);
        }
        return (
            <li className='w-full text-center pb-6 md:pb-10'>
                        <button className='' onClick={menuToggle}>services</button>
                        <ul className={`border border-primary w-full hidden flex-col justify-center gap-[1rem] mt-[1rem] pt-[.5rem] pb-[.5rem]  ${dropOpen ? 'open' : ''}`}>
                            <li >
                                <Link onClick={handleClick} to="/services1">Porcelain</Link>
                            </li>
                            <li>
                             <Link onClick={handleClick} to="/services2">Glass</Link>
                            </li>
                            <li>
                                <Link onClick={handleClick} to="/services3">Vanity</Link>
                            </li>
                        </ul>
            </li >
        );
    };

    return (
        <nav className='w-full overflow-hidden fixed lg:relative z-[9998]'>
            <div class="nav-header flex h-28 lg:h-24 w-full bg-primary border-b border-thirdarylol lg:border-b-[1px]">
                <div className='w-full lg:w-[35%] h-full flex lg:ml-[2rem]'>
                    <Link className='justify-self-start ml-[.5rem]' onClick={handleClick} to="/"><img className='h-full' src='image0.webp' alt="fix later"></img></Link>
                    <h1 className='self-center text-center lg:text-start lg:pl-[2rem] flex-1 text-3xl md:text-3xl tracking-widest'>SoCalTubSpecialist</h1>
                </div>
                <div className='w-1/5 lg:w-[65%] md:w-[auto] h-full flex justify-end lg:justify-center items-center mr-[1rem] lg:mr-[0]'>
                    <ul className='w-[80%] h-full flex-row items-center hidden lg:flex'>
                        <li className='w-full text-center text-2xl  underline'>
                            <Link onClick={handleClick} to="/">Home</Link>
                        </li>
                        <li className=' w-full text-center text-2xl'>
                            <Link onClick={handleClick} to="/About">About</Link>
                        </li>
                        <li className='w-full text-center text-2xl'>
                            <Link  onClick={handleClick} to="/Services">Services</Link>
                        </li >
                        <li className='w-full text-center text-2xl'>
                            <Link onClick={handleClick} to="/Gallery">Gallery</Link>
                        </li >
                        <li className='w-full text-center text-2xl'>
                            <Link onClick={handleClick} to="/LocationsServiced">Locations</Link>
                        </li>
                        <li className=' w-full text-center text-2xl'>
                            <Link onClick={handleClick} to="/Quote">Contact</Link>
                        </li>
                    </ul>
                    <button onClick={toggleMenu}> <img className='h-[4.5rem] lg:hidden' src='burger-simple-svgrepo-com.svg' alt='fix later'></img></button>
                </div>
            </div>
            <div  className={`h-[85vh] relative  bg-thirdarylol w-full nav-collapse flex justify-center border-b-2 border-b-primary ${menuOpen ? 'open' : ''}`}> 
                <ul className='list-none w-full flex flex-col items-center justify-center text-5xl font-header-font'>
                    <li className='w-full text-center pb-6 md:pb-10 underline'>
                         <Link onClick={handleClick} to="/">Home</Link>
                    </li>
                    <li className=' w-full text-center pb-6 md:pb-10'>
                        <Link onClick={handleClick} to="/About">About</Link>
                    </li>
                    <DropServices />
                    <li className='w-full text-center pb-6 md:pb-10'>
                        <Link onClick={handleClick} to="/Gallery">Gallery</Link>
                    </li >
                    <li className='w-full text-center pb-6 md:pb-10'>
                        <Link onClick={handleClick} to="/LocationsServiced">Locations Serviced</Link>
                    </li>
                    <li className=' w-full text-center pb-6 md:pb-10'>
                        <Link onClick={handleClick} to="/Quote">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
