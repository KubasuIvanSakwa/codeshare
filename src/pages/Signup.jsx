import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../assets/logo.svg"
import googleLogo from "../assets/googleLogo.svg"

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    

    return (
        <section className="relative flex flex-col w-ful text-white h-[100vh] justify-center items-center bg-[#23272F]">
        <section className="flex flex-col lg:border overflow-hidden relative p-3 h-[28rem] rounded-xl justify-center lg:w-[30%]">
            <form 
                className="flex flex-col gap-2 h-[10rem] relative top-[-2rem] items-center" 
                // action="#" 
                // onSubmit={onLoginWithEmailAndPassword}
            >
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
                    className="bg-[#373d49] placeholder-[#cbccce]/80 w-[17rem] h-[2.1rem] p-1 text-lg outline-none text-[#f5f6f7] rounded-sm"
                    required
                />
                <div className="flex gap-3">
                    <button
                        className="bg-white/10 rounded-lg p-2 mt-4 w-[6rem] self-center shadow-lg text-white/80  hover:bg-white/50 hover:text-white"
                        type="submit"
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