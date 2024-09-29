import { useEffect, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror' // Correct default import
import { javascript } from '@codemirror/lang-javascript' // JavaScript/JSX support
import { oneDark } from '@codemirror/theme-one-dark' // Dark theme
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { placeholder } from '@codemirror/view'
import { FaClipboard, FaCheck } from 'react-icons/fa'
import { collection, addDoc,  serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase-config'

const placeholderExtension = placeholder('// it starts with one line of code')

const CodeEditor = () => {
    const [code, setCode] = useState(''); // Store the input code
    const [isCopied, setIsCopied] = useState(false); // Manage copy state
    const [uploaded, setUploaded] = useState('upload code')
    const userId = localStorage.getItem('userId')

    const codeKey = 'code-local-Storage-key'
    
    useEffect(() => {
        const data = localStorage.getItem(codeKey)
        if(data) {
            setCode(data)
        } 
    },[])


    useEffect(() => {
        localStorage.setItem(codeKey, code)
    })

    // Handle code changes
    const handleCodeChange = (value) => {
        setCode(value)
        setIsCopied(false) // Reset the copied status on code changes
    }

    const countWords = (text) => {
        return text.trim().split(/\s+/).filter(Boolean).length;
    }

    const uploadCode = async (codeText) => {
        try {
            const docRef = await addDoc(collection(db, "codes"), {
                code: codeText,
                title: localStorage.getItem('title'),
                userId: localStorage.getItem('userId'),
                createdAt: serverTimestamp()
            })
            setUploaded('uploaded')
            localStorage.removeItem('title')
            localStorage.removeItem('codeKey')
        } catch (e) {
            console.error("Error adding document: ", e)
            setUploaded('error!')
        }
    }

    return (
        <div style={{ width: '100%', textAlign: 'center' }}>
            <div className='border-t border-l border-r border-white/20 pl-2 pr-2 rounded-tl-xl rounded-tr-xl h-[2rem] w-[90%] bg-[#11141A] flex justify-between'>
                {/* Copy to Clipboard Button */}
                <p className='text-[#a7a6a6]'>jsx</p>
                <div className='flex'>
                    <CopyToClipboard text={code} onCopy={() => setIsCopied(true)}>
                        <button
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                color: '#a7a6a6',
                                padding: '3px 10px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: '500',
                                outline: 'none',
                            }}
                            className=''
                        >
                            {isCopied ? (
                                <FaCheck style={{ marginRight: '8px', color: '#a7a6a6' }} />
                                ) : (
                                <FaClipboard style={{ marginRight: '8px', color: '#a7a6a6' }} />
                            )}
                            {isCopied ? 'Copied!' : 'Copy Code'}
                        </button>
                    </CopyToClipboard>
                    <div className='border-l h-[1rem] m-2 ml-0 border-[#a7a6a6]'></div>
                    <button 
                        className={`${uploaded == 'uploaded' ? 'text-green-400' : 'text-[#a7a6a6]'} ${uploaded == 'error!' ? 'text-red-400' : 'text-[#a7a6a6]'} text-[#a7a6a6] font-extrabold`}
                        onClick={() => uploadCode(JSON.stringify(code))}
                    >{uploaded}</button>
                </div>
            </div>
            {/* CodeMirror editor */}
            <CodeMirror
                value={code}
                height="400px"
                extensions={[
                        [javascript({ jsx: true })],
                        placeholderExtension
                    ]} // JSX support
                theme={oneDark} // One Dark theme
                onChange={(value) => handleCodeChange(value)}
                
                options={{
                    lineNumbers: true, // Show line numbers
                    indentUnit: 2, // Indentation size
                }}
                style={{
                    width: '90%',
                    fontSize: '16px',
                    fontFamily: 'monospace',
                    boxShadow: '12px 0 15px -4px #11141A, -12px 0 8px -4px #11141A',
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
            <div className='flex justify-between pl-2 text-sm border-white/20 border-b border-l border-r font-extralight text-white h-[1.5rem] w-[90%] bg-[#11141A] rounded-bl-xl rounded-br-xl'>
                <p>wc {countWords(code)}</p>
            </div>
        </div>
    );
};

export default CodeEditor;
