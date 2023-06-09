import React, { useState } from 'react';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

const Gallery = () => {
  const imagesPorcelain = [
    'gallery/p-1.webp',
    'gallery/p-2.webp',
    'gallery/p-3.webp',
    'gallery/p-4.webp',
    'gallery/p-5.webp',
    'gallery/p-6.webp',
    'gallery/p-7.webp',
    'gallery/p-8.webp',
    // Add more image URLs as needed
  ];
  const imagesGlass = [
    'gallery/g-1.webp',
    'gallery/g-2.webp',
    'gallery/g-3.webp',
    'gallery/g-4.webp',
    'gallery/g-5.webp',
    'gallery/g-6.webp',
    'gallery/g-7.webp',
    'gallery/g-8.webp',
    // Add more image URLs as needed
  ];
  const imagesKitchen = [
    'gallery/v-1.webp',
    'gallery/v-2.webp',
    'gallery/v-3.webp',
    'gallery/v-4.webp',
    'gallery/v-5.webp',
    'gallery/v-6.webp',
    'gallery/v-7.webp',
    'gallery/v-8.webp',
    // Add more image URLs as needed
  ];

  const GridItem = ({ image }) => {
    const [isFullScreen, setFullScreen] = useState(false);
  
    const handleImageClick = () => {
      setFullScreen(!isFullScreen);
    };
  
    return (
      <div className="grid-item max-h-[20vh] ">
        {isFullScreen ? (
          <div className="full-screen-container" onClick={handleImageClick}>
            <img src={image} alt="fix later" className="full-screen-image" />
          </div>
        ) : (
          <img src={image} alt="fix later" onClick={handleImageClick} />
        )}
      </div>
    );
  };
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: .01}}
    transition={{ duration: 0.5 }}
    className='w-full h-fit mb-[4rem] pt-[12rem] lg:pt-[6rem] flex flex-col items-center bg-thirdarylol'>
      <h1 className='text-4xl border-[3px] border-primary w-fit h-fit p-[.8rem] medium'>Projects Gallery</h1>
      <p className="w-[90%] text-[1.4rem] text-center mt-[2rem] leading-[2.5rem] indent-[.5rem] small"> 
        We take immense pride in showcasing our work. With unwavering 
        confidence, we invite you to explore our collection, where each image tells a story of exceptional craftsmanship.
         From luxurious designs to flawless finishes, our gallery highlights the transformative power of our tub renovations.
          Immerse yourself in our captivating displays and witness the stunning results we consistently achieve. We are thrilled 
          to show off our work and share the joy of our remarkable tub transformations with you.
      </p>
      <p className="mt-[2rem] text-[1.4rem] w-[90%] text-center light">Like anything you see? <Link to="/contact"> <span className="border-b-[2px] border-b-secondary pb-[2px]">Contact us today to get a free quote!</span></Link></p>
      <div className="w-[95%] md:w-[85%] lg:w-[70%] h-fit mt-[4rem] grid grid-cols-2 lg:grid-cols-3 grid-rows-6 gap-[1.5rem] bg-thirdarylol">
        <h2 className='w-full max-h-fit text-[2.4rem] tracking-widest flex justify-center items-center text-center border-l-primary border-l-[2px] border-t-primary border-t-[2px] small'>Porcelain Projects</h2>
        <GridItem image={imagesPorcelain[0]} />
        <GridItem image={imagesPorcelain[1]} />
        <GridItem image={imagesPorcelain[2]} />
        <GridItem image={imagesPorcelain[3]} />
        <GridItem image={imagesPorcelain[4]} />
        <GridItem image={imagesPorcelain[5]} />
        <GridItem image={imagesPorcelain[6]} />
        <GridItem image={imagesPorcelain[7]} />
        
        </div>
      <div className="w-[95%] md:w-[85%] lg:w-[70%] h-fit mt-[4rem] grid grid-cols-2 lg:grid-cols-3 grid-rows-6 gap-[1.5rem] bg-thirdarylol">
        <GridItem image={imagesKitchen[0]} />
        <h2 className=' lg:hidden w-full max-h-fit text-[2.4rem] tracking-widest flex justify-center items-center text-center border-r-primary border-r-[2px] border-t-primary border-t-[2px] small'>Kitchen & Vanity</h2>
        <GridItem image={imagesKitchen[1]} />
        <h2 className=' hidden lg:flex w-full max-h-fit text-[2.4rem] tracking-widest justify-center items-center text-center border-r-primary border-r-[2px] border-t-primary border-t-[2px] small'>Kitchen & Vanity</h2> 
        <GridItem image={imagesKitchen[2]} />       
        <GridItem image={imagesKitchen[3]} />
        <GridItem image={imagesKitchen[4]} />
        <GridItem image={imagesKitchen[5]} />
        <GridItem image={imagesKitchen[6]} />
        <GridItem image={imagesKitchen[7]} />
        </div>
      <div className="w-[95%] md:w-[85%] lg:w-[70%] h-fit mt-[4rem] grid grid-cols-2 lg:grid-cols-3 col-reverse grid-rows-6 gap-[1.5rem] bg-thirdarylol">
        <h2 className='w-[90%] max-h-fit text-[2.4rem] tracking-widest flex justify-center items-center text-center border-l-primary border-l-[2px] border-t-primary border-t-[2px] small pl-[5px]'>Fiber Glass</h2>
        <GridItem image={imagesGlass[0]} />
        <GridItem image={imagesGlass[1]} />
        <GridItem image={imagesGlass[2]} />
        <GridItem image={imagesGlass[3]} />
        <GridItem image={imagesGlass[4]} />
        <GridItem image={imagesGlass[5]} />
        <GridItem image={imagesGlass[6]} />
        <GridItem image={imagesGlass[7]} />
        </div>
        
    </motion.div>
  );
};

export default Gallery;