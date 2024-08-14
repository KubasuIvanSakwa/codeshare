import Upload from '../../public/upload.svg'
import Reactlogo from '../../public/reactlogo.svg'
import Card from '../components/Card'
import { useRef } from 'react'

function Profile() {
    const uploadRef = useRef(null)
    const displayUpload = localStorage.getItem('displayUpload')

    return (
        <section className="p-2 flex justify-center h-[80vh] overflow-y-scroll">
            <section className="w-[80%] h-fit mt-[3rem] flex flex-col p-2 items-center">
                <section className='w-[100%] flex p-2 justify-center gap-2 mb-2'>
                    <div className='bg-[#11141A] relative p-3 shadow-lg rounded-3xl h-[12rem] w-[50%]'>
                        <div className="flex justify-between ">
                            <p className="text-xl text-white/40 font-bold">Kubasu Ivan Sakwa</p>
                            <img src={Reactlogo} className="w-[2.3rem]"/>
                        </div>
                        <p className="text-3xl font-extrabold text-white/60">Profile Card</p>

                        <div className="flex justify-end absolute bottom-2 right-4">
                            <p className='text-white/40 font-bold'>date Joined</p>
                        </div>
                    </div>

                    <div
                        onClick={() => {
                            localStorage.setItem('displayUpload', 'show')
                        }}

                        className='cursor-pointer w-[20%] bg-[#434A56] h-[12rem] rounded-3xl flex justify-center items-center'>
                        <img src={Upload} className="w-[5rem] opacity-60"/>
                    </div>
                </section>
                <section className='w-[70%] h-fit rounded-3xl bg-[#11141A] p-3 shadow-lg'>
                    <p className="text-3xl font-extrabold text-white/60">Projects</p>
                    <section className='w-[102%] h-fit mt-3 p-1 flex flex-wrap gap-1'>
                        <Card 
                            name="ivan" project="name" descritpion="description"
                        />

                        <Card 
                            name="ivan" project="name" descritpion="description"
                        />

                        <Card 
                            name="ivan" project="name" descritpion="description"
                        />
                    </section>
                </section>
            </section>

            {displayUpload === 'show' && <section ref={uploadRef} className="absolute flex w-[100%] h-[98vh] top-0 z-[60] bg-[#23272F]/70 backdrop-blur-sm justify-center p-2">
                    <section className="w-[50%] rounded-3xl bg-[#23272F] shadow-lg border border-white/20">
                        <div className='flex w-full pt-2 justify-end pr-2 font-extrabold'>
                            <p 
                                onClick={() => {
                                    const displayinnerUpload = localStorage.getItem('displayUpload')
                                    console.log(displayinnerUpload)
                                    if (displayinnerUpload === 'show'){
                                        uploadRef.current.classList.add('hidden')
                                        localStorage.setItem('displayUpload', 'hidden')
                                    }
                                }}
                                className=' w-[2rem] h-[2rem] rounded-full p-1 flex hover:bg-white/20 cursor-pointer items-center justify-center text-white/70 border'>
                                X
                            </p>
                        </div>
                        <section className='mt-2 w-full h-[25rem] flex justify-center items-center'>
                            <div
                                onClick={() => {

                                }}

                                className='cursor-pointer w-[50%] border border-dashed h-[12rem] rounded-3xl flex justify-center items-center'>
                                <img src={Upload} className="w-[5rem] opacity-30"/>
                            </div>
                        </section>
                    </section>
                            </section>
            }
        </section>
    )
}

export default Profile