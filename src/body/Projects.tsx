import React from 'react'

import { useState, useRef, useEffect } from "react";
import '@google/model-viewer/dist/model-viewer';
// @ts-ignore 
import viewmodel from '../assets/spike2.glb'


function Projects() {
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
                    entry.target.classList.add("translate-x-[0]")

                }else{
                    entry.target.classList.remove("opacity-100")
                    entry.target.classList.remove("translate-x-[0]")
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
          title: 'mol2db (owner)',
          href: 'https://github.com/Pakman450/mol2db',
          description:
            'Mol2db is a python-based software to interface with your mol2-based molecular library database on a linux-based command line. \
            The database utitlizes psql to organize and store your mol2 molecules. Instead of storing your mol2 molecules into a multi-mol2 file format, \
            which can be in the order of millions of molecules, \
            you can store them in a SQL-based database by using mol2db commands.',
          category: { title: 'Molecular Database', href: '#' },
          imagepath: '',
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
            imagepath: ''
          },
          {
            id: 3,
            title: 'datamol (contributor)',
            href: 'https://github.com/datamol-io/datamol',
            description:
              "Datamol is a python library to work with molecules. It's a layer built on top of RDKit and aims to be as light as possible.",
            category: { title: 'Molecular Processing Software', href: '#' },
            imagepath: '',
          },
        //   {
        //     id: 4,
        //     title: 'Descriptor-Driven De Novo Design Algorithms for DOCK6 using RDKit',
        //     href: '',
        //     description:
        //       'ABSTRACT: Structure-based methods that employ principles of de novo design can be used to construct\
        //       small organic molecules from-scratch, using pre-existing fragment libraries to sample chemical space,\
        //       and are an important class of computational algorithms for drug-lead discovery. Here, we present a\
        //       powerful new design method for DOCK6 that employs a Descriptor Driven De Novo strategy (termed\
        //       D3N) in which user-defined cheminformatics descriptors (and their target ranges) are calculated at each\
        //       layer of growth using the open-source toolkit RDKit. The objective is to tailor ligand growth towards\
        //       desirable regions of chemical space. The approach was extensively validated through: (1) comparison\
        //       of cheminformatics descriptors computed using the new DOCK6/RDKit interface versus the standard\
        //       Python/RDKit installation, (2) examination of descriptor distributions generated using D3N growth\
        //       under different conditions (target ranges and environments), and (3) construction of ligands with very\
        //       tight (pinpoint) descriptor ranges using clinical-relevant compounds as a reference. Our testing confirms\
        //       that the new DOCK6/RDkit integration is robust, showcases how DOCK6_D3N routines can be used to\
        //       direct sampling around user-defined chemical spaces, and highlights the power of on-the-fly descriptor\
        //       calculations for ligand design to important drug targets.',
        //     category: { title: 'Publication on JCIM', href: '#' },
        //     imagepath: './src/assets/.png'
        //   },
        //   {
        //     id: 5,
        //     title: 'Isosteric swapping on molecular docking in DOCK6',
        //     href: '',
        //     description:
        //       '...',
        //     category: { title: 'on-going work', href: '#' },
        //     imagepath: './src/assets/isosteric.png'
        //   },
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
                    <section key={post.id} className='transitions duration-1000 translate-x-[-50%] opacity-0 group/card hover:z-50'>
                        <article className="transitions duration-300 flex max-w-xl flex-col items-start justify-between hover:scale-125  border-white rounded-2xl border-2 p-5 bg-zinc-900
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
                                    <model-viewer src={viewmodel} auto-rotate rotation-per-second={`30deg`} camera-controls touch-action={"pan-y"}/>
                                </div>    
                                :
                                <div className="z-10 w-full h-full border-slate-800 rounded-lg border-4 group-hover/card:animate-border-pulse
                                transition duration-150 ease-in-out hover:scale-150 hover:z-50"
                                >
                                    <img src={post.imagepath}/>
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
