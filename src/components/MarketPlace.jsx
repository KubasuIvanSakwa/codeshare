import { useEffect, useState } from "react"
import Card from "./Card"
import Search from "./Search"
import { collection, getDocs } from "firebase/firestore"
import { db } from '../../firebase-config'
import CodeMirror from '@uiw/react-codemirror' // Correct default import
import { javascript } from '@codemirror/lang-javascript' // JavaScript/JSX support
import { oneDark } from '@codemirror/theme-one-dark' // Dark theme
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { placeholder } from '@codemirror/view'
import { FaClipboard, FaCheck } from 'react-icons/fa'

const placeholderExtension = placeholder('// it starts with one line of code')

function MarketPlace() {
    const [isCopied, setIsCopied] = useState(false)
    const [toggleShowUpload, setToggleShowUpload] = useState(false)
    const [codes, setCodes] = useState('')
    const [fetchedProjects, setFetchedProjects] = useState([]) // State to store fetched projects


    const show = localStorage.getItem('tog')
    const code = localStorage.getItem('code')
    const category = localStorage.getItem('category')

    useEffect(() => {
        if(show) {
            setToggleShowUpload(true)
        }
    }, [show])

    // Fetch data from Firestore
    async function getCode() {
        try {
            const querySnapshot = await getDocs(collection(db, "codes"))
            const projectsData = []
            querySnapshot.forEach((doc) => {
                projectsData.push({ id: doc.id, ...doc.data() }); // Store each document data along with its ID
            });
            setFetchedProjects(projectsData); // Set the fetched data to the state
        } catch (error) {
            console.log("Error fetching data:", error)
        }
    }

    // Fetch data on component mount
    useEffect(() => {
        getCode(); // Call getCode function when the component mounts
    }, []); // Empty dependency array means this runs only once on mount


    const handleCodeChange = (value) => {
        setCodes(value)
        // setIsCopied(false) // Reset the copied status on code changes
    }

    return (
        <section className="p-1 relative h-fit overflow-y-hidden w-full flex flex-col gap-2">
            <Search />
            <button onClick={() => getCode()} className="relative top-[-3.5rem] right-[-38rem] underline text-white/60">refresh</button> {/* Option to manually refresh the data */}
            <section className="lg:ml-[10rem] mr-[10rem] h-[29rem] scroll-smooth overflow-x-hidden flex flex-wrap gap-4 overflow-y-scroll p-2">
                
                <section className="flex flex-wrap min-h-fit w-full p-2 gap-2">
                {fetchedProjects.map((proj, index) => (
                    <Card key={index} code={JSON.parse(proj.code)} index={proj.id} createdAt={proj.createdAt} category={proj.cat}/>
                ))}
                </section>            
            </section>

            {toggleShowUpload &&
                <section 
                    className="absolute flex flex-col w-[80%] left-5 h-[90%] rounded-xl  bg-[#2d3035] border border-white/50"
                    style={{zIndex: 60}}
                >
                    <div className="w-[99%] h-[2rem] m-1 rounded-xl flex justify-end items-center">
                    <p 
                        onClick={() => {
                            setToggleShowUpload(false)
                            localStorage.removeItem('tog')
                            localStorage.removeItem('code')
                            localStorage.removeItem('category')
                            }}
                        className=' w-[2rem] h-[2rem] rounded-full p-1 flex hover:bg-white/20 cursor-pointer items-center justify-center text-white/70 border'>
                        X
                    </p>
                    </div>
                    <section className="w-full h-[90%]">
                        <div className="ml-3 w-full h-[3rem] flex items-center gap-3">
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
                        </div>
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
                                lineNumbers: false, // Show line numbers
                                indentUnit: 2, // Indentation size
                            }}
                            style={{
                                width: '90%',
                                margin: '0.4rem',
                                fontSize: '13px',
                                fontFamily: 'monospace',
                                boxShadow: '12px 0 15px -4px #11141A, -12px, 0 8px -4px #11141A',
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
                    </section>
                </section>
            }
        </section>
    );
}

export default MarketPlace;





 // function displayDate(firebaseDate) {
    //     const date = firebaseDate.toDate()
        
    //     const day = date.getDate()
    //     const year = date.getFullYear()
        
    //     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    //     const month = monthNames[date.getMonth()]
    
    //     let hours = date.getHours()
    //     let minutes = date.getMinutes()
    //     hours = hours < 10 ? "0" + hours : hours
    //     minutes = minutes < 10 ? "0" + minutes : minutes
    
    //     return `${day} ${month} ${year} - ${hours}:${minutes}`
    // }