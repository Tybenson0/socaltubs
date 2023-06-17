import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <motion.div className='w-full h-fit'
        
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: .01}}
        transition={{ duration: 0.5 }}
        >
        <div className="home relative w-full h-[88vh] lg:h-[110vh] flex justify-center lg:justify-end items-center z-10">
            <div className="w-[70%] lg:w-[36%] h-[70%] max-h-[400px] lg:max-h-fit lg:mr-[5%] border-2 border-thirdarylol mt-[10rem] relative">
                <div className="w-full h-full relative">
                    <div className="w-full h-full bg-primary opacity-80 absolute "></div>
                    <div className="w-full h-full relative flex justify-center items-center flex-col p-6 gap-6">
                        <h2 className=" text-center text-black text-3xl md:text-4xl lg:text-3xl medium">Elevate your space with a specialist</h2>
                        <span className="w-[80%] lg:w-[60%] h-[2px] bg-secondary"></span>
                        <p className="text-center light text-[1.4rem] lg:text-[1.4rem] md:text-[1.5rem] md:leading-[3rem]">
                            At SoCalTubSpecialist, we as a top-rated bathroom remodeling contractor serving Santa 
                            Clarita and Antelope Valley, Our team of skilled craftsmen are committed to delivering outstanding results, whether you're looking 
                            to update your shower, install a new bathtub, or create a custom tile design we are your go-to.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className=" w-full h-fit flex flex-col items-center bg-thirdarylol">
        <Link to="/Contact"><div className="w-[25rem] lg:w-[18rem] lg:h-[3rem] h-[5rem] border-[2px] border-secondary  mt-[2.5rem] mb-[2.5rem] bg-primary flex justify-center items-center">
                <h3 className="text-3xl md:text-[2rem] lg:text-[1.6rem] small">Start my Remodel</h3>
            </div></Link>
            <div className=" w-[90%]  h-full flex flex-col items-center pt-[4rem]">
                <h2 className="text-4xl md:text-[2.4rem] text-center w-[90%] medium  text-black">The Best Tub Specialist in Town</h2>
                <p className="text-center text-black text-2xl md:text-[1.6rem] indent-4 pt-8 lg:w-[75%] small">
                    As the team behind SoCalTubSpecialist, we take great pride in providing our clients with the highest level of 
                    craftsmanship and customer service. We know that a bathroom renovation can be a major investment, and we work 
                    hard to ensure that every client receives the personalized attention and expertise they deserve.
                </p>
                <p className="text-center text-black text-2xl md:text-[1.6rem]  indent-8 pt-10 lg:w-[75%] small">
                    When you choose SoCalTubSpecialist for your bathroom remodeling project, you can trust that you're working 
                    with a team of experienced professionals who are dedicated to bringing your vision to life. From the initial consultation 
                    to the final walkthrough, we'll work closely with you to understand your unique needs and preferences, and ensure that 
                    every detail is executed to perfection.
                </p>
                <div className="w-full h-full flex flex-col items-center">
                <div className="w-full md:w-[85%] h-full  flex flex-col lg:flex-row items-center mt-[7rem]">
                    <img className="object-cover w-full md:w-[85%] max-h-[22rem] md:max-h-[33rem] shadow-xl" src="porcelain.webp" alt="fix later"></img>
                    <div className="w-full h-full flex flex-col items-center"> 
                    <h3 className="w-full text-center text-3xl mt-6 medium">Porcelian</h3>
                    <span className="border-2 border-primary w-[20%] mb-[1rem] mt-[1rem]"></span>
                    <p className="text-center mt-3 text-[1.4rem] small lg:w-[75%]">
                        At SoCalTubSpecialist, we specialize in porcelain work for bathroom remodeling projects.
                         Our expert team can handle everything from tile installation and repair to refinishing,
                          ensuring a beautiful and durable finish that will stand the test of time.</p>
                    </div>
                </div>
                <div className="w-full md:w-[85%] mt-[5rem]  flex flex-col lg:flex-row-reverse items-center">
                    <img className="object-cover w-full md:w-[85%] max-h-[22rem] md:max-h-[32rem] shadow-xl" src="glass.webp" alt="fix later"></img>
                    <div className="w-full h-full flex flex-col items-center"> 
                    <h3 className="w-full text-center text-3xl mt-6 medium">Fiber Glass</h3>
                    <span className="border-2 border-primary w-[25%] mb-[1rem] mt-[1rem]"></span>
                    <p className="text-center mt-3 text-[1.4rem] small lg:w-[75%]"> 
                    SoCalTubSpecialist is your go-to expert for fiberglass work in your bathroom. From fiberglass 
                    tub and shower repair to refinishing, our team can provide a beautiful and long-lasting finish for your bathroom.</p>
                    </div>
                </div>
                <div className="w-full md:w-[85%] mt-[5rem]  flex flex-col lg:flex-row items-center ">
                    <img className="object-cover w-full md:w-[85%] max-h-[22rem] md:max-h-[32rem] shadow-xl" src="vanity.webp" alt="fix later"></img>
                    <div className="w-full h-full flex flex-col items-center"> 
                    <h3 className="w-full text-center text-3xl mt-6 medium">Kitchen and Vanity Countertops</h3>
                    <span className="border-2 border-primary w-[50%] mb-[1rem] mt-[1rem]"></span>
                    <p className="text-center text-[1.4rem] small mt-3 lg:w-[75%]">  
                        Looking to upgrade your kitchen or vanity? SoCalTubSpecialist offers expert remodeling services,
                         including custom cabinetry, countertops, and tile work, to create a functional and stylish space 
                         that meets your unique needs and tastes.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="w-full h-[80vh] lg:h-[100vh] bg-cover bg-scroll bg-city-pattern mt-[5rem] flex flex-col lg:flex-row lg: items-center justify-center lg:items-start lg:border-b-secondary lg:border-t-secondary lg:border-2 mb-[5rem] shadow-xl">
                <h2 className="flex-[60%] text-center text-thirdarylol text-5xl mt-[4rem] hidden lg:block light">Where We Operate</h2>
                <div className="w-[90%] md:w-[75%] lg:w-full lg:flex-[40%] h-[80%] md:h-[85%] lg:h-full border-2 border-thirdarylol lg:border-none lg:border-l-2 relative"> 
                    <div className="w-full h-full bg-primary absolute opacity-90 z-[1]"></div>
                    <div className="w-full h-full z-50 relative flex flex-col items-center justify-center p-[1rem]">
                        <div className="flex flex-col justify-center items-center h-[90%]">
                        <p className="text-center text-[1.4rem] font-semibold md:text-[1.8rem] md:leading-[2.8rem] md:w-[90%] light leading-9 lg:text-[1.6rem]">
                            SoCalTubSpecialist is a top-rated bathroom remodeling company, proudly serving Santa Clarita and the
                            surrounding valleys with expert vanity installation services. Contact us today to transform your bathroom
                            into a beautiful and functional space.</p>
                            
                        <ul className=" w-fit h-full flex flex-col ml-[2rem] small"> 
                            <li className="text-[1.6rem] md:text-[2rem] lg:text-[1.8rem] flex justify-start items-center flex-auto"><span className="border-[2px] border-secondary w-[1.5rem] mr-[.5rem]"></span>Castaic</li>
                            <li className="text-[1.6rem] md:text-[2rem] lg:text-[1.8rem] flex justify-start items-center flex-auto"><span className="border-[2px] border-secondary w-[1.5rem] mr-[.5rem]"></span>Newhall</li> { /* fix this with proper links later */}
                            <li className="text-[1.6rem] md:text-[2rem] lg:text-[1.8rem] flex justify-start items-center flex-auto"><span className="border-[2px] border-secondary w-[1.5rem] mr-[.5rem]"></span>Valencia</li>
                            <li className="text-[1.6rem] md:text-[2rem] lg:text-[1.8rem] flex justify-start items-center flex-auto"><span className="border-[2px] border-secondary w-[1.5rem] mr-[.5rem]"></span>Stevenson Ranch</li>
                            <li className="text-[1.6rem] md:text-[2rem] lg:text-[1.8rem] flex justify-start items-center flex-auto"><span className="border-[2px] border-secondary w-[1.5rem] mr-[.5rem]"></span>Antelope Valley</li>
                            <li className="text-[1.6rem] md:text-[2rem] lg:text-[1.8rem] flex justify-end items-center flex-auto"><span className="border-[2px] border-secondary w-[1.5rem] mr-[.5rem]"></span>Surrounding Valleys</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </motion.div>
    );
}

export default Home