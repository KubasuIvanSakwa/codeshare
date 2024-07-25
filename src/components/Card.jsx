
function Card() {

    return (
        <div className="bg-gray-200 w-[22rem] h-[12rem] rounded-lg">
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
                <div className="card__content">
            </div>
        </div>
    )
}

export default Card