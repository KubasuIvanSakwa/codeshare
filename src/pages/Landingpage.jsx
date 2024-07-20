
function Landingpage() {

    return (
        <section className="flex flex-col bg-[#23272F] h-[100vh] p-2">

            <section className="flex flex-col relative justify-center items-center h-[30rem]">
                <div className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#424855]">
                    Share. Code. Create
                </div>
                <div className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-white/30 to-white/70">
                    Join us today, Share you projects, collaborate, find 
                    a website that suits you
                </div>
                <button className="btn-shine border-none">
                    get started
                </button>

                <div className="relative top-[2rem] flex flex-col gap-1 w-[30%]">
                    <h1 className="text-xl font-bold bg-clip-text text-[#61DAFB]/10 bg-gradient-to-r from-[#f7963b] via-white to-[#424855] italic underline decoration-wavy">Indulge In</h1>
                    <ul className="text-3xl list-[circle] pl-8 font-bold marker:text-[#61DAFB] bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-white">
                        <li>code sharing</li>
                        <li>snippet sharing</li>
                        <li>code correction</li>
                    </ul>
                </div>
                <div className="relative top-[2rem] w-[60%]">
                    testimonials    
                </div>
            </section>


            screenshots
            
            Footer
            social media links
            contact info

            community forum

        </section>
    )
}

export default Landingpage