const widthNum: number = 398.281
const heightNum: number = 160
import githubImg from "../assets/github-mark-white.png"
let githubWeb = 'https://github.com/Pakman450'
import '@google/model-viewer/dist/model-viewer'
import viewmodel from '../assets/spike2.glb'
import "./bodyStyles.css"

function Landing() {
  return (
    <>
        <div className='py-20 w-full max-w-7xl rounded-lg bg-[#19376D]/50 drop-shadow-2xl '>
            <div className="grid justify-center md:px-20 md:flex">
                <div className={`h-${heightNum}px w-${widthNum}px md:grid md:place-content-center grid font-mono text-white text-left`}>            
                    <h1 className='mb-2 md:text-lg'>
                        <span className="text-6xl">
                            Hello!
                        </span>
                        My name is, 
                    </h1>
                    <h2 className='my-2 text-7xl'>
                        Steven Pak
                    </h2>
                    <h2 className='mt-2 md:text-lg'>
                        I focus on computational drug design. 
                    </h2>
                </div>

                <div className={`hidden md:grid md:place-content-center h-${heightNum}px w-${widthNum}px`}>
                    <div className="mx-10 w-72 h-72 border-black rounded-lg border-4">
                        <model-viewer src={viewmodel} auto-rotate rotation-per-second={`30deg`} camera-controls touch-action={"pan-y"}/>
                    </div>
                </div>

                <div className={`md:hidden flex justify-center my-5 h-${heightNum}px w-${widthNum}px`}>
                    <div className="mx-10 w-72 h-72 border-black rounded-lg border-4">
                        <model-viewer src={viewmodel} auto-rotate rotation-per-second={`30deg`} camera-controls touch-action={"pan-y"}/>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <button className="border-black border-2 rounded-md p-5 mt-10 mr-5 text-4xl flex hover:border-blue-400 hover:rounded-md hover:bg-white">
                    Check out my github! 
                    <a href={githubWeb} className=" mx-4 w-10 h-auto">
                        <img src={githubImg}/>
                    </a>
                </button>

                <button className="border-black border-2 rounded-md p-5 mt-10 ml-5 text-4xl flex hover:border-blue-400 hover:rounded-md">
                    Contact me!
                    <a href={githubWeb} className=" mx-4 w-10 h-auto">
                        <img src={githubImg}/>
                    </a>
                </button>
            </div>

        </div>
        

    </>
  )
}

export default Landing