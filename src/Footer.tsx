import React from 'react'
import githubImg from "./assets/github-mark-white.png"

type Props = {}
let githubWeb = 'https://github.com/Pakman450'

function Footer({}: Props) {
  return (
    <>
        <div className='flex justify-center'>
            <a href={githubWeb} className='hidden md:flex'target="_blank">
                <div className='hidden md:flex hover:bg-white hover:text-black justify-center my-4 p-4 text-white border-2 border-white rounded-md'>
                    <p className="">
                        Check out my GitHub!
                    </p>
                    
                        <img className=" ml-2 w-6 h-6" src={githubImg} alt='image not found'/>
                    
                </div>
            </a> 

            <a href={githubWeb} className='' target="_blank">
                <div className='flex md:hidden justify-center p-4 text-white'>             
                        <img className=" m-2 w-8 h-8" src={githubImg} alt='image not found'/>
                </div>
            </a>
        </div>
    </>
  )
}

export default Footer