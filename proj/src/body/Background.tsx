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
        <div ref={ref} id="background" className='text-white opacity-0'>
            Background
        </div>
    </>
    
  )
}

export default Background