import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
export const SantaClarita = () => {
    return (
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: .01}}
        transition={{ duration: 0.5 }}
        className="w-fit h-fit bg-thirdarylol flex flex-col items-center">
            <div className="w-full h-fit  pt-[10rem] lg:pt-[5rem] flex flex-col items-center">
                <h1 className=" text-4xl leading-[2.5rem] w-[75%] text-center small">
                    Top Tub Specialist Serving Santa Clarita
                </h1>
                <h2 className='opacity-[70%] w-[55%] text-center text-[1.2rem] mt-[.5rem] light'>Serving the Entire Santa Clarita Valley</h2>
                <span className="border-2 border-primary w-[40%] md:w-[25%] mb-[2.5rem] mt-[2rem]"></span>
                
            </div >
            <div className="w-full lg:w-[80%] h-full flex flex-col items-center lg:flex-row">
                <img src='santa.webp' alt='santa clarita' className="w-[85%] md:w-[50%]  h-[20rem] lg:h-[25rem]"></img>
            <div className="w-full h-full flex flex-col items-center">
            <p className="w-[90%] text-[1.4rem] leading-10 text-center indent-8 mt-8 small">
            Socal Tub Specialists, based in the picturesque Santa Clarita Valley in California, is renowned for
             their exceptional work and professionalism in the field of tub refinishing and restoration. With a
              commitment to excellence, they have become a trusted name in the community, earning the admiration and 
              appreciation of their clients. The skilled team at Socal Tub Specialists takes pride in their craft, delivering
               remarkable results that transform worn-out tubs into stunning, rejuvenated masterpieces.
            </p>
            <p className="w-[90%] text-[1.4rem] leading-10 text-center indent-10 mt-4 small">
            The Santa Clarita Valley community has embraced Socal Tub Specialists for their unwavering
             dedication to quality and attention to detail. Homeowners and businesses alike have experienced the transformative
              power of their work, breathing new life into their bathrooms with beautifully refinished tubs. Socal Tub Specialists'
               professionalism shines through in every project, as they prioritize customer satisfaction and strive to exceed expectations.
                Their commitment to excellence and customer-centric approach have earned them a loyal following and a reputation for being
                 one of the top tub refinishing specialists in the area.
            </p>
            <p className="w-[90%] text-[1.4rem] leading-10 text-center indent-10 mt-4 lg:hidden small">
            When it comes to tub refinishing and restoration, Socal Tub Specialists sets the standard for quality and craftsmanship 
            in the Santa Clarita Valley. Their meticulous workmanship, combined with the use of premium materials and industry-leading 
            techniques, ensures long-lasting results that stand the test of time. Clients appreciate the team's professionalism, punctuality,
             and transparent communication throughout the entire process. Whether it's repairing chips, cracks, or scratches, or completely 
             transforming the look of a tub with a fresh coating, Socal Tub Specialists consistently delivers exceptional outcomes that leave 
             clients thrilled with their newly restored tubs.
            </p>
            </div>
            </div>
            
            <Link to="/Contact"><div className="w-[25rem] lg:w-[18rem] lg:h-[3rem] h-[5rem] border-[2px] border-secondary  mt-[2.5rem] mb-[2.5rem] bg-primary flex justify-center items-center">
                <h3 className="text-3xl md:text-[2rem] lg:text-[1.6rem] small">Start my Remodel</h3>
            </div></Link>
            
        </motion.div>
    );
  };

