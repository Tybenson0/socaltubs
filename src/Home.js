

function Home() {
    return (
        <>
        <div className="relative w-full h-[75vh] bg-thirdarylol border border-black bg-center bg-hero-pattern bg-cover flex justify-center items-center -z-10">
            <div className="w-[80%] h-[70%] max-h-[400px] border-2 border-secondary mt-[10rem] relative">
                <div className="w-full h-full relative">
                    <div className="w-full h-full bg-primary opacity-80 absolute "></div>
                    <div className="w-full h-full relative flex justify-center items-center flex-col p-6 gap-6">
                        <h2 className=" text-center text-black text-[2.4rem] font-light">Elevate your space with a remodeling specialist</h2>
                        <span className="w-[80%] h-[2px] bg-secondary"></span>
                        <p className="text-center text-[1.3rem]">
                            At SoCalTubSpecialist, we as a top-rated bathroom remodeling contractor serving Santa 
                            Clarita and Antelope Valley, Our team of skilled craftsmen are committed to delivering outstanding results, whether you're looking 
                            to update your shower, install a new bathtub, or create a custom tile design we are your go-to.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-[20rem] w-full flex flex-col items-center">
            <div className="w-[25rem] h-[5rem] border-[2px] border-secondary mt-[-1rem] bg-primary flex justify-center items-center">
                <h3 className="text-3xl">Get a Free Estimate</h3>
            </div>
            <h2 className="text-4xl text-center w-[90%] mt-[5rem] text-grey">The Best Tub Specialist in Town</h2>
        </div>
        </>
    );
}

export default Home