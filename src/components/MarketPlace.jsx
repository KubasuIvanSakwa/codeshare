import Card from "./Card"
import Search from "./Search"
import projects from '../../public/projects.js'
import { Link } from "react-router-dom";
import { useState } from "react";

function MarketPlace() {
    const [bgColor, setColorBg]= useState('')
    const data = projects;
    const arrFromObj = Object.getOwnPropertyNames(data)

    return (
        <section className="p-1 border relative h-fit overflow-y-hidden w-full flex flex-col gap-2">
            <Search />
            <section className="snap-y snap-mandatory bg-red-400 lg:ml-[10rem] mr-[10rem] border h-[29rem] scroll-smooth overflow-x-hidden flex flex-wrap gap-4 overflow-y-scroll p-2">
                
                <section className="bg-yellow-500 snap-start snap-always flex h-[18rem] w-full justify-center items-center gap-2">
                    <Card />
                    <Card />
                </section>

                <section className="bg-yellow-500 snap-start snap-always flex h-[25rem] w-full gap-2 p-2">
                    <div className={`${bgColor} bg-cover relative border h-full w-[70%] rounded-xl`}>
                        <h1>Project name</h1>
                        <h5>Date created</h5>
                        <p>stars</p>
                    </div>
                    <div className="border flex-1 p-1">
                        <ul className="relative border border-red-400 w-full bg-white flex flex-col gap-2">
                            <li>
                                <Link 
                                    to=""
                                    onClick={() => {
                                        setColorBg('bg-red-500')
                                    }}
                                    className="rounded-lg flex p-1 h-[3.5rem] gap-1 ml-[1rem] w-[50%] border bg-red-400"
                                >
                                    <div className="rounded-lg w-[3rem] bg-red-500">

                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <p className="text-lg font-bold relative top-[-2px]">Project 1</p>
                                        <p className="relative bottom-1 font-extralight text-sm">date</p>
                                    </div>
                                </Link>
                            </li>

                            <li>
                                <Link 
                                    to=""
                                    onClick={() => {
                                        setColorBg('bg-green-500')
                                    }}
                                    className="rounded-lg flex p-1 gap-1 h-[3.5rem] ml-[1rem] w-[50%] border bg-red-400"
                                >
                                    <div className="rounded-lg w-[3rem] bg-green-500">

                                    </div>
                                    project 1
                                </Link>
                            </li>

                            <li>
                                <Link 
                                    to=""
                                    onClick={() => {
                                        setColorBg('bg-white')
                                    }}
                                    className="rounded-lg flex gap-1 p-1 h-[3.5rem] ml-[1rem] w-[50%] border bg-red-400"
                                >
                                    <div className="rounded-lg w-[3rem] bg-white">

                                    </div>
                                    project 1
                                </Link>
                            </li>

                            <li>
                                <Link 
                                    to=""
                                    onClick={() => {
                                        setColorBg('bg-yellow-500')
                                    }}
                                    className="rounded-lg flex gap-1 p-1 h-[3.5rem] ml-[1rem] w-[50%] border bg-red-400"
                                >
                                    <div className="rounded-lg w-[3rem] bg-yellow-500">

                                    </div>
                                    project 1
                                </Link>
                            </li>

                            <li>
                                <Link 
                                    to=""
                                    onClick={() => {
                                        setColorBg('bg-sky-500')
                                    }}
                                    className="rounded-lg flex gap-1 p-1 h-[3.5rem] ml-[1rem] w-[50%] border bg-red-400"
                                >
                                    <div className="rounded-lg w-[3rem] bg-sky-500">

                                    </div>
                                    project 1
                                </Link>
                            </li>

                            <li>
                                <Link 
                                    to=""
                                    onClick={() => {
                                        setColorBg('bg-blue-500')
                                    }}
                                    className="rounded-lg flex gap-1 p-1 h-[3.5rem] ml-[1rem] w-[50%] border bg-red-400"
                                >
                                    <div className="rounded-lg w-[3rem] bg-blue-500">

                                    </div>
                                    project 1
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>                
            </section>
        </section>
    );
}

export default MarketPlace;




{/* {data.map((pr, key) => (
                <Card 
                    key={key} name={pr.contributorName} project={pr.name} descritpion={pr.description}
                />        
            ))} */}