export const AntelopeValley = () => {
    return (
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: .01}}
        transition={{ duration: 0.5 }}
        className="w-fit h-fit bg-thirdarylol flex flex-col items-center">
            <div className="w-full h-fit  pt-[10rem] lg:pt-[5rem] flex flex-col items-center">
                <h1 className=" text-4xl leading-[2.5rem] w-[75%] text-center small">
                    Top Tub Specialist Serving Antelope Valley
                </h1>
                <h2 className='opacity-[70%] w-[55%] text-center text-[1.2rem] mt-[.5rem] light'>Serving the Entire Santa Clarita Valley</h2>
                <span className="border-2 border-primary w-[40%] md:w-[25%] mb-[2.5rem] mt-[2rem]"></span>
                
            </div >
            <div className="w-full lg:w-[80%] h-full flex flex-col items-center lg:flex-row">
                <img src='av.webp' alt='antelope valley' className="w-[85%] md:w-[50%] h-[20rem] lg:h-[25rem]"></img>
            <div className="w-full h-full flex flex-col items-center">
            <p className="w-[90%] text-[1.4rem] leading-10 text-center indent-8 mt-8 small">
            Socal Tub Specialists, based in the picturesque Santa Clarita Valley in California, is renowned for
             their exceptional work and professionalism in the field of tub refinishing and restoration. With a
              commitment to excellence, they have become a trusted name in the community, earning the admiration and 
              appreciation of their clients. The skilled team at Socal Tub Specialists takes pride in their craft, delivering
               remarkable results that transform worn-out tubs into stunning, rejuvenated masterpieces.
            </p>
            <p className="w-[90%] text-[1.4rem] leading-10 text-center indent-10 mt-4 small">
            The Santa Clarita Valley community has embraced Socal Tub Specialists for their unwavering
             dedication to quality and attention to detail. Homeowners and businesses alike have experienced the transformative
              power of their work, breathing new life into their bathrooms with beautifully refinished tubs. Socal Tub Specialists'
               professionalism shines through in every project, as they prioritize customer satisfaction and strive to exceed expectations.
                Their commitment to excellence and customer-centric approach have earned them a loyal following and a reputation for being
                 one of the top tub refinishing specialists in the area.
            </p>
            <p className="w-[90%] text-[1.4rem] leading-10 text-center indent-10 mt-4 lg:hidden small">
            When it comes to tub refinishing and restoration, Socal Tub Specialists sets the standard for quality and craftsmanship 
            in the Santa Clarita Valley. Their meticulous workmanship, combined with the use of premium materials and industry-leading 
            techniques, ensures long-lasting results that stand the test of time. Clients appreciate the team's professionalism, punctuality,
             and transparent communication throughout the entire process. Whether it's repairing chips, cracks, or scratches, or completely 
             transforming the look of a tub with a fresh coating, Socal Tub Specialists consistently delivers exceptional outcomes that leave 
             clients thrilled with their newly restored tubs.
            </p>
            </div>
            </div>
            
            <Link to="/Contact"><div className="w-[25rem] lg:w-[18rem] lg:h-[3rem] h-[5rem] border-[2px] border-secondary  mt-[2.5rem] mb-[2.5rem] bg-primary flex justify-center items-center">
                <h3 className="text-3xl md:text-[2rem] lg:text-[1.6rem] small">Start my Remodel</h3>
            </div></Link>
            
        </motion.div>
    );
  };
export const Surrounding = () => {
    return (
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: .01}}
        transition={{ duration: 0.5 }}
        className="w-fit h-fit bg-thirdarylol flex flex-col items-center">
            <div className="w-full h-fit  pt-[10rem] lg:pt-[5rem] flex flex-col items-center">
                <h1 className=" text-4xl leading-[2.5rem] w-[75%] text-center small">
                    Top Tub Specialist Serving Surrounding Areas
                </h1>
                <h2 className='opacity-[70%] w-[55%] text-center text-[1.2rem] mt-[.5rem] light'>Serving the Entire Santa Clarita Valley</h2>
                <span className="border-2 border-primary w-[40%] md:w-[25%] mb-[2.5rem] mt-[2rem]"></span>
                
            </div >
            <div className="w-full lg:w-[80%] h-full flex flex-col items-center lg:flex-row">
                <img src='SV.webp' alt='surrounding valleys' className="w-[85%] md:w-[50%] h-[20rem] lg:h-[25rem]"></img>
            <div className="w-full h-full flex flex-col items-center">
            <p className="w-[90%] text-[1.4rem] leading-10 text-center indent-8 mt-8 small">
            Socal Tub Specialists, based in the picturesque Santa Clarita Valley in California, is renowned for
             their exceptional work and professionalism in the field of tub refinishing and restoration. With a
              commitment to excellence, they have become a trusted name in the community, earning the admiration and 
              appreciation of their clients. The skilled team at Socal Tub Specialists takes pride in their craft, delivering
               remarkable results that transform worn-out tubs into stunning, rejuvenated masterpieces.
            </p>
            <p className="w-[90%] text-[1.4rem] leading-10 text-center indent-10 mt-4 small">
            The Santa Clarita Valley community has embraced Socal Tub Specialists for their unwavering
             dedication to quality and attention to detail. Homeowners and businesses alike have experienced the transformative
              power of their work, breathing new life into their bathrooms with beautifully refinished tubs. Socal Tub Specialists'
               professionalism shines through in every project, as they prioritize customer satisfaction and strive to exceed expectations.
                Their commitment to excellence and customer-centric approach have earned them a loyal following and a reputation for being
                 one of the top tub refinishing specialists in the area.
            </p>
            <p className="w-[90%] text-[1.4rem] leading-10 text-center indent-10 mt-4 lg:hidden small">
            When it comes to tub refinishing and restoration, Socal Tub Specialists sets the standard for quality and craftsmanship 
            in the Santa Clarita Valley. Their meticulous workmanship, combined with the use of premium materials and industry-leading 
            techniques, ensures long-lasting results that stand the test of time. Clients appreciate the team's professionalism, punctuality,
             and transparent communication throughout the entire process. Whether it's repairing chips, cracks, or scratches, or completely 
             transforming the look of a tub with a fresh coating, Socal Tub Specialists consistently delivers exceptional outcomes that leave 
             clients thrilled with their newly restored tubs.
            </p>
            </div>
            </div>
            
            <Link to="/Contact"><div className="w-[25rem] lg:w-[18rem] lg:h-[3rem] h-[5rem] border-[2px] border-secondary  mt-[2.5rem] mb-[2.5rem] bg-primary flex justify-center items-center">
                <h3 className="text-3xl md:text-[2rem] lg:text-[1.6rem] small">Start my Remodel</h3>
            </div></Link>
            
        </motion.div>
    );
  };