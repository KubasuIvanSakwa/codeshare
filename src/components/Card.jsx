import Dropdown from "../../public/drop-down.svg"
import Star from "../assets/star.svg"
import CodeMirror from '@uiw/react-codemirror' // Correct default import
import { javascript } from '@codemirror/lang-javascript' // JavaScript/JSX support
import { oneDark } from '@codemirror/theme-one-dark' // Dark theme
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { placeholder } from '@codemirror/view'
import { useState } from "react"
import { Link } from "react-router-dom"

const placeholderExtension = placeholder('// it starts with one line of code')

function Card({ title, code, createdAt, index }) {

    const [codes, setCodes] = useState('')

    const handleCodeChange = (value) => {
        setCodes(value)
        // setIsCopied(false) // Reset the copied status on code changes
    }

    return (
        <div className="bg-[#2d3035] relative w-[30rem] border border-white/10 h-[17rem] rounded-lg flex flex-col">
            <div className="flex p-2 gap-1 justify-between">
            <div className="flex gap-1">
                <div className="circle">
                    <span className="relative cursor-pointer hover:close::before bg-teal-500 inline-block center w-3 h-3 rounded-full close"></span>
                </div>
                <div className="circle">
                    <span className="bg-orange-500 inline-block center w-3 h-3 rounded-full"></span>
                </div>
                <div className="circle">
                    <span className="bg-indigo-500 box inline-block center w-3 h-3 rounded-full"></span>
                </div>
            </div>
                <div>
                <div className="relative w-[1.5rem]">
                    <img src={Star} />
                </div>
                </div>
            </div>
            <div className="card__content z-10 overflow-hidden relative  h-[9rem]">
                <div className="p-2 flex flex-col gap-1">
                    <h1 className="text-white font-extrabold self-center">{title ? `${title}` : 'no title'}</h1>
                        {/* CodeMirror editor */}
            <CodeMirror
                value={code}
                height="200px"
                extensions={[
                        [javascript({ jsx: true })],
                        placeholderExtension
                    ]} // JSX support
                theme={oneDark} // One Dark theme
                onChange={(value) => handleCodeChange(value)}
                
                options={{
                    lineNumbers: false, // Show line numbers
                    indentUnit: 2, // Indentation size
                }}
                style={{
                    width: '100%',
                    fontSize: '13px',
                    fontFamily: 'monospace',
                    boxShadow: '12px 0 15px -4px #11141A, -12px, 0 8px -4px #11141A',
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px'
                }}
                className="custom-cm-editor"
            />
            <style>
                {`
                    .cm-editor {
                        text-align: left; /* Ensure text is aligned to the left */
                    }
                    .cm-content {
                        padding-left: 0; /* Ensure no extra padding on the left side */
                    }
                    .cm-line {
                        text-indent: 0; /* Ensure there's no unintended indentation */
                    }
                    
                    .custom-cm-editor .cm-scroller {
                        /* Webkit browsers (Chrome, Safari) */
                        scrollbar-width: thin; /* Firefox */
                        scrollbar-color: transparent transparent; /* Firefox */
                    }

                    .custom-cm-editor .cm-scroller::-webkit-scrollbar {
                        width: 8px; /* Width of the scrollbar */
                        background: transparent; /* Background of the scrollbar track */
                    }

                    .custom-cm-editor .cm-scroller::-webkit-scrollbar-thumb {
                        background: rgba(0, 0, 0, 0.1); /* Color of the scrollbar thumb */
                        border-radius: 10px; /* Rounded corners for the scrollbar thumb */
                    }

                    .custom-cm-editor .cm-scroller::-webkit-scrollbar-thumb:hover {
                        background: rgba(0, 0, 0, 0.2); /* Darker color when hovering over the scrollbar thumb */
                    }`
                }
            </style>
            </div>
            </div>
            <button
                onClick={() => {
                    localStorage.setItem('tog', 'true')
                    localStorage.setItem('code', code)
                    localStorage.setItem('title', title)
                    window.location.reload()
                }}
                className="bg-[#2d3035] hover:bg-[#505253] border-white/40 flex items-center text-white rounded-full pl-2 gap-2 border pr-2 absolute bottom-4 self-center z-50"
            >continue exploring<img src={Dropdown}/></button>
        </div>
    )
}

export default Card