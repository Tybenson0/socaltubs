import React, { useState } from 'react';

const Gallery = () => {
  const images = [
    'kitchen-1.png',
    'kitchen-2.jpeg',
    'porcelain-1.jpeg',
  ];

  const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
      const newIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(newIndex);
    };

    const previousImage = () => {
      const newIndex = (currentImageIndex - 1 + images.length) % images.length;
      setCurrentImageIndex(newIndex);
    };

    return (
      <div className="carousel w-full h-[100vh] flex flex-col justify-center">
        <button onClick={previousImage}>&lt;</button>
        <img className='w-[10rem] h-10rem' src={images[currentImageIndex]} alt="Carousel" />
        <button onClick={nextImage}>&gt;</button>
      </div>
    );
  };

  return (
    <div>
      <h1>My Carousel Gallery</h1>
      <Carousel />
    </div>
  );
};

export default Gallery;