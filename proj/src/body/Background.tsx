import React from 'react'
import { useState, useRef, useEffect } from "react";

function Background() {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
    },{threshold: 0.5});
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
        <div ref={ref} id="background" className='transitions duration-300 translate-x-[-50%] opacity-0 text-white w-full max-w-7xl my-2 p-5'>
          <div className="mt-2 ml-2">
            <h1 className="text-4xl md:text-7xl text-left">
                Background
            </h1>
          </div>

          <div className="border-slate-800 p-10 border-2 rounded-lg ">
                <div>
                    <h2 className='md:text-4xl'>
                        St. John's University (PharmD)
                    </h2>
                    <h2 className='text-xl mb-5'>
                        2010 - 2016
                    </h2>
                    <ol className='pl-10 list-disc'>
                        <li>PharmD degree earned</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ol>
                </div>

                <div className='my-10'>
                    <h2 className='md:text-4xl'>
                        Rite Aid Pharmacy
                    </h2>
                    <h2 className='text-xl mb-5'>
                        2016 - 2019
                    </h2>
                    <ol className='pl-10 list-disc'>
                        <li></li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ol>
                </div>

                <div className='my-10'>
                    <h2 className='md:text-4xl'>
                        Stony Brook University (PhD. Candidate)
                    </h2>
                    <h2 className='text-xl'>
                        2019 - present
                    </h2>
                </div>

            </div>


        </div>
    </>
    
  )
}

export default Background