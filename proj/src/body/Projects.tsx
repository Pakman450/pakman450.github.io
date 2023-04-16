// min-[375px]:w-[30rem] sm:w-[40rem] md:
function Projects() {
  return (
    <>
        <div className='py-20 w-full grid justify-center max-w-7xl rounded-lg my-2 md:flex text-white bg-[#19376D] drop-shadow-2xl'>
            <div className=" snap-x flex snap-mandatory bg-white py-10  w-[20rem] sm:w-[30rem] md:w-[40rem]	lg:px-10 lg:w-full lg:max-w-4xl overflow-y-hidden">
              <div className="snap-start bg-slate-100 scroll-ml-6  grid min-w-full h-80 place-items-center text-8xl">
                1
              </div>
              <div className="snap-start bg-orange-200 scroll-ml-6 grid min-w-full h-80 place-items-center text-8xl">
                2
              </div>
              <div className="snap-start bg-green-200 scroll-ml-6  grid min-w-full h-80 place-items-center text-8xl">
                3
              </div>
            </div>
        </div>
    </>
  )
}

export default Projects