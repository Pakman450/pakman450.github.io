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

          <div className="border-slate-800 px-4 md:px-10 border-4 rounded-lg ">
                <div className='my-10'>
                    <h1 className='md:text-5xl underline underline-offset-4'>Education</h1> 
                    <div className='mt-2 ml-5'>
                        <h2 className='text-sm md:text-4xl'>
                            St. John's University (PharmD)
                        </h2>
                        <h2 className='text-sm md:text-xl mb-5'>
                            Queens, NY (2010 - 2016)         
                        </h2>
                    </div> 

                    <div className='mt-2 ml-5'>
                        <h2 className='text-sm md:text-4xl'>
                            Stony Brook University (PhD Candidate)
                        </h2>
                        <h2 className='text-sm md:text-xl mb-5'>
                            Stony Brook, NY (2019 - present)
                        </h2>
                    </div>                
                </div>

                <div className='my-10'>
                    <h1 className='md:text-5xl underline underline-offset-4'>Employment</h1> 
                    <div className='mt-2 ml-5'>
                        <h2 className='text-sm md:text-4xl leading-snug'>
                            Rite Aid Pharmacy <br/>
                        </h2>
                        <h2 className='text-sm md:text-2xl'>
                            Supervising Pharmacist
                        </h2>
                        <h2 className='text-sm md:text-xl mb-5'>
                            Nov 2016 - Feb 2019
                        </h2>
                        <ul className='text-sm pl-10 list-disc md:text-xl'>
                            <li className='mb-2'>Recommended and counseled patients of any therapeutic need (e.g. pain relief, infection prophylactics, etc.) to optimize patient care
                                under the supervision of a licensed pharmacist</li>
                            <li className=''>Kept files and prescriptions organized in accordance to NY state law</li>
                            <li className='mt-2'>Created a vibrant service-oriented atmosphere for patients</li>
                        </ul>
                    </div> 
          
                </div>

               <div className='my-10'>
                    <h1 className='md:text-5xl md:mb-4 underline underline-offset-4'>Research Experience</h1> 
                        <div className='mt-2 ml-5 '>
                            <h2 className='md:text-4xl leading-snug'>
                            <button className='text-yellow-200 transition duration-150 ease-in-out hover:scale-110 hover:text-indigo-500' 
                                       href="https://ringo.ams.stonybrook.edu/~rizzo/StonyBrook/index.html"> The Rizzo Lab </button>
                            </h2>
                            <h2 className='text-sm md:text-2xl  leading-snug'>
                                Professor: Robert Rizzo
                            </h2>
                            <h2 className='text-sm md:text-2xl'>
                                PhD. Candidate
                            </h2>
                            <h2 className='text-sm md:text-xl mb-5'>
                                Dec 2019 - present
                            </h2>
                            <ul className='pl-10 list-disc text-sm md:text-xl'>
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

                        <div className='mt-5 ml-5'>
                            <h2 className='md:text-4xl leading-snug'>
                                <button className='text-yellow-200 transition duration-150 ease-in-out hover:scale-110 hover:text-indigo-500' 
                                       href="https://www.mskcc.org/research/ski/labs/derek-tan"> The Derek Tan Lab </button>
                            </h2>
                            <h2 className='text-sm md:text-2xl leading-snug'>
                                Professor: Derek Tan
                            </h2>
                            <h2 className='text-sm md:text-2xl'>
                                Volunteer
                            </h2>
                            <h2 className='text-sm md:text-xl mb-5'>
                                Jun 2014 - Aug 2014
                            </h2>
                            <ul className='pl-10 list-disc text-sm md:text-xl'>
                                <li className=''>Synthesized different protein cross-linkers that are functionalized for characterizing protein structure</li>
                                <li className='my-2'>Characterized cross-linkers by using proton-nuclear magnetic resonance (H-NMR), carbon-NMR (C-NMR), Infrared Spectrometry
                                    (IR), and Liquid Chromatography-Mass Spectrometry (LC-MS)</li>
                                <li className='my-2'>Explored any new reactions if former reactions do not provide wanted end results by exploring through SciFinder, Reaxy, and other
                                    chemistry journals</li>
                            </ul>
                        </div> 

                        <div className='mt-5 ml-5'>
                            <h2 className=' md:text-4xl leading-snug'>
                            <button className='text-yellow-200 transition duration-150 ease-in-out hover:scale-110 hover:text-indigo-500' 
                                       href="https://sites.google.com/view/tanaji-talele-laboratory?pli=1"> Tanaji T. Talele's lab </button>
                            </h2>
                            <h2 className='text-sm md:text-2xl leading-snug'>
                                Professor: Tanaji Talele
                            </h2>
                            <h2 className='text-sm md:text-2xl'>
                                Volunteer
                            </h2>
                            <h2 className='text-sm md:text-xl mb-5'>
                                Mar 2014 - May 2016
                            </h2>
                            <ul className='pl-10 list-disc text-sm md:text-xl'>
                                <li className=''>Investigated a drug databank to find a potential chemical compound that can be repurposed to find PARP-1 inhibitors by using
                                    Computer-Aided software (Maestro)</li>
                                <li className='my-2'>Evaluated chemical compounds with quantitative/computational analysis by using Computer-Aided Design Programs to provide the
                                    top ten compounds for further bench work investigations</li>
                            </ul>
                        </div>

                        <div className='mt-5 ml-5'>
                            <h2 className='text-sm md:text-4xl leading-snug'>
                                S. William Zito's lab
                            </h2>
                            <h2 className='text-sm md:text-2xl leading-snug'>
                                Professor: S. William Zito
                            </h2>
                            <h2 className='text-sm md:text-2xl'>
                                Volunteer
                            </h2>
                            <h2 className='text-sm md:text-xl mb-5'>
                                Jun 2012 - Aug 2013
                            </h2>
                            <ul className='pl-10 list-disc text-sm md:text-xl'>
                                <li className=''>Assisted on a FDA-funded project that investigated the impact of gluten of medications as part of FDA’s Safe Use Initiative.</li>
                                <li className='my-2'>Quantified the amount of gluten in 39 medications by using competitive and sandwich enzyme-linked immunosorbent assays</li>
                                <li className=''>Interpreted raw data that were analyzed by UV-detectors by using Microsoft Excel graphing technique</li>
                            </ul>
                        </div>
          
                </div>
            </div>


        </div>
    </>
    
  )
}

export default Background