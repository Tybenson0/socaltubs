import React, { useState } from 'react';

function About() {
    const cards = [
        { id: 1, title: 'Jane Doe', content: '"I recently had an amazing experience with Socaltubspecialist. Their expertise and professionalism were evident from start to finish. The team efficiently installed my new tub, ensuring it perfectly met my requirements. The result? Pure bliss!"' },
        { id: 2, title: 'Will Smith', content: '"My recent interaction with SoCalTubSpecialist was outstanding. Their expertise in porcelain, countertops, and vanities is unmatched. The commitment to excellence and attention to detail truly impressed me. The interaction felt comfortable and hassle-free. Highly recommended!"' },
        { id: 3, title: 'Mr. Tub Man', content: '"I recently had the pleasure of hiring SoCalTubSpecialist for my porcelain countertop and vanity needs. Their expertise in porcelain, countertops, and vanities is unmatched. The commitment to excellence and attention to detail truly impressed me. The entire interaction felt comfortable and stress-free."' },
      ];
    
      const Carousel = () => {
        const [currentCardIndex, setCurrentCardIndex] = useState(0);
    
        const nextCard = () => {
          const newIndex = (currentCardIndex + 1) % cards.length;
          setCurrentCardIndex(newIndex);
        };
    
        const previousCard = () => {
          const newIndex = (currentCardIndex - 1 + cards.length) % cards.length;
          setCurrentCardIndex(newIndex);
        };
    
        return (
          <div className="carousel h-[50vh] pb-[1rem] w-[85%] md:w-[75%] md:h-[40vh] border-[2px] border-secondary relative mb-[5rem] flex flex-col">
                
                <div className='w-full h-full absolute bg-primary opacity-65 z-10'></div>
            <div className="card w-full h-[85%] flex flex-col items-center justify-center gap-[.5rem] flex-[88%] relative z-20 pt-[1rem]">
                <div className='p-[1rem] border-[3px] border-thirdarylol rounded-full'>
                <img className='h-[4rem] md:h-[5rem]  w-[4rem] md:w-[5rem]' src='bathrub.svg' alt='fix later'></img>
                </div>
                <h2 className='text-3xl md:text-4xl'>{cards[currentCardIndex].title}</h2>
                <p className='text-center text-2xl md:text-[2rem] md:leading-[3rem] w-[90%]'>{cards[currentCardIndex].content}</p>
            </div>
            <div className='flex flex-row items-center justify-center w-full h-full flex-[12%] gap-[2.5rem] relative z-20 pt-[1rem]'>
            <button onClick={previousCard} className='border-[3px] border-thirdarylol p-[.5rem] rounded-full'>
                    <img className='w-[1.5rem] md:w-[2rem]' src='left.svg' alt='fix later'></img>
                </button>
            <button onClick={nextCard} className='border-[3px] border-thirdarylol p-[.5rem] rounded-full'>
                    <img className='w-[1.5rem] md:w-[2rem]' src='right.svg' alt='fix later'></img>
                </button>
            </div>
          </div>
        );
      };
    
    return (
        <div className="w-full h-fit bg-thirdarylol flex flex-col items-center">
            <div className="w-full h-fit  pt-[10rem] flex flex-col items-center">
                <h2 className=" text-4xl md:text-[2.4rem] leading-[2.6rem] w-[80%] md-w-[75%] text-center">
                    SoCal Tub Specialist: The Pinnacle of Bathing Luxury in Santa Clarita and Beyond
                </h2>
                <h2 className='opacity-[70%] w-[50%] text-center mt-[.5rem] text-[1.2rem]'>Top Rated vanity and tub service in Santa Clarita Valley</h2>
                <span className="border-2 border-primary w-[50%] mb-[2.5rem] mt-[2rem]"></span>
                <img src='kitchen-2.jpeg' alt='fix later' className="w-[75%] h-[36rem] shadow-xl"></img>
            </div>
            <p className="w-[95%] text-[1.4rem] leading-10 text-center indent-4 mt-8">
                SoCal Tub Specialist is a reputable and established family-owned business serving the 
                Santa Clarita area and beyond. With a track record of over 5 years in the industry, we 
                have garnered a solid reputation for our exceptional tub remodeling and repair services.
                As a family business, we bring a personal touch and commitment to customer satisfaction that sets them apart.
            </p>
            <p className="w-[95%] text-[1.4rem] leading-10 text-center indent-8 mt-4">
                One of the distinguishing features of SoCal Tub Specialist is our unwavering attention to detail. we understand
                that every tub remodel or repair project is unique and deserving of meticulous care. From the initial consultation
                to the final touches, we take pride in ensuring that every aspect of the job is handled with precision and craftsmanship.
                our dedicated team of experts goes the extra mile to exceed customer expectations and deliver outstanding results.
            </p>
            <p className="w-[95%] text-[1.4rem] leading-10 text-center indent-8 mt-4">
                In addition to our expertise, SoCal Tub Specialist takes pride in being a bilingual company. we recognize and embrace
                the diversity of our clientele, effectively communicating and understanding the specific needs of both English and
                Spanish-speaking customers. This commitment to inclusivity ensures seamless interactions and fosters a comfortable experience 
                for all clients, regardless of our preferred language.
            </p>
            <div className="w-[25rem]  h-[5rem] border-[2px] border-secondary  mt-[2.5rem] bg-primary flex justify-center items-center shadow-xl">
                <h3 className="text-3xl md:text-[2rem]">Get a Free Estimate</h3>
            </div>
            
            <h2 className='text-3xl md:text-4xl mt-[8rem] mb-[1rem]'>Don't Take Our Word For It!</h2>
            <Carousel />
                
                
            </div>
    );
}

export default About