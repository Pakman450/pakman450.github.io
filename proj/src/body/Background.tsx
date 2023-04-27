import React from 'react'
import { useState, useRef, useEffect } from "react";

function Background() {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
    },{threshold: 0.05});
    console.log(isIntersecting);
    const el = document.getElementById("background")
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
        <div ref={ref} id="background" className='transitions duration-300 translate-x-[-50%] opacity-0 text-white w-full max-w-7xl my-2 px-5'>
          <div className="mt-2 ml-2">
            <h1 className="text-4xl md:text-7xl text-left">
                Background
            </h1>
          </div>

          <div className="border-slate-800 px-10 border-2 rounded-lg ">
                <div className='my-10'>
                    <h1 className='md:text-5xl underline underline-offset-4'>Education</h1> 
                    <div className='mt-2 ml-5'>
                        <h2 className='md:text-4xl'>
                            St. John's University (PharmD)
                        </h2>
                        <h2 className='text-xl mb-5'>
                            Queens, NY (2010 - 2016)         
                        </h2>
                    </div> 

                    <div className='mt-2 ml-5'>
                        <h2 className='md:text-4xl'>
                            Stony Brook University (PhD Candidate)
                        </h2>
                        <h2 className='text-xl mb-5'>
                            Stony Brook, NY (2019 - present)
                        </h2>
                    </div>                
                </div>

                <div className='my-10'>
                    <h1 className='md:text-5xl underline underline-offset-4'>Employment</h1> 
                    <div className='mt-2 ml-5'>
                        <h2 className='md:text-4xl leading-snug'>
                            Rite Aid Pharmacy <br/>
                        </h2>
                        <h2 className='text-2xl'>
                            Supervising Pharmacist
                        </h2>
                        <h2 className='text-xl mb-5'>
                            2016 - 2019
                        </h2>
                        <ul className='pl-10 list-disc text-xl'>
                            <li className='mb-2'>Recommended and counseled patients of any therapeutic need (e.g. pain relief, infection prophylactics, etc.) to optimize patient care
                                under the supervision of a licensed pharmacist</li>
                            <li className=''>Kept files and prescriptions organized in accordance to NY state law</li>
                            <li className='mt-2'>Created a vibrant service-oriented atmosphere for patients</li>
                        </ul>
                    </div> 
          
                </div>

               <div className='my-10'>
                    <h1 className='md:text-5xl underline underline-offset-4'>Research Experience</h1> 
                        <div className='mt-2 ml-5'>
                            <h2 className='md:text-4xl leading-snug'>
                                The Rizzo Lab
                            </h2>
                            <h2 className='md:text-2xl leading-snug'>
                                Professor: Robert Rizzo
                            </h2>
                            <h2 className='text-2xl'>
                                PhD. Candidate
                            </h2>
                            <h2 className='text-xl mb-5'>
                                2019 - present
                            </h2>
                            <ul className='pl-10 list-disc text-xl'>
                                <li className=''>Collaborate with lab members to continuously maintain and develop <span></span> 
                                    <button className='text-yellow-200 transition duration-150 ease-in-out hover:scale-110 hover:text-indigo-500' 
                                       href="https://dock.compbio.ucsf.edu/DOCK_6/index.htm"> DOCK6 </button> <span></span> 
                                    software
                                    </li>
                                <li className='my-2'>Developed a QED and synthetic accessibility score calculator in C++ programming language</li>
                                <li className='my-2'>Augmented the current <span></span> 
                                <button className='text-yellow-200 transition duration-150 ease-in-out hover:scale-110 hover:text-indigo-500' 
                                       href="https://dock.compbio.ucsf.edu/DOCK_6/index.htm"> DOCK6 </button> <span></span> 
                                       virtual screening protocol to mitigate complications and workflow from the past protocol version</li>
                                <li className=''>Ran a large-scale virtual screening on SGL1 to identify potent molecules</li>
                            </ul>
                        </div> 

                        <div className='mt-2 ml-5'>
                            <h2 className='md:text-4xl leading-snug'>
                                The Derek Tan Lab
                            </h2>
                            <h2 className='md:text-2xl leading-snug'>
                                Professor: Derek Tan
                            </h2>
                            <h2 className='text-2xl'>
                                Volunteer
                            </h2>
                            <h2 className='text-xl mb-5'>
                                2019 - present
                            </h2>
                            <ul className='pl-10 list-disc text-xl'>
                                <li className=''>Synthesized different protein cross-linkers that are functionalized for characterizing protein structure</li>
                                <li className='my-2'>Characterized cross-linkers by using proton-nuclear magnetic resonance (H-NMR), carbon-NMR (C-NMR), Infrared Spectrometry
                                    (IR), and Liquid Chromatography-Mass Spectrometry (LC-MS)</li>
                                <li className='my-2'>Explored any new reactions if former reactions do not provide wanted end results by exploring through SciFinder, Reaxy, and other
                                    chemistry journals</li>
                            </ul>
                        </div> 
          
                </div>
            </div>


        </div>
    </>
    
  )
}

export default Background