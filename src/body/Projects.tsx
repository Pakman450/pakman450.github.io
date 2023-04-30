import React from 'react'
import { useState, useRef, useEffect } from "react";

function Projects() {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref: any = useRef(null);
    useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
    },{threshold: 0.5});
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
          title: 'Mol2db',
          href: 'https://github.com/Pakman450/mol2db',
          description:
            'Mol2db is a python-based software to interface with your mol2-based molecular library database on a linux-based command line. \
            The database utitlizes psql to organize and store your mol2 molecules. Instead of storing your mol2 molecules into a multi-mol2 file format, \
            which can be in the order of millions of molecules, \
            you can store them in a SQL-based database by using mol2db commands.',
          date: 'Apr 06, 2023',
          datetime: '2023-04-06',
          category: { title: 'Molecular Database', href: '#' },
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
            title: 'Mol2db',
            href: 'https://github.com/Pakman450/mol2db',
            description:
              'Mol2db is a python-based software to interface with your mol2-based molecular library database on a linux-based command line. \
              The database utitlizes psql to organize and store your mol2 molecules. Instead of storing your mol2 molecules into a multi-mol2 file format, \
              which can be in the order of millions of molecules, \
              you can store them in a SQL-based database by using mol2db commands.',
            date: 'Apr 06, 2023',
            datetime: '2023-04-06',
            category: { title: 'Molecular Database', href: '#' },
          },
          {
            id: 2,
            title: 'Mol2db',
            href: 'https://github.com/Pakman450/mol2db',
            description:
              'Mol2db is a python-based software to interface with your mol2-based molecular library database on a linux-based command line. \
              The database utitlizes psql to organize and store your mol2 molecules. Instead of storing your mol2 molecules into a multi-mol2 file format, \
              which can be in the order of millions of molecules, \
              you can store them in a SQL-based database by using mol2db commands.',
            date: 'Apr 06, 2023',
            datetime: '2023-04-06',
            category: { title: 'Molecular Database', href: '#' },
          },
      ]


  return (
    <>
        {/* <div  ref={ref}  className='transitions duration-300 translate-x-[-50%] opacity-0 w-full max-w-7xl my-2 px-5'>

        </div> */}

        <div id ="projects" ref={ref} className="transitions duration-300 translate-x-[-50%] opacity-0 mx-auto py-10 px-6 lg:px-8">
            <div className="mt-2 ml-2 text-white">
                <h1 className="text-4xl md:text-7xl text-left">
                    Projects
                </h1>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {posts.map((post) => (
                    <div className= 'group/all'>
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between border-white group-hover/all:bg-white rounded-2xl border-2 p-5">
                            <div className='my-2 group/spec'>
                                <a className=" mt-3 text-xl font-semibold leading-6 text-white border-white border-2 rounded-full px-3 py-1.5 group-hover/spec:text-red-700 
                                group-hover/all:bg-white group-hover/all:text-black group-hover/all:border-black
                                " href={post.href}>

                                    <span className="absolute inset-0" />
                                    {post.title}
                                </a>
                            </div>    
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-white group-hover/all:text-gray-600">
                                {post.date}
                                </time>
                                <div
                                className="z-10px-3 py-1.5 font-medium text-white group-hover/all:text-black
                                ">
                                    {post.category.title}
                                </div>
                            </div>
                            <div className="">
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-white group-hover/all:text-gray-600">{post.description}</p>
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