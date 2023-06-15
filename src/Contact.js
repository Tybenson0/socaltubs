import {motion} from 'framer-motion'
function Contact() {
    return (
        <motion.div 
        initial={{opacity: .7}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        className="w-full h-full md:h-fit md:pb-[10rem] bg-thirdarylol flex flex-col items-center md:justify-center">
            <div className="w-full h-fit  pt-[10rem] lg:pt-[5rem] flex flex-col justify-center items-center">
                <h1 className=" text-5xl leading-[2.8rem] w-[85%] text-center small">
                    Lets see what we can do for you
                </h1>
                <h2 className='opacity-[70%] w-[55%] text-center text-[1.2rem] mt-[.5rem] light'>All quotes are honored up to 7days after conception.</h2>
            </div>
            <div className="w-[95%] md:w-[75%] lg:w-[50%] h-full md:h-fit lg: p-[1rem] border-[2px] border-primary shadow-xl flex flex-col items-center mt-[2rem]">
                <h3 className=" text-3xl leading-[2.4rem] w-[85%] text-center mb-[1rem] mt-[.5rem] small">
                    Free Estimate
                </h3>
                
                <form className="w-[95%] h-[45vh] md:h-[40vh] lg:h-[60vh] flex flex-col items-center" name="contact" method="POST" data-netlify="true" >
                    <div className="grid grid-cols-2 gap-5 flex-[90%]">
                    <input type="hidden" name="form-name" value="contact"/>
                    <input
                    type="text"
                    name="first name"
                    className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 max-h-[5rem] light"
                    placeholder="First Name"
                    required
                    />
                    <input
                    type="text"
                    name="last name"
                    className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 max-h-[5rem] light"
                    placeholder="Last Name"
                    required
                    />
                    <input
                    type="email"
                    name="email"
                    className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2 max-h-[5rem] light"
                    placeholder="Email"
                    required
                    />
                    <input
                    type="tel"
                    name="phone number"
                    className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2 max-h-[5rem] light"
                    placeholder="phone number"
                    />
                    <textarea
                    cols="10"
                    rows="5"
                    className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2 light"
                    placeholder="Write your message..."
                    required
                    ></textarea>
                    </div>
                    <input
                    type="submit"
                    value="Send Message"
                    className="flex-[15%] h-fit cursor-pointer small"
                    />
                </form>
            </div>
        </motion.div>
    );
}

export default Contact;