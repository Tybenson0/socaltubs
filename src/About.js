import React, { useState } from 'react';
import {motion} from 'framer-motion'

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
          <div className="carousel shadow-xl h-[50vh] lg:h-[60vh] lg:w-[40%]  pb-[1rem] w-[85%] md:w-[75%] md:h-[40vh] border-[2px] border-secondary relative mb-[5rem] flex flex-col">
                
                <div className='w-full h-full absolute bg-primary opacity-65 z-10'></div>
            <div className="card w-full h-[85%] flex flex-col items-center justify-center gap-[.5rem] flex-[88%] relative z-20 pt-[1rem] ">
                <div className='p-[.5rem] border-[3px] border-thirdarylol rounded-full flex justify-center items-center lg:border-[2px]'>
                <img className='h-[90%] md:h-[5rem]  w-[4rem] md:w-[5rem] lg:w-[3rem] lg:h-[3rem]' src='bathrub.svg' alt='fix later'></img>
                </div>
                <h2 className='text-3xl md:text-4xl medium'>{cards[currentCardIndex].title}</h2>
                <p className='text-center leading-[2rem] text-[1.5rem] md:text-[2rem] lg:text-[1.3rem] md:leading-[3rem] w-[90%] light'>{cards[currentCardIndex].content}</p>
            </div>
            <div className='flex flex-row items-center justify-center w-full h-full flex-[12%] gap-[2.5rem] relative z-20 pt-[1rem]'>
            <button onClick={previousCard} className='border-[3px] lg:border-[2px] border-thirdarylol p-[.5rem] rounded-full'>
                    <img className='w-[1.5rem] md:w-[2rem]' src='left.svg' alt='fix later'></img>
                </button>
            <button onClick={nextCard} className='border-[3px] lg:border-[2px] border-thirdarylol p-[.5rem] rounded-full'>
                    <img className='w-[1.5rem] md:w-[2rem]' src='right.svg' alt='fix later'></img>
                </button>
            </div>
          </div>
        );
      };
    
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
         className="w-full h-fit bg-thirdarylol flex flex-col items-center">
            <div className="w-full h-fit  pt-[10rem] lg:pt-[4rem] flex flex-col items-center">
                <h1 className=" text-4xl md:text-[2.4rem] lg:text-[3.2rem] leading-[2.6rem] lg:leading-[4rem] w-[80%] md-w-[75%] lg:w-[50%] text-center small">
                    "The Pinnacle of Bathing Luxury in Southern California and Beyond"
                </h1>
                <h2 className='opacity-[90%] w-[50%] text-center mt-[.5rem] text-[1.2rem] lg:text-[1.6rem] light'>Top Rated vanity and tub service in Santa Clarita Valley</h2>
                <span className="border-2 border-primary w-[50%] lg:w-[25%] mb-[2.5rem] mt-[2rem]"></span>
            </div>
            <div className='flex flex-col items-center lg:flex-row w-full lg:w-[70%] lg:max-h-[50%] lg:mt-[3rem]'>
            <img src='kitchen-2.jpeg' alt='fix later' className="w-[30rem] h-[30rem] md:w-[40rem]  shadow-xl lg:flex-[40%]"></img>
            <div className='flex flex-col items-center lg:flex-[60%] lg:h-[90%] overflow-hidden light'>
            <p className="w-[95%] md:w-[90%] text-[1.2rem] lg:text-[1.2rem] leading-10 lg:leading-8 text-center indent-4 lg:mt-[0] mt-8 small">
                SoCal Tub Specialist is a reputable and established family-owned business serving the 
                Santa Clarita area and beyond. With a track record of over 5 years in the industry, we 
                have garnered a solid reputation for our exceptional tub remodeling and repair services.
                As a family business, we bring a personal touch and commitment to customer satisfaction that sets them apart.
            </p>
            <p className="w-[95%] md:w-[90%] text-[1.2rem] lg:text-[1.2rem] leading-10 lg:leading-8 text-center indent-8  mt-4 small">
                One of the distinguishing features of SoCal Tub Specialist is our unwavering attention to detail. we understand
                that every tub remodel or repair project is unique and deserving of meticulous care. From the initial consultation
                to the final touches, we take pride in ensuring that every aspect of the job is handled with precision and craftsmanship.
                our dedicated team of experts goes the extra mile to exceed customer expectations and deliver outstanding results.
            </p>
            <p className="w-[95%] md:w-[90%] text-[1.2rem] lg:text-[1.2rem] leading-10 lg:leading-8 text-center indent-8 mt-4 small">
                In addition to our expertise, SoCal Tub Specialist takes pride in being a bilingual company. we recognize and embrace
                the diversity of our clientele, effectively communicating and understanding the specific needs of both English and
                Spanish-speaking customers. This commitment to inclusivity ensures seamless interactions and fosters a comfortable experience 
                for all clients, regardless of our preferred language.
            </p>
            </div>
            </div>
            <div className="w-[25rem]  h-[5rem] border-[2px] border-secondary  mt-[2.5rem] lg:mt-[5rem] bg-primary flex justify-center items-center shadow-xl">
                <h3 className="text-3xl md:text-[2rem] small">Get a Free Estimate</h3>
            </div>
            
            <h2 className='text-3xl md:text-4xl mt-[8rem] mb-[1rem] light'>Don't Take Our Word For It!</h2>
            <Carousel />
                
                
            </motion.div>
    );
}

export default About