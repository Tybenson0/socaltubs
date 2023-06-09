import React, { useState } from 'react';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
export const Porcelain = () => {
    const images = ['gallery/p-4.webp', 'gallery/p-5.webp', 'gallery/p-7.webp',]
    return <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: .01}}
    transition={{ duration: 0.5 }}
            className="w-full h-fit bg-thirdarylol flex flex-col items-center">
            <div className="w-full h-fit  pt-[10rem] lg:pt-[6rem] flex flex-col items-center">
                <h2 className=" text-5xl md:text-[3.2rem] leading-[3.2rem] w-[75%] text-center small">
                    Porcelain services
                </h2>
                <h3 className='opacity-[70%] w-[45%]  text-center text-[1.2rem] mt-[.5rem] light'>California top of the line full porcelain services</h3>
                <span className="border-2 border-primary w-[50%] md:w-[25%] mb-[2.5rem] mt-[2rem]"></span>
                
            </div>
            <div className='w-full h-full lg:w-[90%] lg:mt-[3rem] flex flex-col lg:flex-row-reverse items-center'>
            <img src='porcelain.webp' alt='bathtub' className="w-[85%] md:w-[55%] lg:h-[35rem] md:h-[25rem] h-[25rem]"></img>
            <div className='w-full lg:w-[80%] h-full flex flex-col items-center'>
            <p className="w-[90%] text-[1.4rem] md:text-[1.6rem] leading-10 text-center indent-8 mt-8 small">
                SoCalTubSpecialist is a premier provider of top-quality porcelain services for residents in Southern California. 
                With their expertise in porcelain restoration, repair, and refinishing, they are dedicated to transforming worn-out 
                or damaged porcelain fixtures into stunning, like-new pieces.
            </p>
            <p className="w-[90%] text-[1.4rem] md:text-[1.6rem] leading-10 text-center indent-10 mt-4 small">
                Whether it's a chipped bathtub, a cracked sink, or a faded porcelain surface, SoCalTubSpecialist has the knowledge and skills
             to revitalize and enhance the appearance of these fixtures. Their team of experienced technicians utilizes advanced 
             techniques and high-quality materials to meticulously repair and refinish porcelain surfaces, ensuring a durable and
              long-lasting result.
            </p>
            </div>
            </div>
            <Link to="/Contact"><div className="w-[25rem] lg:w-[18rem] lg:h-[3rem] h-[5rem] border-[2px] border-secondary  mt-[2.5rem] mb-[2.5rem] bg-primary flex justify-center items-center">
                <h3 className="text-3xl md:text-[2rem] lg:text-[1.6rem] small">Start my Remodel</h3>
            </div></Link>
                
                    <div className="w-full md:w-[65%] h-[80vh] flex flex-col items-center lg:w-full  md:h-[50vh] lg:h-[80vh]  lg:border-none lg:border-l-2 relative mt-[2rem] md:mt-[4rem] shadow-md"> 
                        <div className="w-full h-full bg-primary absolute opacity-100 z-[1]"></div>
                        <div className="w-[90%] lg:w-[75%] h-full z-50 relative flex flex-row items-center justify-center pl-[1rem] pr-[1rem] ">
                            <span className="h-[95%] w-[.5rem] bg-secondary border border-secondary rounded-full"></span>
                            <div className="flex flex-col justify-center items-start h-[90%] md:h-fit p-[.5rem] border-t-[2px] border-secondary">
                                <h3 className="text-left text-4xl ml-[1rem] h-[20%] flex items-end small">Porcelain Remodeling Services</h3>
                                <p className="text-left text-[1.4rem] ml-[1rem] mt-[.5rem] light">
                                SoCalTubSpecialist offers expert porcelain services, restoring and refinishing worn-out fixtures to their 
                                original beauty with exceptional craftsmanship.</p>
                                <ul className=" w-[85%] h-[80%] flex flex-col ml-[2rem] mt-[2rem] small"> 
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Preperation</li> { /* fix this with proper links later */}
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Measurement and Planning</li>                                
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Cutting & Shaping</li>                                
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Substrate Preparation</li>                                
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Adhesive & Mortar Application</li>                                
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Porcelain Fixture Placement</li>                                
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Grouting</li>                                
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Cleaning & Quality Assurance</li>                                
                                </ul>
                            </div>
                        </div>
                    </div>
                        <h3 className="text-4xl mt-[5rem] lg:mt-[8rem] text-center light">Quality-loving experts at SoCalTubSpecialist.</h3>
                        <ImageCarousel images={images}/>
                        
    </motion.div>;
  };
  
