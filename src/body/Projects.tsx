import React from 'react'

import { useState, useRef, useEffect } from "react";
import '@google/model-viewer/dist/model-viewer';
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
          date: 'Apr 06, 2023',
          datetime: '2023-04-06',
          category: { title: 'Molecular Database', href: '#' },
          imagepath: ''
        //   author: {
        //     name: 'Steven Pak',
        //     role: 'Co-Founder / CTO',
        //     href: '#',
        //     imageUrl:
        //       'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        //  },
        },
        {
            id: 2,
            title: 'DOCK6 (contributor)',
            href: 'https://dock.compbio.ucsf.edu/DOCK_6/index.htm',
            description:
              'DOCK6 is molecular modeling program used to identify potential binding geometries and interactions \
              of a molecule to a target. Specifically, docking is the identification of the low-energy binding modes \
              of a small molecule, or ligand, within the active site of a macromolecule, or receptor, whose structure is known. ',
            date: 'Apr 06, 2023',
            datetime: '2023-04-06',
            category: { title: 'Molecular Docking Programs', href: '#' },
            imagepath: ''
          },
          {
            id: 3,
            title: 'datamol (contributor)',
            href: 'https://github.com/datamol-io/datamol',
            description:
              "Datamol is a python library to work with molecules. It's a layer built on top of RDKit and aims to be as light as possible.",
            date: 'Apr 06, 2023',
            datetime: '2023-04-06',
            category: { title: 'Molecular Processing Software', href: '#' },
            imagepath: ''
          },
          {
            id: 4,
            title: 'Descriptor-Driven De Novo Design Algorithms for DOCK6 using RDKit',
            href: '',
            description:
              'ABSTRACT: Structure-based methods that employ principles of de novo design can be used to construct\
              small organic molecules from-scratch, using pre-existing fragment libraries to sample chemical space,\
              and are an important class of computational algorithms for drug-lead discovery. Here, we present a\
              powerful new design method for DOCK6 that employs a Descriptor Driven De Novo strategy (termed\
              D3N) in which user-defined cheminformatics descriptors (and their target ranges) are calculated at each\
              layer of growth using the open-source toolkit RDKit. The objective is to tailor ligand growth towards\
              desirable regions of chemical space. The approach was extensively validated through: (1) comparison\
              of cheminformatics descriptors computed using the new DOCK6/RDKit interface versus the standard\
              Python/RDKit installation, (2) examination of descriptor distributions generated using D3N growth\
              under different conditions (target ranges and environments), and (3) construction of ligands with very\
              tight (pinpoint) descriptor ranges using clinical-relevant compounds as a reference. Our testing confirms\
              that the new DOCK6/RDkit integration is robust, showcases how DOCK6_D3N routines can be used to\
              direct sampling around user-defined chemical spaces, and highlights the power of on-the-fly descriptor\
              calculations for ligand design to important drug targets.',
            date: 'Apr 06, 2023',
            datetime: '2023-04-06',
            category: { title: 'Publication on JCIM', href: '#' },
            imagepath: './src/assets/.png'
          },
          {
            id: 5,
            title: 'Isosteric swapping on molecular docking in DOCK6',
            href: '',
            description:
              '...',
            date: 'Apr 06, 2023',
            datetime: '2023-04-06',
            category: { title: 'on-going work', href: '#' },
            imagepath: './src/assets/.png'
          },
      ]
  return (
    <>
        <div id="projects" ref={ref} className="transitions duration-300 translate-x-[-50%] opacity-0 w-full max-w-7xl my-2 px-5">
            <div className="my-2 ml-2 text-white">
                <h1 className="text-4xl md:text-7xl text-left">
                    Projects and Publications
                </h1>
            </div>
            <div className="mx-auto grid justify-items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {posts.map((post) => (
                    <div key={post.id} className='group/card'>
                        <article className="transition duration-300 ease-in-out flex max-w-xl flex-col items-start justify-between border-white rounded-2xl border-2 p-5 
                        group-hover/card:bg-white "
                        >
                            <div  className='group/button  my-2 text-white'>
                                <a href={post.href}> 
                                    <button className='transition duration-150 ease-in-out hover:scale-150 text-xl line-clamp-2 leading-5 font-semibold text-white border-white border-2 rounded-full px-3 py-1.5
                                        group-hover/card:text-black group-hover/card:bg-white group-hover/card:border-black group-hover/card:animate-button-pulse
                                        group-hover/button:text-white group-hover/button:bg-lime-500
                                        ' 
                                    > {post.title}</button>                                   
                                </a>
                            </div>


                            <div className="flex items-center gap-x-4 text-xs ">
                                {/* <time dateTime={post.datetime} className="text-white group-hover/card:text-black">
                                {post.date}
                                </time> */}
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
                                transition duration-150 ease-in-out hover:scale-150"
                                >
                                    <img src={post.imagepath}/>
                                </div>

                            
                            }
                            <div className="">
                                <p className="mt-5 text-md leading-6 text-white group-hover/card:text-black text-justify line-clamp-4 group-hover/card:line-clamp-none"
                                >{post.description}</p>
                            </div>
                            {/* <div className="relative mt-8 flex items-center gap-x-4">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full" />
                                <div className="text-sm leading-6">
                                <p className="font-semibold text-white">
                                    <a href={post.author.href}>
                                    <span className="absolute inset-0" />
                                    {post.author.name}
                                    </a>
                                </p>
                                <p className="text-white">{post.author.role}</p>
                                </div>
                            </div> */}
                        </article>
                    </div>

                ))}
            </div>
        </div>

    </>
    
  )
}

export default Projects