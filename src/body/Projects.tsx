import React from 'react'

import { useState, useRef, useEffect } from "react";
import '@google/model-viewer/dist/model-viewer';
// @ts-ignore 
import viewmodel from '../assets/spike2.glb'



function Projects() {

    const STAGGER = 100
    const duration = {enter: 500, exit: 300}

    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref: any = useRef(null);
    useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
    },{threshold: 0.10});

    const el: any = document.getElementById("projects")
    if (isIntersecting){
        el.classList.add("opacity-100")
        el.classList.add("translate-x-[0]")
    }else{
        el.classList.remove("opacity-100")
        el.classList.remove("translate-x-[0]")
    }

    observer.observe(el);
    return () => observer.disconnect();
    }, [isIntersecting]);

    const observerCards = new IntersectionObserver((entries)=>{
        entries.forEach(((entry)=>{
                if (entry.isIntersecting){
                    entry.target.classList.add("opacity-100")
                    entry.target.classList.add("translate-x-[0%]")

                }else{
                    entry.target.classList.remove("opacity-100")
                    entry.target.classList.remove("translate-x-[0%]")
                }
            }))  
    },{threshold: 0.25});

    const hiddenElements = document.querySelectorAll('section')

    // for (let i: number = 0; i<hiddenElements.length; i++){
    //     let delayArr: number[] = [100,300,700]
    //     let delayStart: number = 0
    //     // for (let i: number = 0; i<hiddenElements.length; i++){
    //     //     delayArr.push(delayStart)
    //     //     delayStart += 500
    //     // }
    //     hiddenElements.forEach((el,index,arr)=>{
    //         el.classList.add("delay-"+delayArr[index])
    //     })
    // }
    hiddenElements.forEach((el)=>observerCards.observe(el))

    const posts = [
        {
          id: 1,
          title: 'mol2db (founder/contributor)',
          href: 'https://github.com/rizzolab/mol2db',
          description:
            'Mol2db is a python-based software to interface with your mol2-based molecular library database on a linux-based command line. \
            The database utitlizes psql to organize and store your mol2 molecules. Instead of storing your mol2 molecules into a multi-mol2 file format, \
            which can be in the order of millions of molecules, \
            you can store them in a SQL-based database by using mol2db commands.',
          category: { title: 'Molecular Database', href: '#' },
          imagepath: '/github-mark-white.svg',
          delay: 'md:delay-100'
        },
        {
            id: 2,
            title: 'DOCK6 (developer)',
            href: 'https://dock.compbio.ucsf.edu/DOCK_6/index.htm',
            description:
              'DOCK6 is molecular modeling program used to identify potential binding geometries and interactions \
              of a molecule to a target. Specifically, docking is the identification of the low-energy binding modes \
              of a small molecule, or ligand, within the active site of a macromolecule, or receptor, whose structure is known. ',
            category: { title: 'Molecular Docking Programs', href: '#' },
            imagepath: 'https://ringo.ams.stonybrook.edu/images/1/1c/Pose_Reproduction_Intro.JPG',
            delay: 'md:delay-[300ms]'
          },
          {
            id: 3,
            title: 'datamol (contributor)',
            href: 'https://github.com/datamol-io/datamol',
            description:
              "Datamol is a python library to work with molecules. It's a layer built on top of RDKit and aims to be as light as possible.",
            category: { title: 'Molecular Processing Software', href: '#' },
            imagepath: '/github-mark-white.svg',
            delay: 'md:delay-[600ms]'

          },
          {
            id: 4,
            title: 'Isosteric swapping on molecular docking in DOCK6',
            href: '',
            description:
              '...',
            category: { title: 'on-going work', href: '#' },
            imagepath: "",
            modelpath: '/iso.glb',
            delay: 'md:delay-[900ms]'          
        },
    ]
  return (
    <>
        <div  ref={ref} className="w-full max-w-7xl my-2 px-5">
            <div id="projects" className="transitions duration-500 translate-x-[-50%] opacity-0 my-2 ml-2 text-white">
                <h1 className="text-4xl md:text-7xl text-left">
                    Projects and Publications
                </h1>
            </div>
            <div className="mx-auto grid justify-items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {
                posts.map((post) => ( 
                        <section key={post.id} className={`transitions ${post.delay} duration-1000 ease-in-out  -translate-x-[50%] opacity-0 group/card hover:z-50`}>
                            <article className="transitions duration-300 flex max-w-xl flex-col items-start justify-between md:hover:scale-125  border-white rounded-2xl border-2 p-5 bg-zinc-900
                            group-hover/card:bg-slate-200 "
                            >
                                <div  className='group/button  my-2 text-white'>
                                    <a href={post.href}> 
                                        <button className='transition duration-150 ease-in-out hover:scale-150 text-xl line-clamp-2 leading-5 font-semibold bg-slate-700 text-white border-white border-2 rounded-full px-3 py-1.5
                                            group-hover/card:text-black group-hover/card:bg-white group-hover/card:border-black group-hover/card:animate-button-pulse
                                            group-hover/button:text-white group-hover/button:bg-lime-500
                                            ' 
                                        > {post.title}</button>                                   
                                    </a>
                                </div>


                                <div className="flex items-center gap-x-4 text-xs ">
                                    <div
                                    className="z-10 px-3 py-1.5 font-medium text-white 
                                    group-hover/card:text-black
                                    ">
                                        {post.category.title}
                                    </div>
                                </div>

                                {/* If the image path is empty show the model viewer */}
                                {
                                    post.imagepath === "" ? 
                                    <div className="w-full h-48 border-slate-800 rounded-lg border-4 group-hover/card:animate-border-pulse">
                                        <model-viewer src={post.modelpath} auto-rotate rotation-per-second={`30deg`} camera-controls touch-action={"pan-y"}/>
                                    </div>    
                                    :
                                    <div className="z-10 w-full h-48 grid place-content-center bg-black border-slate-800 rounded-lg border-4 group-hover/card:animate-border-pulse
                                    transition duration-150 ease-in-out"
                                    >
                                        <img className="w-full h-auto" src={post.imagepath}/>
                                    </div>
                                }
                                <div className="">
                                    <p className="mt-5 text-md leading-6 text-white group-hover/card:text-black text-justify line-clamp-4 group-hover/card:line-clamp-none"
                                    >{post.description}</p>
                                </div>
                            </article>
                        </section>
                ))}
            </div>
        </div>

    </>
    
  )
}

export default Projects
