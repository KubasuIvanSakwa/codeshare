import { Link, useLocation } from "react-router-dom"
import dummyuser from '../../public/user.svg'
import Dropdown from "../../public/drop-down.svg"

function Nav() {

    const user = localStorage.getItem('usertype')
    const location = useLocation()
    console.log(location.pathname)

    return (
        <nav className="">
            <ul className=" relative flex  justify-end p-3 gap-3 text-[1.1rem] capitalize text-white/80">
                { 
                    location.pathname === '/home/profile' &&
                    <li>
                        <Link
                        to=""
                            className="hover:text-white/50"
                        >
                            Marketplace
                        </Link>
                    </li>
                
                }

                {
                    user === 'guest' ? 
                        <li>
                            {
                                location.pathname !== '/home/profile' &&  
                                <Link
                                    to="/login"
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
                                to="/profile"
                                className="flex items-center"
                            >
                                <p className="hover:bg-[#3f4041]/50 bg-[#3f4041] text-white p-2 gap-2 w-fit rounded-l-lg inline-flex">
                                    <img src={Dropdown}/>
                                    Kubasu Ivan Sakwa
                                </p>
                                <div className="bg-[#3f4041] p-1 rounded-r-lg"><img src={dummyuser}/></div>
                            </Link>
                        }
                    </li>
                }
                
                { 
                    user !== 'guest' &&
                    <li>  
                        <Link
                            to="/home/profile/upload"
                            className="hover:text-white/50"
                        >
                            upload
                        </Link>
                    </li>
                }
            </ul>
        </nav>
    )
}

export default Nav