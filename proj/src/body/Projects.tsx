function Projects() {
  return (
    <>
        
        <div id='PROJECTS' className=' w-full grid justify-center max-w-7xl rounded-lg my-2 py-20 px-10 text-white bg-[#576CBC] drop-shadow-2xl'>
          <div className="flex mb-5">
            <h1 className="text-2xl">
              Projects
            </h1>
          </div>
          
          <div className=" snap-x flex snap-mandatory bg-white space-x-10 rounded-lg p-10 min-w-full max-w-4xl overflow-y-hidden">

            <div className="snap-center bg-black  grid min-w-[90%] h-80 place-items-center text-8xl">
              <h2 className="text-xl">
                Synthesizing inhibtors for PARP proteins
              </h2>
              <h2 className="text-xl">
                Synthesizing inhibtors for PARP proteins
              </h2>
            </div>
            <div className="snap-center bg-orange-200 grid min-w-[90%] h-80 place-items-center text-8xl">
              <h2 className="text-xl">
                Measuring gluten levels in medications
              </h2>
              <h2 className="text-xl">
                Measuring gluten levels in medications
              </h2>
            </div>
            <div className="snap-center bg-green-200   grid min-w-[90%] h-80 place-items-center text-8xl">
              <h2 className="text-xl">
                Driving molecular construction via descriptors
              </h2>
              <h2 className="text-xl">
                Driving molecular construction via descriptors
              </h2>
            </div>
          </div>
        </div>
    </>
  )
}

export default Projects