import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../assets/logo.svg"
import googleLogo from "../assets/googleLogo.svg"
import { auth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from './../../firebase-config';
import { signInWithEmailAndPassword } from "firebase/auth";



function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate();

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/home/marketplace')
                console.log(user)
            } else {
                navigate('/login')
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            localStorage.setItem('usertype', `${user.displayName}`)
            console.log('Signed in user:', user.displayName);
        } catch (error) {
            console.error('Google Sign-In failed:', error);
        }
    };




    return (
        <section className="relative flex flex-col w-full text-white h-[100vh] justify-center items-center bg-[#23272F]">
            <section className="flex flex-col lg:border overflow-hidden relative p-3 h-[28rem] rounded-xl justify-center lg:w-[30%]">
                <form
                    className="flex flex-col gap-2 h-[10rem] items-center mb-3"
                // action="#" 
                // onSubmit={onLoginWithEmailAndPassword}
                >
                    <p className="text-red-600">{error}</p>
                    <input
                        type="email"
                        name="email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        className="bg-[#373d49] placeholder-[#cbccce]/80 w-[17rem] h-[2.1rem] p-1 text-lg outline-none text-[#f5f6f7] rounded-sm"
                        placeholder="example@email.com"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        minLength='6'
                        placeholder="Password"
                        className="bg-[#373d49] placeholder-[#cbccce]/80 w-[17rem] h-[2.1rem] p-1 text-lg outline-none text-[#f5f6f7] rounded-sm"
                        required
                    />
                    <div className="flex gap-3">
                        <button
                            className="bg-white/10 rounded-lg p-2 mt-4 w-[6rem] self-center shadow-lg text-white/80  hover:bg-white/50 hover:text-white"
                            onClick={(e) => {
                                e.preventDefault()
                                signInWithEmailAndPassword(auth, email, password)
                                .catch((err) => {
                                    console.log(err.code)
                                    if(err.code == 'auth/invalid-email') {
                                        setError('*invalid email')
                                    }else {
                                        setError('*invalid user credentials')
                                    }
                                })
                                localStorage.setItem('usertype', email)
                            }}
                        >
                            Login
                        </button>

                        <button
                            className="bg-white/10 rounded-lg p-2 mt-4 w-[6rem] self-center shadow-lg text-white/80  hover:bg-white/50 hover:text-white"
                            onClick={(e) => {
                                e.preventDefault()
                                navigate('/signup')
                            }
                            }
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <div className="flex gap-2 relative w-full items-center justify-center mt-[-0.1rem]">
                    <hr className="border-[#909192]/80 w-[30%]" />
                    <p className="text-[#909192]/80 text-xl">or</p>
                    <hr className="border-[#909192]/80 w-[30%]" />
                </div>
                <button onClick={handleGoogleSignIn}
                    // onClick={handleClick}
                    className="rounded-full p-2 mt-4 w-[4rem] bg-none flex justify-center items-center self-center shadow-lg text-white/80  hover:bg-white/20 hover:text-white"
                >
                    <img src={googleLogo} />
                </button>

                <p
                    className="cursor-pointer hover:text-blue-100 absolute bottom-3 underline decoration-wavy text-blue-200 opacity-[.5]"
                    onClick={() => {
                        navigate('/home/marketplace')
                        localStorage.setItem('usertype', 'guest')
                    }}
                >
                    continue as guest
                </p>
            </section>
        </section>
    )
}

export default Login