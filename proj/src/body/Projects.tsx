// min-[375px]:w-[30rem] sm:w-[40rem] md:
function Projects() {
  return (
    <>
        <div className=' w-full grid justify-center max-w-7xl rounded-lg my-2 py-20 px-10 text-white bg-[#19376D] drop-shadow-2xl'>
            {/* <div className=" snap-x flex snap-mandatory bg-white space-x-10 rounded-lg py-10 md:py-40  w-[20rem] sm:w-[30rem] md:w-[40rem]	lg:px-10 lg:w-full lg:max-w-4xl overflow-y-hidden"> */}
            <div className=" snap-x flex snap-mandatory bg-white space-x-10 rounded-lg p-10 min-w-full max-w-4xl overflow-y-hidden">

              <div className="snap-center bg-black  grid min-w-[90%] h-80 place-items-center text-8xl">
                1asasdfasdfsdfsd
              </div>
              <div className="snap-center bg-orange-200 grid min-w-[90%] h-80 place-items-center text-8xl">
                2
              </div>
              <div className="snap-center bg-green-200   grid min-w-[90%] h-80 place-items-center text-8xl">
                3
              </div>
            </div>
        </div>
    </>
  )
}

export default Projects