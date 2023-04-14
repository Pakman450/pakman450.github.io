
const widthNum: number = 398.281
const heightNum: number = 160
import githubImg from "../assets/github-mark-white.png"

function Landing() {
  return (
    <>
        <div className='py-20 w-full grid justify-center max-w-7xl rounded-lg md:px-20 md:flex text-white bg-[#19376D] drop-shadow-2xl '>

            <div className={`h-${heightNum}px w-${widthNum}px md:grid md:place-content-center grid justify-items-center`}>            
                <h1 className='mb-2 text-center md:text-lg'>
                    Hello! My name is, 
                </h1>
                <h2 className='m-2 text-center text-8xl md:text-8xl'>
                    Steven Pak
                </h2>
                <h2 className='mt-2 text-center md:text-lg'>
                    I focus on creating software for docking molecules...
                </h2>
            </div>

            <div className={`hidden md:grid md:place-content-center h-${heightNum}px w-${widthNum}px`}>
                <div className={`w-72 h-72`}>
                    <img className=" m-2 w-full h-full" src={githubImg} alt='image not found'/>
                </div>
            </div>

            <div className={`md:hidden flex justify-center my-5 h-${heightNum}px w-${widthNum}px`}>
                <div className={`w-60 h-60`}>
                    <img className=" m-2 w-full h-full" src={githubImg} alt='image not found'/>
                </div>
            </div>
        </div>

    </>
  )
}

export default Landing