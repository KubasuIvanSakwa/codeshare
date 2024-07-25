import { Link, useLocation } from "react-router-dom"

function Nav() {

    const user = localStorage.getItem('usertype')
    const location = useLocation()
    console.log(location.pathname)

    return (
        <nav className="">
            <ul className="flex bg-white/20 justify-end p-3 gap-3 text-[1.1rem] capitalize text-white/80">
                { 
                    location.pathname === '/profile' &&
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
                                location.pathname !== '/profile' &&  
                                <Link
                                    to="/login"
                                    className="hover:text-white/50"
                                >
                                    Login
                                </Link>
                            }
                        </li>
                    :
                    <li>
                        {
                            location.pathname !== '/profile' &&  
                            <Link
                                to="/profile"
                                className="hover:text-white/50"
                            >
                                Profile
                            </Link>
                        }
                    </li>
                }
                
                { 
                    user !== 'guest' &&
                    <li>  
                        <Link
                            to="/profile/upload"
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