export const Glass = () => {
    const images = ['gallery/g-1.webp', 'gallery/g-3.webp', 'gallery/g-7.webp']
    return <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: .01}}
    transition={{ duration: 0.5 }}
            className="w-full h-fit bg-thirdarylol flex flex-col items-center">
            <div className="w-full h-fit  pt-[10rem] lg:pt-[6rem] flex flex-col items-center">
                <h1 className=" text-5xl md:text-[3.2rem] leading-[3.2rem] w-[75%] text-center small">
                    Fiber Glass services
                </h1>
                <h2 className='opacity-[70%] w-[45%]  text-center text-[1.2rem] mt-[.5rem] light'>California top of the line full Fiber Glass services</h2>
                <span className="border-2 border-primary w-[50%] md:w-[25%] mb-[2.5rem] mt-[2rem]"></span>
                
            </div>
            <div className='w-full h-full lg:w-[90%] lg:mt-[3rem] flex flex-col lg:flex-row-reverse items-center'>
            <img src='glass.webp' alt='bathroom glass' className="w-[85%] md:w-[55%] lg:h-[35rem] md:h-[25rem] h-[25rem]"></img>
            <div className='w-full lg:w-[80%] h-full flex flex-col items-center'>
            <p className="w-[90%] text-[1.4rem] md:text-[1.6rem] leading-10 text-center indent-8 mt-8 small">
                SoCalTubSpecialist is a premier provider of top-quality porcelain services for residents in Southern California. 
                With their expertise in porcelain restoration, repair, and refinishing, they are dedicated to transforming worn-out 
                or damaged porcelain fixtures into stunning, like-new pieces.
            </p>
            <p className="w-[90%] text-[1.4rem] md:text-[1.6rem] leading-10 text-center indent-10 mt-4 small">
                Whether it's a chipped bathtub, a cracked sink, or a faded porcelain surface, SoCalTubSpecialist has the knowledge and skills
             to revitalize and enhance the appearance of these fixtures. Their team of experienced technicians utilizes advanced 
             techniques and high-quality materials to meticulously repair and refinish porcelain surfaces, ensuring a durable and
              long-lasting result.
            </p>
            </div>
            </div>
            <Link to="/Contact"><div className="w-[25rem] lg:w-[18rem] lg:h-[3rem] h-[5rem] border-[2px] border-secondary  mt-[2.5rem] mb-[2.5rem] bg-primary flex justify-center items-center">
                <h3 className="text-3xl md:text-[2rem] lg:text-[1.6rem] small">Start my Remodel</h3>
            </div></Link>
                
                    <div className="w-full md:w-[65%] h-[80vh] flex flex-col items-center lg:w-full  md:h-[50vh] lg:h-[80vh]  lg:border-none lg:border-l-2 relative mt-[2rem] md:mt-[4rem] shadow-md"> 
                        <div className="w-full h-full bg-primary absolute opacity-100 z-[1]"></div>
                        <div className="w-[90%] lg:w-[75%] h-full z-50 relative flex flex-row items-center justify-center pl-[1rem] pr-[1rem] ">
                            <span className="h-[95%] w-[.5rem] bg-secondary border border-secondary rounded-full"></span>
                            <div className="flex flex-col justify-center items-start h-[90%] md:h-fit p-[.5rem] border-t-[2px] border-secondary">
                                <h4 className="text-left text-4xl ml-[1rem] h-[20%] flex items-end small">Fiber Glass Remodeling Services</h4>
                                <p className="text-left text-[1.4rem] ml-[1rem] mt-[.5rem] light">
                                SoCalTubSpecialist offers expert porcelain services, restoring and refinishing worn-out fixtures to their 
                                original beauty with exceptional craftsmanship.</p>
                                <ul className=" w-[85%] h-[80%] flex flex-col ml-[2rem] mt-[2rem] small"> 
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Preperation</li> { /* fix this with proper links later */}
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Measurement and Planning</li>                                
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Cutting & Shaping</li>                                
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Substrate Preparation</li>                                
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Adhesive & Mortar Application</li>                                
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Porcelain Fixture Placement</li>                                
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Grouting</li>                                
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Cleaning & Quality Assurance</li>                                
                                </ul>
                            </div>
                        </div>
                    </div>
                        <h5 className="text-4xl mt-[5rem] lg:mt-[8rem] text-center light">Quality-loving experts at SoCalTubSpecialist.</h5>
                        <ImageCarousel images={images}/>
                        
    </motion.div>;
};
  
