
const widthNum: number = 398.281
const heightNum: number = 160


function Landing() {
  return (
    <>
        <div className=' pl-20 py-20  drop-shadow-md rounded-lg flex text-white bg-[#19376D]'>

            <div className={`h-${heightNum}px w-${widthNum}px`}>            
                <h1 className='mb-2'>
                    Hello! My name is, 
                </h1>
                <h2 className='m-2 text-8xl'>
                    Steven Pak
                </h2>
                <h2 className='mt-2'>
                    I focus on creating software for docking molecules...
                </h2>
            </div>

            <div className={`grid place-content-center h-${heightNum}px w-${widthNum}px`}>
                <div className={`pl-5`}>
                    lol
                </div>
            </div>
        </div>

    </>
  )
}

export default Landing