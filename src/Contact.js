
function Contact() {
    return (
        <div className="w-full h-full bg-thirdarylol flex flex-col items-center">
            <div className="w-full h-fit  pt-[10rem] flex flex-col justify-center items-center">
                <h1 className=" text-5xl leading-[2.8rem] w-[85%] text-center">
                    Lets see what we can do for you
                </h1>
                <h2 className='opacity-[70%] w-[55%] text-center text-[1.2rem] mt-[.5rem]'>All quotes are honored up to 7days after conception.</h2>
            </div>
            <div className="w-[95%] h-fit p-[1rem] border-[2px] border-primary shadow-xl flex flex-col items-center mt-[2rem]">
                <h3 className=" text-3xl leading-[2.4rem] w-[85%] text-center mb-[1rem] mt-[.5rem]">
                    Free Estimate
                </h3>
                <form className="w-[95%] h-[45vh] flex flex-col items-center">
                    <div class="grid grid-cols-2 gap-5 flex-[90%]">
                    <input
                    type="text"
                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                    placeholder="First Name"
                    />
                    <input
                    type="text"
                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                    placeholder="Last Name"
                    />
                    <input
                    type="email"
                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                    placeholder="Email"
                    />
                    <input
                    type="tel"
                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                    placeholder="Phone"
                    />
                    <textarea
                    cols="10"
                    rows="5"
                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                    placeholder="Write your message..."
                    ></textarea>
                    </div>
                    <input
                    type="submit"
                    value="Send Message"
                    className="flex-[15%]"
                    />
                </form>
            </div>
        </div>
    );
}

export default Contact;