import React from 'react'
import githubImg from "./assets/github-mark-white.png"

type Props = {}

function Footer({}: Props) {
  return (
    <>
        <div className='bg-[#0B2447] flex justify-center'>
            <div className='hidden md:flex justify-center my-4 p-4 text-white border-2 border-white rounded-md'>
                <p className="">
                    Check out my GitHub!
                </p>
                <a href="" className='hidden md:flex'target="_blank">
                    <img className=" ml-2 w-6 h-6" src={githubImg} alt='image not found'/>
                </a> 
            </div>

            <div className='flex md:hidden justify-center my-4 p-4 text-white'>
                <a href="" className='' target="_blank">
                    <img className=" m-2 w-6 h-6" src={githubImg} alt='image not found'/>
                </a> 
            </div>
        </div>
    </>
  )
}

export default Footer