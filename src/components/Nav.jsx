import { Link, useLocation, useNavigate } from "react-router-dom"
import dummyuser from '../../public/user.svg'
import Dropdown from "../../public/drop-down.svg"
import logout from "../../public/logout.svg"
import { auth  } from './../../firebase-config';

import { signOut } from 'firebase/auth';


function Nav() {
    const user = localStorage.getItem('usertype')
    const location = useLocation()
    const navigate = useNavigate()

    const userPhoto = localStorage.getItem('userpic')

    return (
        <nav className="">
            <ul className=" relative flex  justify-end p-3 gap-3 text-[1.1rem] capitalize text-white/80">

                { 
                    location.pathname === '/home/profile' &&
                    <li>
                        <Link
                            to="/home/marketplace"
                            className="uppercase btn-shine"
                        >
                            <span className="bg-sm lowercase">return </span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#177bda] to-[#920ebb]">Mar</span>
                            ketplace
                        </Link>
                    </li>                
                }


                { 
                    user !== 'guest' &&
                    <li>  
                        <button
                            onClick={() => {
                                signOut(auth)
                                .then(() => {
                                    navigate('/login')
                                    localStorage.removeItem('usertype')
                                    localStorage.removeItem('userpic')
                                    localStorage.removeItem('userId')
                                })
                                .catch((error) => {
                                    console.log(error);
                                })
                            }}
                            className="logout inline-flex self-center gap-2 h-[2.6rem] relative w-[8rem] rounded-lg justify-center items-center shadow-lg"
                        >
                            <img src={logout} className="w-[1.4rem]"/>
                            <p>Log out</p>
                        </button>
                    </li>
                }

                {/* { 
                    user !== 'guest' &&  location.pathname !== '/home/marketplace' &&
                    <li>  
                        <Link
                            className="upload inline-flex self-center gap-2 h-[2.6rem] relative w-[8rem] rounded-lg justify-center items-center"
                            onClick={() => {
                                setToggleShowUpload(true)
                            }}
                        >
                            <img src={Upload} className="w-[1.4rem]"/>
                            <p>upload</p>
                        </Link>
                    </li>
                } */}

                {
                    user === 'guest' ? 
                        <li>
                            {
                                location.pathname !== '/home/profile' &&  
                                <Link
                                    to="/login"
                                    onClick={() => {
                                        localStorage.removeItem('usertype')
                                    }}
                                    className="hover:bg-[#3f4041]/50 bg-[#3f4041] text-white p-2 w-fit rounded-lg inline-flex"
                                >
                                    Sign In or Create Account
                                </Link>
                            }
                        </li>
                    :
                    <li>
                        {
                            location.pathname !== '/home/profile' &&
                                <Link
                                    to="/home/profile"
                                    className="flex items-center"
                                >
                                    <p className="hover:bg-[#3f4041]/50 bg-[#3f4041] text-white p-2 gap-2 w-fit rounded-l-lg inline-flex">
                                        <img src={Dropdown}/>
                                        {localStorage.getItem('usertype')}
                                    </p>
                                    <div className="bg-[#3f4041] relative overflow-hidden w-[2.7rem] h-[2.6rem] p-1 rounded-r-lg">
                                        {userPhoto ? 
                                            <img className="rounded-full w-full h-full" src={userPhoto}/>
                                            :
                                            <img src={dummyuser}/>
                                        }
                                    </div>
                                </Link>
                        }
                    </li>
                }
            </ul>
        </nav>
    )
}

export default Nav