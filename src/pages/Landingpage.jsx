import { useNavigate } from "react-router-dom"

function Landingpage() {
    const navigate = useNavigate()

    return (
        <section className="flex flex-col relative bg-[#23272F] h-[100vh] p-2 overflow-y-scroll overflow-x-hidden">
            <section className="flex flex-col items-center min-h-fit p-2">
                <div className="lg:text-5xl text-3xl  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#424855]">
                    Share. Code. Create
                </div>
                <div className="text-xl flex justify-center text-center mt-3 lg:mt-1 bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-white/30 to-white/70">
                    <p>
                        Join us today, Share you projects, collaborate, find 
                        a website that suits you
                    </p>
                </div>
                <button 
                    className="btn-shine border-none"
                    onClick={() => {
                        navigate('/login')
                    }}
                >
                    get started
                </button>

                <div className="flex flex-col gap-1 lg:w-[30%]">
                    <h1 className="text-xl font-bold bg-clip-text text-[#61DAFB]/10 bg-gradient-to-r from-[#f7963b] via-white to-[#424855] italic underline decoration-wavy">Indulge In</h1>
                    <ul className="lg:text-3xl text-xl list-[circle] pl-8 font-bold marker:text-[#61DAFB] bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-white">
                        <li>code sharing</li>
                        <li>snippet sharing</li>
                        <li>code correction</li>
                    </ul>
                </div>
                <div className="lg:w-[60%] w-full p-1 min-h-fit mt-6">
                    <div className="">
                        <div className="card h-[23rem] lg:h-fit">
                            <h1 className="card-name bg-clip-text text-[#61DAFB]/10 bg-gradient-to-r from-[#f7963b] via-white to-[#424855] italic underline decoration-wavy">Testimonial</h1>
                            <div className="quote">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 330 307" height="80" width="80">
                                <path fill="currentColor" d="M302.258 176.221C320.678 176.221 329.889 185.432 329.889 203.853V278.764C329.889 297.185 320.678 306.395 302.258 306.395H231.031C212.61 306.395 203.399 297.185 203.399 278.764V203.853C203.399 160.871 207.902 123.415 216.908 91.4858C226.323 59.1472 244.539 30.902 271.556 6.75027C280.562 -1.02739 288.135 -2.05076 294.275 3.68014L321.906 29.4692C328.047 35.2001 326.614 42.1591 317.608 50.3461C303.69 62.6266 292.228 80.4334 283.223 103.766C274.626 126.69 270.328 150.842 270.328 176.221H302.258ZM99.629 176.221C118.05 176.221 127.26 185.432 127.26 203.853V278.764C127.26 297.185 118.05 306.395 99.629 306.395H28.402C9.98126 306.395 0.770874 297.185 0.770874 278.764V203.853C0.770874 160.871 5.27373 123.415 14.2794 91.4858C23.6945 59.1472 41.9106 30.902 68.9277 6.75027C77.9335 -1.02739 85.5064 -2.05076 91.6467 3.68014L119.278 29.4692C125.418 35.2001 123.985 42.1591 114.98 50.3461C101.062 62.6266 89.6 80.4334 80.5942 103.766C71.9979 126.69 67.6997 150.842 67.6997 176.221H99.629Z"></path>
                            </svg>
                            </div>
                            <div className="body-text text-[1.1rem] overflow-hidden absolute top-[40px] left-[1px] ">
                                ReactCode Share has been a game-changer for my self-learning journey.
                                The platform’s code correction features and snippet sharing have been 
                                incredibly useful. Plus, the ability to share code with others and 
                                engage in the community forum has greatly enhanced my learning 
                                experience.
                            </div>
                            <div className="author flex flex-col justify-center items-center overflow-hidden h-fit pl-[1px] lg:relative absolute">
                                Kubasu Ivan Sakwa<br/> 
                                <span>12th may 2023</span>   
                            </div>
                        </div>
                    </div>    
                </div>
                {/* <div className="relative border mt-[5rem] w-[50%] min-h-fit p-2">
                    <h1 className="bg-clip-text relative float-right text-2xl text-[#61DAFB]/10 bg-gradient-to-r from-[#f7963b] to-[#424855] italic underline decoration-wavy">screenshots</h1>
                    <div>

                    </div>
                </div> */}
                {/* community forum */}
            </section>
        </section>
    )
}

export default Landingpage