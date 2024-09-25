import { useState, useRef, useEffect } from 'react'
import SearchLogo from '../../public/search-svg.svg'
// import { db } from '../firebase'
// import { addDoc, collection } from 'firebase/firestore'

function Search() {
    // const [SearchesHistory, setSearchesHistory] = useState([])
    const [searchParam, setSearchParam] = useState({
        "value": ''
    })

    return (
        <>
            <section className="relative z-50 p-2 w-full flex cursor-pointer">
                <div className="flex w-[40%] justify-center h-[3.2rem] p-1 ">
                    <div className="bg-[#4A4D54] rounded-l-[4rem]  w-[8%] flex justify-center items-center p-3">
                        <img src={SearchLogo} alt="S"/>
                    </div>
                    <input placeholder='Search' className="w-[30%] outline-none p-1 bg-[#4A4D54] text-white placeholder:text-white/50 cursor-pointer"/>
                    <div className="bg-[#4A4D54] rounded-r-[4rem]  w-[10%] flex justify-center items-center p-1"></div>
                </div>
            </section>
            <section className='w-[25%] flex-col p-2 hidden  h-[8rem] bg-[#4A4D54] border rounded-lg absolute top-[4rem] left-[12rem] z-100' style={{zIndex: 60}}>
                <p>search</p>
                <p>search</p>
            </section>
        </>
    )
}

export default Search