export const Vanity = () => {
    const images = ['gallery/v-1.webp', 'gallery/v-4.webp', 'gallery/v-7.webp']
    return <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: .01}}
    transition={{ duration: 0.5 }}
            className="w-full h-fit bg-thirdarylol flex flex-col items-center">
            <div className="w-full h-fit  pt-[10rem] lg:pt-[6rem] flex flex-col items-center">
                <h1 className=" text-5xl md:text-[3.2rem] leading-[3.2rem] w-[75%] text-center small">
                    Vanity services
                </h1>
                <h2 className='opacity-[70%] w-[45%]  text-center text-[1.2rem] mt-[.5rem] light'>California top of the line full Vanity services</h2>
                <span className="border-2 border-primary w-[50%] md:w-[25%] mb-[2.5rem] mt-[2rem]"></span>
                
            </div>
            <div className='w-full h-full lg:w-[90%] lg:mt-[3rem] flex flex-col lg:flex-row-reverse items-center'>
            <img src='vanity.webp' alt='bathroom sink' className="w-[85%] md:w-[55%] lg:h-[35rem] md:h-[25rem] h-[27rem]"></img>
            <div className='w-full lg:w-[80%] h-full flex flex-col items-center'>
            <p className="w-[90%] text-[1.4rem] md:text-[1.6rem] leading-10 text-center indent-8 mt-8 small">
                SoCalTubSpecialist is a premier provider of top-quality porcelain services for residents in Southern California. 
                With their expertise in porcelain restoration, repair, and refinishing, they are dedicated to transforming worn-out 
                or damaged porcelain fixtures into stunning, like-new pieces.
            </p>
            <p className="w-[90%] text-[1.4rem] md:text-[1.6rem] leading-10 text-center indent-10 mt-4 small">
                Whether it's a chipped bathtub, a cracked sink, or a faded porcelain surface, SoCalTubSpecialist has the knowledge and skills
             to revitalize and enhance the appearance of these fixtures. Their team of experienced technicians utilizes advanced 
             techniques and high-quality materials to meticulously repair and refinish porcelain surfaces, ensuring a durable and
              long-lasting result.
            </p>
            </div>
            </div>
            <Link to="/Contact"><div className="w-[25rem] lg:w-[18rem] lg:h-[3rem] h-[5rem] border-[2px] border-secondary  mt-[2.5rem] mb-[2.5rem] bg-primary flex justify-center items-center">
                <h3 className="text-3xl md:text-[2rem] lg:text-[1.6rem] small">Start my Remodel</h3>
            </div></Link>
                
                    <div className="w-full md:w-[65%] h-[80vh] flex flex-col items-center lg:w-full  md:h-[50vh] lg:h-[80vh]  lg:border-none lg:border-l-2 relative mt-[2rem] md:mt-[4rem] shadow-md"> 
                        <div className="w-full h-full bg-primary absolute opacity-100 z-[1]"></div>
                        <div className="w-[90%] lg:w-[75%] h-full z-50 relative flex flex-row items-center justify-center pl-[1rem] pr-[1rem] ">
                            <span className="h-[95%] w-[.5rem] bg-secondary border border-secondary rounded-full"></span>
                            <div className="flex flex-col justify-center items-start h-[90%] md:h-fit p-[.5rem] border-t-[2px] border-secondary">
                                <h3 className="text-left text-4xl ml-[1rem] h-[20%] flex items-end small">Vanity Remodeling Services</h3>
                                <p className="text-left text-[1.4rem] ml-[1rem] mt-[.5rem] light">
                                SoCalTubSpecialist offers expert porcelain services, restoring and refinishing worn-out fixtures to their 
                                original beauty with exceptional craftsmanship.</p>
                                <ul className=" w-[85%] h-[80%] flex flex-col ml-[2rem] mt-[2rem] small"> 
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Preperation</li> { /* fix this with proper links later */}
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Measurement and Planning</li>                                
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Cutting & Shaping</li>                                
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Substrate Preparation</li>                                
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Adhesive & Mortar Application</li>                                
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Porcelain Fixture Placement</li>                                
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Grouting</li>                                
                                    <li className="text-[1.6rem] md:text-[2rem] flex flex-row-center items-center justify-start flex-auto"><span className="inline-block bg-thirdarylol w-[.5rem] h-[.5rem] mr-[.5rem] rounded-full"></span>Cleaning & Quality Assurance</li>                                
                                </ul>
                            </div>
                        </div>
                    </div>
                        <h3 className="text-4xl mt-[5rem] lg:mt-[8rem] text-center light">Quality-loving experts at SoCalTubSpecialist.</h3>
                        <ImageCarousel images={images}/>
                        
    </motion.div>;
};

const ImageCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

    return (
      <div className="carousel h-[50vh] w-[85%] lg:w-[50%] lg:h-[60vh] border-[2px] border-primary relative mb-[5rem] mt-[2.5rem] flex flex-col shadow-lg">

            <img className="carousel-image h-full" src={images[currentImageIndex]} alt="Carousel" />
        <div className='w-full h-full absolute grid grid-cols-2 items-center p-[1rem]'>
        <button onClick={goToPreviousImage} className='border-[3px] border-primary flex items-center justify-center p-[.25rem]  rounded-full w-fit h-fit bg-thirdarylol'>
                <img className='w-[3rem] fill-primary' src='left2.svg' alt='fix later'></img>
            </button>
        <button onClick={goToNextImage} className='border-[3px] border-primary flex items-center justify-center p-[.25rem]  rounded-full justify-self-end w-fit h-fit bg-thirdarylol'>
                <img className='w-[3rem]' src='right2.svg' alt='fix later'></img>
            </button>
            </div>
      </div>
    );
  };