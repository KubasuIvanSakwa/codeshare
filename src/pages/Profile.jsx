import Upload from '../../public/upload.svg'
import Reactlogo from '../../public/reactlogo.svg'
import Card from '../components/Card'
import { useRef, useState } from 'react'
import CodeEditor from '../components/CodeEditor'
import { auth } from './../../firebase-config';
import { updateProfile } from 'firebase/auth'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function Profile() {
    const uploadRef = useRef(null)
    const [toggleEditor, setToggleEditor] = useState(true)
    const [toggleImageUploader, setToggleImageUploader] = useState(false)
    const [toggleShowUpload, setToggleShowUpload] = useState(false)
    const [displayName, setDislayName] = useState('')
    const [cat, setCat] = useState('')
    const [displayPicture, setDislayPicture] = useState(null)
    const [profilePicURL, setProfilePicURL] = useState('')

    const storage = getStorage(); // Initialize Firebase storage

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the uploaded file
        if (file) {
            setDislayPicture(file); // Set the file to state
        }
    }

    const handleProfileUpdate = () => {
        if (displayPicture) {
            const storageRef = ref(storage, `profilePictures/${auth.currentUser.uid}`); // Define the storage path

            // Upload file to Firebase Storage
            uploadBytes(storageRef, displayPicture).then((snapshot) => {
                // Get the download URL
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    setProfilePicURL(downloadURL); // Update state with the download URL

                    // Update Firebase user profile with the display name and profile picture URL
                    updateProfile(auth.currentUser, {
                        displayName: displayName,
                        photoURL: downloadURL
                    }).then(() => {
                        localStorage.setItem('usertype', `${auth.currentUser.displayName}`)
                        localStorage.setItem('userpic', auth.currentUser.photoURL)
                        window.location.reload()
                    }).catch((error) => {
                        console.log('Error updating profile:', error)
                    });
                });
            }).catch((error) => {
                console.log('Error uploading file:', error)
            });
        } else {
            // If no picture is uploaded, just update the display name
            updateProfile(auth.currentUser, {
                displayName: displayName
            }).then(() => {
                localStorage.setItem('usertype', `${auth.currentUser.displayName}`)
                window.location.reload()
            }).catch((error) => {
                console.log('Error updating display name:', error)
            });
        }
    }

    return (
        <section className="p-2 flex justify-center h-[80vh] overflow-y-scroll">
            <section className="w-[80%] h-fit mt-[3rem] flex flex-col p-2 items-center">
                <section className='w-[100%] flex p-2 justify-center gap-2 mb-2'>
                    <div className='bg-[#11141A] relative p-3 shadow-lg rounded-3xl h-[12rem] w-[50%]'>
                        <div className="flex justify-between ">
                            <p className="text-xl text-white/40 font-bold">{localStorage.getItem('usertype')}</p>
                            <img src={Reactlogo} className="w-[2.3rem]"/>
                        </div>
                        <div className='flex'>
                            <input onChange={(e) => setDislayName(e.target.value)} placeholder='display name' className='border m-1 text-lg rounded-full p-1 border-white/20 text-white/60 pl-3 w-[12rem] placeholder-[#cbccce]/40 bg-[#11141A] outline-none'/>

                            <input 
                                type="file" 
                                accept="image/*"
                                onChange={handleFileChange} 
                                className='text-lg p-1 border-white/20 text-white/60 pl-3 w-[10rem] bg-[#11141A] outline-none'
                                placeholder='Upload Picture'
                            />
                            <button
                                className='text-white/50 text-xl hover:text-white p-2 border border-white/10 rounded-lg ml-2'
                                title='upload'
                                onClick={handleProfileUpdate}
                            >&#x21a5;</button>
                        </div>
                        <p className="text-3xl font-extrabold text-white/60 mt-2">Profile Card</p>

                        <div className="flex justify-end absolute bottom-2 right-4">
                            {/* <p className='text-white/40 font-bold'>date Joined</p> */}
                        </div>
                    </div>

                    <div
                        onClick={() => setToggleShowUpload(true)}
                        title='upload'
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

            {
                toggleShowUpload &&
                <section ref={uploadRef} className="absolute flex w-[100%] h-[98vh] top-0 z-[60] bg-[#23272F]/70 backdrop-blur-sm justify-center p-2">
                    <section className="relative overflow-hidden w-[80%] rounded-3xl bg-[#23272F] shadow-lg border border-white/20">
                        <div className='flex w-full pt-2 justify-end pr-2 font-extrabold'>
                            <p 
                                onClick={() => setToggleShowUpload(false)}
                                className=' w-[2rem] h-[2rem] rounded-full p-1 flex hover:bg-white/20 cursor-pointer items-center justify-center text-white/70 border'>
                                X
                            </p>
                        </div>
                        <section className='w-full h-[90%] mt-3 p-3 flex flex-col'>
                            <div
                                className='flex gap-2 w-full bg-black/20 p-3'
                            >
                                <button
                                    className={`${toggleEditor ? 'bg-black' : 'bg-black/20 border border-white/10'} hover:bg-black p-1 pl-3 pr-3 rounded-full text-white/70 font-extrabold`}
                                    onClick={() => {
                                        setToggleEditor(true)
                                        setToggleImageUploader(false)
                                    }}
                                >Code snippets?</button>
                            <input onChange={(e) => setCat(e.target.value)} placeholder='category' className='border m-1 text-lg rounded-full p-1 border-white/20 text-white/60 pl-3 w-[12rem] placeholder-[#cbccce]/40 bg-[#11141A] outline-none'/>
                            <button
                                className='text-white/60 underline'
                                onClick={() => {
                                    localStorage.setItem('cat', cat)
                                }}
                            >save Category</button>
                            </div>
                            <div
                                className='uploadArea border-black w-full flex-1 p-2'
                            >  
                                <div className='relative'>
                                    {toggleEditor && <CodeEditor />}
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
            }
        </section>
    )
}

export default Profile
