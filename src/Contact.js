import { useState } from 'react';
import {motion} from 'framer-motion'
function Contact() {
    const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    setSubmitted(true);
  };
    return (
        <motion.div 
        initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: .01}}
    transition={{ duration: 0.5 }}
        className="w-full h-full md:h-fit md:pb-[10rem] bg-thirdarylol flex flex-col items-center md:justify-center">
            <div className="w-full h-fit  pt-[10rem] lg:pt-[5rem] flex flex-col justify-center items-center">
                <h1 className=" text-5xl leading-[2.8rem] w-[85%] text-center small">
                    Lets see what we can do for you
                </h1>
                <h2 className='opacity-[70%] w-[55%] text-center text-[1.2rem] mt-[.5rem] light'>All quotes are honored up to 7days after conception.</h2>
            </div>
            <div className="w-[95%] md:w-[75%] lg:w-[50%] h-full md:h-fit lg: p-[1rem] border-[2px] border-primary shadow-xl flex flex-col items-center mt-[2rem]">
            {submitted ? (
            <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: .01 }}
            transition={{ duration: 1 }}
            className="text-3xl leading-[2.4rem] w-[85%] text-center mb-[1rem] mt-[.5rem] light font-semibold"
          >
            Thank you!
          </motion.h3>
            ) : (
            <h3 className="text-3xl leading-[2.4rem] w-[85%] text-center mb-[1rem] mt-[.5rem] light font-semibold">
                Free Estimate
            </h3>
            )}
                
                
                <form data-netlify-honeypot="bot-field" name="contact" method="POST" data-netlify="true" netlify="no-success-page" action='.' className="grid grid-cols-2 grid-rows-6 h-full w-[95%] md:h-[40vh] lg:h-[60vh]">
                    <input type="hidden" name="form-name" value="contact" />
                    <input
                    type="text"
                    name="Name"
                    className="border-[1px] border- py-[2rem] px-[1rem] col-span-2 max-h-[5rem] light focus:ring-1 focus:ring-secondary focus:border-secondary focus:outline-none"
                    placeholder="First Name"
                    required
                    />
                    <input
                    type="email"
                    name="email"
                    className="border-[1px] border- py-[2rem] px-[1rem] col-span-2 max-h-[5rem] light focus:ring-1 focus:ring-secondary focus:border-secondary focus:outline-none"
                    placeholder="Email"
                    required
                    />
                    <input
                    type="tel"
                    name="phonenumber"
                    className="border-[1px] border- py-[2rem] px-[1rem] col-span-2 max-h-[5rem] light focus:ring-1 focus:ring-secondary focus:border-secondary focus:outline-none"
                    placeholder="phone number"
                    />
                    <textarea
                    cols="10"
                    rows="5"
                    name="textarea"
                    className="border-[1px] border- py-[2rem] px-[1rem] col-span-2 light row-span-3 focus:ring-1 focus:ring-secondary focus:border-secondary focus:outline-none"
                    placeholder="Write your message..."
                    required
                    ></textarea>
                    <input
                    type="submit"
                    value="Send Message"
                    className="flex-[15%] h-fit cursor-pointer small col-span-2 self-center text-[1.6rem] small focus:ring-1 focus:ring-secondary focus:border-secondary focus:outline-none"
                    onClick={handleSubmit}
                    />
                </form>
            </div>
        </motion.div>
    );
}

export default Contact;