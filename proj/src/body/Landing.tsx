import githubImg from "../assets/github-mark-white.png"
import '@google/model-viewer/dist/model-viewer'
import viewmodel from '../assets/spike2.glb'
import "./bodyStyles.css"
import { useState, useRef, useEffect } from "react";

const widthNum: number = 398.281
const heightNum: number = 160
let githubWeb = 'https://github.com/Pakman450'


function Landing() {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
    },{threshold: 0.25});
    console.log(isIntersecting);
    const el = document.getElementById("landing")
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
        <div ref={ref} id="landing"  className='transitions duration-300 translate-x-[-50%] opacity-0 py-20 w-full md:h-screen max-w-7xl'>
            <div className="grid justify-center md:justify-evenly md:px-20 md:flex">

                <div className={`h-${heightNum}px w-${widthNum}px md:grid md:place-content-center grid text-white text-left px-5`}>            
                    <h1 className='mb-2 md:text-lg'>
                        <span className="text-4xl sm:text-5xl md:text-6xl">
                            Hello! 
                        </span>
                        My name is, 
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
                    <button className=" text-white border-white border-2 rounded-md p-5 mt-10 md:mr-5 flex hover:rounded-md hover:bg-white hover:text-black">
                        
                        <h1 className="self-center text-4xl">Check out my github!</h1>
                        <img className="mx-4 w-10 h-auto " src={githubImg}/>

                    </button>
                </a>

                <a href={githubWeb} >
                    <button className="text-white border-white border-2 rounded-md p-5 mt-10 md:ml-5 flex  hover:rounded-md hover:bg-white hover:text-black">
                        <h1 className="self-center text-4xl">Contact me.</h1>
                        <img className="mx-4 w-10 h-auto" src={githubImg}/>
                    </button>
                </a>
            </div>

        </div>
        

    </>
  )
}

export default Landing