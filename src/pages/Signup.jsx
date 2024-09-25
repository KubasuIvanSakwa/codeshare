import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../assets/logo.svg"
import googleLogo from "../assets/googleLogo.svg"
import { auth } from './../../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth'


function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')
    const [error, setError] = useState('')
    const [passError, setPassError] = useState(false)

    const navigate = useNavigate()

    async function createNewUserAccount(e) {
        e.preventDefault()
        if(password === repassword) {
            setPassError(false)
            try {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password,
                )
                localStorage.setItem('usertype', email)
                localStorage.setItem('userId', userCredential._tokenResponse.localId)
                navigate('/login')
            } catch (error) {
                if(error.code == 'auth/email-already-in-use') {
                    setError('*email already exists')
                }
            }
        } else {
            setPassError(true)
        }
    }
    

    return (
        <section className="relative flex flex-col w-ful text-white h-[100vh] justify-center items-center bg-[#23272F]">
        <section className="flex flex-col lg:border overflow-hidden relative p-3 h-[28rem] rounded-xl justify-center lg:w-[30%]">
            <form 
                className="flex flex-col gap-2 h-[10rem] relative top-[-2rem] items-center" 
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
                        setRePassword(e.target.value)
                    }}
                    placeholder="Password" 
                    className="bg-[#373d49] placeholder-[#cbccce]/80 w-[17rem] h-[2.1rem] p-1 text-lg outline-none text-[#f5f6f7] rounded-sm"
                    required
                />
                <input 
                    type="password" 
                    name="repeatpassword"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    placeholder="Repeat Password" 
                    className={`${passError ? 'border border-red-600' : 'border-none'} bg-[#373d49] placeholder-[#cbccce]/80 w-[17rem] h-[2.1rem] p-1 text-lg outline-none text-[#f5f6f7] rounded-sm`}
                    required
                />
                <div className="flex gap-3">
                    <button
                        className="bg-white/10 rounded-lg p-2 mt-4 w-[6rem] self-center shadow-lg text-white/80  hover:bg-white/50 hover:text-white"
                        onClick={createNewUserAccount}
                    >
                        Register
                    </button>
                </div>
            </form>
        </section>
        </section>
    )
}

export default Signup