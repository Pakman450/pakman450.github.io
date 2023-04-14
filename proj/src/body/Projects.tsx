import React from 'react'


function Projects() {
  return (
    <>
        <div className='bg-[#19376D] my-2 py-20  w-[80rem] max-w-7xl rounded-lg drop-shadow-md'>
          <div className=' bg-white flex justify-center'>
            <div className="scroll-pl-10 snap-x flex snap-mandatory h-96 w-96 mx:auto overflow-y-hidden">
              <div className="snap-start bg-slate-100 scroll-ml-6  grid min-w-full h-screen place-items-center text-8xl">
                1
              </div>
              <div className="snap-start bg-orange-200 scroll-ml-6 grid min-w-full h-screen place-items-center text-8xl">
                2
              </div>
              <div className="snap-start bg-green-200 scroll-ml-6  grid min-w-full h-screen place-items-center text-8xl">
                3
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Projects