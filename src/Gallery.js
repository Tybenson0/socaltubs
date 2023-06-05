import React, { useState } from 'react';

const Gallery = () => {
  const imagesPorcelain = [
    'porcelain-1.jpeg',
    'porcelain-2.jpeg',
    'porcelain-1.jpeg',
    // Add more image URLs as needed
  ];
  const imagesGlass = [
    'porcelain-1.jpeg',
    'porcelain-2.jpeg',
    'porcelain-1.jpeg',
    // Add more image URLs as needed
  ];
  const imagesKitchen = [
    'porcelain-1.jpeg',
    'porcelain-2.jpeg',
    'porcelain-1.jpeg',
    // Add more image URLs as needed
  ];

  const GridItem = ({ image }) => {
    const [isFullScreen, setFullScreen] = useState(false);
  
    const handleImageClick = () => {
      setFullScreen(!isFullScreen);
    };
  
    return (
      <div className="grid-item max-h-[20vh]">
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
    <div className='w-full h-fit  pt-[12rem] flex flex-col items-center'>
      <h1 className='text-4xl border-[3px] border-primary w-fit h-fit p-[.8rem]'>Projects Gallery</h1>
      <p className="w-[90%] text-[1.4rem] text-center mt-[2rem] leading-[2.5rem] indent-[.5rem]"> 
        We take immense pride in showcasing our work. With unwavering 
        confidence, we invite you to explore our collection, where each image tells a story of exceptional craftsmanship.
         From luxurious designs to flawless finishes, our gallery highlights the transformative power of our tub renovations.
          Immerse yourself in our captivating displays and witness the stunning results we consistently achieve. We are thrilled 
          to show off our work and share the joy of our remarkable tub transformations with you.
      </p>
      <p className="mt-[2rem] text-[1.4rem] w-[90%] text-center">Like anything you see? <span className="border-b-[2px] border-b-secondary pb-[2px]">Contact us today to get a free quote!</span></p>
      <div className="w-[95%]  h-fit mt-[4rem] grid grid-cols-2 grid-rows-6 gap-[1.5rem]">
        <h2 className='w-full max-h-fit text-[2.4rem] tracking-widest flex justify-center items-center text-center border-l-primary border-l-[2px] border-t-primary border-t-[2px]'>Porcelain Projects</h2>
        <GridItem image={imagesPorcelain[0]} />
        <GridItem image={imagesPorcelain[1]} />
        <GridItem image={imagesPorcelain[0]} />
        <GridItem image={imagesPorcelain[1]} />
        <GridItem image={imagesPorcelain[0]} />
        <GridItem image={imagesPorcelain[1]} />
        <GridItem image={imagesPorcelain[0]} />
        </div>
      <div className="w-[95%]  h-fit mt-[4rem] grid grid-cols-2 grid-rows-6 gap-[1.5rem]">
        <GridItem image={imagesKitchen[0]} />
        <h2 className='w-full max-h-fit text-[2.4rem] tracking-widest flex justify-center items-center text-center border-r-primary border-r-[2px] border-t-primary border-t-[2px]'>Kitchen & Vanity</h2>
        <GridItem image={imagesKitchen[1]} />
        <GridItem image={imagesKitchen[0]} />
        <GridItem image={imagesKitchen[1]} />
        <GridItem image={imagesKitchen[0]} />
        <GridItem image={imagesKitchen[1]} />
        <GridItem image={imagesKitchen[0]} />
        </div>
      <div className="w-[95%]  h-fit mt-[4rem] grid grid-cols-2 col-reverse grid-rows-6 gap-[1.5rem]">
        <h2 className='w-[90%] max-h-fit text-[2.4rem] tracking-widest flex justify-center items-center text-center border-l-primary border-l-[2px] border-t-primary border-t-[2px]'>Fiber Glass</h2>
        <GridItem image={imagesGlass[0]} />
        <GridItem image={imagesGlass[1]} />
        <GridItem image={imagesGlass[0]} />
        <GridItem image={imagesGlass[1]} />
        <GridItem image={imagesGlass[0]} />
        <GridItem image={imagesGlass[1]} />
        <GridItem image={imagesGlass[0]} />
        </div>
        
    </div>
  );
};

export default Gallery;