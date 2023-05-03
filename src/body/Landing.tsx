import githubImg from "../assets/github-mark-white.svg"
import emailImg from "../assets/email.svg"
import '@google/model-viewer/dist/model-viewer' 
// @ts-ignore  
import viewmodel from '../assets/iso.glb'
import "./bodyStyles.css"
import { useState, useRef, useEffect } from "react";

const widthNum: number = 398.281
const heightNum: number = 160
let githubWeb = 'https://github.com/Pakman450'


function Landing() {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref: any= useRef(null);
    useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
    },{threshold: 0.25});
    const el: any = document.getElementById("landing")
    if (isIntersecting){
        el.classList.add("opacity-100")
        el.classList.add("translate-x-[0]")
    }else{
        el.classList.remove("opacity-100")
        el.classList.remove("translate-x-[0]")
    }
    observer.observe(ref.current);
    return () => observer.disconnect();
    }, [isIntersecting]);


  return (
    <>
        <div ref={ref} id="landing"  className='transitions duration-300 translate-x-[-50%] opacity-0 py-20 w-full md:h-screen max-w-7xl grid content-evenly'>
            <div className="grid justify-center md:justify-evenly md:px-20 md:flex">

                <div className={`h-${heightNum}px w-${widthNum}px md:grid md:place-content-center grid text-white text-left px-5`}>            
                    <h1 className='mb-2 md:text-lg'>
                        <span className="text-4xl sm:text-5xl md:text-6xl">
                            Hello! 
                        </span>
                        <span> </span>My name is, 
                    </h1>
                    <h2 className='my-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl'>
                        Steven Pak
                    </h2>
                    <h2 className='mt-2 text-md md:text-lg'>
                        I focus on computational drug design. 
                    </h2>
                </div>

                <div className={`hidden md:flex md:justify-center p-5 w-3/4 h-96`}>
                    <div className="w-full min-w-[16rem] h-full border-slate-800 rounded-lg border-4">
                        <model-viewer src={viewmodel} auto-rotate rotation-per-second={`30deg`} camera-controls touch-action={"pan-y"}/>
                    </div>
                </div>

                <div className={`md:hidden flex justify-center my-5 p-5`}>
                    <div className="w-full h-64 border-slate-800  rounded-lg border-4">
                        <model-viewer src={viewmodel} auto-rotate rotation-per-second={`30deg`} camera-controls touch-action={"pan-y"}/>
                    </div>
                </div>
            </div>

            <div className="md:flex md:justify-evenly grid justify-items-center p-5">
                <a href={githubWeb} >
                    <button id="github_button" className="flex items-center text-white border-white border-2 rounded-md p-5 mb-5 
                    md:mb-0 md:mr-5
                    hover:rounded-md hover:bg-white hover:text-black
                    
                    ">     
                        <h1 className="text-4xl">Check out my github</h1>
                        <img id="githubIcon" className="ml-4 grid justify-center w-10 h-auto" src={githubImg}/>
                    </button>

                    
                </a>

                <a href="mailto:steven.pak@stonybrook.edu" >
                    <button id="email_button" className="text-white border-white border-2 rounded-md p-5 mt-5 flex md:mt-0 md:ml-5  hover:rounded-md hover:bg-white hover:text-black">
                            <h1 className="self-center text-4xl">Contact me</h1>
                            <img id="emailIcon" className="ml-4 grid justify-center w-10 h-auto invert" src={emailImg}/>
                    </button>
                </a>
            </div>

        </div>
        

    </>
  )
}

export default Landing