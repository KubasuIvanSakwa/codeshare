import Dropdown from "../../public/drop-down.svg"

function Card({ name,  project, descritpion}) {

    return (
        <div className="bg-[#2d3035] relative w-[22rem] border border-white/10 h-[12rem] rounded-lg flex flex-col">
            <div className="flex p-2 gap-1">
                <div className="circle">
                    <span className="relative cursor-pointer hover:close::before bg-teal-500 inline-block center w-3 h-3 rounded-full close"></span>
                </div>
                <div className="circle">
                    <span className="bg-orange-500 inline-block center w-3 h-3 rounded-full"></span>
                </div>
                <div className="circle">
                    <span className="bg-indigo-500 box inline-block center w-3 h-3 rounded-full"></span>
                </div>
            </div>
            <div className="card__content z-10 overflow-hidden relative  h-[9rem]">
                <div className="p-2 flex flex-col gap-1">
                    <h1 className="text-white font-extrabold self-center">{name}</h1>
                    <div className="text-sky-500/60 font-bold text-ellipsis overflow-hidden whitespace-nowrap self-center text-center w-[90%]">{project}</div>
                    <p className="text-white">{descritpion}</p>
                </div>
            </div>
            <button className="bg-[#2d3035] hover:bg-[#505253] border-white/40 flex items-center text-white rounded-full pl-2 gap-2 border pr-2 absolute bottom-4 self-center z-50">continue exploring<img src={Dropdown}/></button>
        </div>
    )
}

export default Card