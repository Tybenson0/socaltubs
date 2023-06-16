import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const desktopServices = [
        'Porcelain',
        'Glass',
        'Vanity',
    ];
   const desktopLocations = [
    'Santa Clarita',
    'Antelope Valley',
    'Surrounding Areas',
   ];
   const sectionTitle = [
        'Services',
        'Locations',
   ];
   const locationLinks = [
    'SantaClarita',
    'AntelopeValley',
    'Surrounding',
   ]
   const servicesLinks = [
    'services1',
    'services2',
    'services3',
   ];


    function handleClick() {
        setMenuOpen(false);
    }

    function toggleMenu() {
        
        setMenuOpen(!menuOpen);
    }
    const ToggleIcon = () => {
        return (
            <img onClick={toggleMenu} src="email.svg" alt="fix your stupid fucking shit react or I will slit the devs throats"></img>
        );
      };
    
    const DropServices = () => {
        const [dropOpen, setDropOpen] = useState(0);
        
        
        function serviceToggle() {
            setDropOpen(!dropOpen);
        }

        
        return (
            <li className='w-full text-center pb-10 md:pb-10 ml-[.5rem]'>
                        <button className='flex flex-row  justify-center w-full small text-[2.6rem] small' onClick={serviceToggle}>Services <div className={`plusminus mt-[.75rem] ml-[.5rem] justify-self-center ${dropOpen ? 'active' : ''}`}></div></button>
                        <ul className={` w-full  flex-col justify-center gap-[1.5rem] mt-[.5rem]  ${dropOpen ? 'dropNav' : 'closeNav'}`}>
                            <li className='text-[1.8rem] small'>
                                <Link onClick={handleClick} to="/services1">Porcelain</Link>
                            </li>
                            <li className='text-[1.8rem] small'>
                             <Link onClick={handleClick} to="/services2">Glass</Link>
                            </li>
                            <li className='text-[1.8rem] small'>
                                <Link onClick={handleClick} to="/services3">Vanity</Link>
                            </li>
                        </ul>
            </li >
        );
    };
    const DropLocations = () => {
        const [dropOpen, setDropOpen] = useState(0);
        
        function locationToggle() {
            setDropOpen(!dropOpen);
        }
        return (
            <li className='w-full text-center pb-10 md:pb-10 ml-[.5rem]'>
                        <button className='flex flex-row  justify-center w-full text-[2.6rem] small' onClick={locationToggle}>Locations<div className={`plusminus mt-[.75rem] ml-[.5rem] justify-self-center ${dropOpen ? 'active' : ''}`}></div></button>
                        <ul className={`w-full hidden flex-col justify-center gap-[2.25rem] mt-[1.25rem]  ${dropOpen ? 'dropNav' : 'closeNav'}`}>
                            <li className='text-[1.8rem] small'>
                                <Link onClick={handleClick} to="/SantaClarita">Santa Clarita</Link>
                            </li>
                            <li className='text-[1.8rem] small'>
                             <Link onClick={handleClick} to="/AntelopeValley">Antelope Valley</Link>
                            </li>
                            <li className='text-[1.8rem] small'>
                                <Link onClick={handleClick} to="/Surrounding">Surrounding Areas</Link>
                            </li>
                        </ul>
            </li >
        );
    };
    
    const ServicesDesktop = (props) => {
        const [isHovered, setIsHovered] = useState(false);
        const {titles} = props;
        const {section} = props;
        const {links} = props;

        const handleMouseEnter = () => {
            setIsHovered(true);
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
        };
        function handleClick() {
            setIsHovered(false);
        }

        
        return (
            <li className='w-full h-[100%]   flex flex-col relative  ml-[.5rem]'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
                <div className='w-full h-full relative'>
                        <p className='text-2xl flex-[100%] h-full flex items-center justify-center w-full small hover:cursor-default'>{section}</p>
                        {isHovered && (
                        <div className="w-fit pb-[1rem] pr-[1rem] pl-[1rem] h-fit  bg-thirdarylol border-l-[2px] border-b-[2px] border-r-[2px] border-primary absolute z-[9999] whitespace-nowrap ">
                            <Link onClick={handleClick} className='w-full h-[33%] ' to={links[0]}><p className=' mt-[1rem] text-[1.4rem] text-center light hover:text-primary transition-colors duration-200' key={0}>{titles[0]}</p></Link>
                            <Link onClick={handleClick} className='w-full h-[33%] ' to={links[1]}><p className=' mt-[1rem] text-[1.4rem] text-center light hover:text-primary transition-colors duration-200' key={1}>{titles[1]}</p></Link>
                            <Link onClick={handleClick} className='w-full h-[33%] ' to={links[2]}><p className=' mt-[1rem] text-[1.4rem] text-center light hover:text-primary transition-colors duration-200'key={2}>{titles[2]}</p></Link>
                        </div>
                        )}
                </div>
            </li >
        );
    };

    return (
        <nav className='w-full overflow-visible lg:overflow-visible fixed lg:relative z-[9998]'>
            <div class="nav-header flex h-28 lg:h-24 w-full bg-primary border-b border-thirdarylol lg:border-b-[1px]">
                <div className='w-full lg:w-[35%] h-full flex lg:ml-[2rem]'>
                    <Link className='justify-self-start ml-[.5rem]' onClick={handleClick} to="/"><img className='h-full w-[6rem]' src='image0.webp' alt="fix later"></img></Link>
                    <h1 className=' w-fit self-center text-center lg:text-start lg:pl-[2rem] flex-1 text-2xl md:text-3xl  tracking-widest curly'>SoCalTubSpecialist</h1>
                </div>
                <ToggleIcon/>
                <div className='w-1/5 lg:w-[65%] md:w-[auto] h-full flex justify-end lg:justify-center items-center mr-[1rem] lg:mr-[0]'>
                    <ul className='w-[80%] h-full flex-row items-center hidden lg:flex small'>
                        <li className='w-full text-center text-2xl hover:text-thirdarylol transition-colors duration-200'>
                            <Link onClick={handleClick} to="/">Home</Link>
                        </li>
                        <li className=' w-full text-center text-2xl hover:text-thirdarylol transition-colors duration-200'>
                            <Link onClick={handleClick} to="/About">About</Link>
                        </li>
                        <ServicesDesktop titles={desktopServices} section={sectionTitle[0]} links={servicesLinks}/>
                        <li className='w-full text-center text-2xl hover:text-thirdarylol transition-colors duration-200'>
                            <Link onClick={handleClick} to="/Gallery">Gallery</Link>
                        </li >
                        <ServicesDesktop titles={desktopLocations} section={sectionTitle[1]} links={locationLinks}/>
                        <li className=' w-full text-center text-2xl hover:text-thirdarylol transition-colors duration-200'>
                            <Link onClick={handleClick} to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                  
            </div>
            <div  className={`h-[85vh] lg:hidden relative  bg-thirdarylol w-full nav-collapse flex justify-center border-b-2 border-b-primary ${menuOpen ? 'open' : 'close'}`}> 
                <ul className='list-none w-full flex flex-col items-center justify-center text-5xl font-header-font'>
                    <li className='w-full text-center pb-10 md:pb-10 small text-[2.6rem] '>
                         <Link onClick={handleClick} to="/">Home</Link>
                    </li>
                    <li className=' w-full text-center pb-10 md:pb-10 small text-[2.6rem]'>
                        <Link onClick={handleClick} to="/About">About</Link>
                    </li>
                    <DropServices />
                    <li className='w-full text-center pb-10 md:pb-10 small text-[2.6rem]'>
                        <Link onClick={handleClick} to="/Gallery">Gallery</Link>
                    </li >
                    <DropLocations />
                    <li className=' w-full text-center  small text-[2.6rem]'>
                        <Link onClick={handleClick} to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;

