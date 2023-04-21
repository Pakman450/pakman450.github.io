
const widthNum: number = 398.281
const heightNum: number = 160
import githubImg from "../assets/github-mark-white.png"
import '@google/model-viewer/dist/model-viewer'
import viewmodel from '../assets/spike2.glb'
import "./bodyStyles.css"

function Landing() {
  return (
    <>
        <div className='py-20 w-full grid justify-center max-w-7xl rounded-lg md:px-20 md:flex text-slate-800 bg-[#19376D]/50 drop-shadow-2xl '>

            <div className={`h-${heightNum}px w-${widthNum}px md:grid md:place-content-center grid justify-items-center font-mono`}>            
                <h1 className='mb-2 text-center md:text-lg'>
                    Hello! My name is, 
                </h1>
                <h2 className='m-2 text-center text-7xl'>
                    Steven Pak
                </h2>
                <h2 className='mt-2 text-center md:text-lg'>
                    I focus on creating software for docking molecules...
                </h2>
            </div>

            <div className={`hidden md:grid md:place-content-center h-${heightNum}px w-${widthNum}px`}>
                <div className="mx-10 w-72 h-72 border-black rounded-lg border-4">
                    <model-viewer src={viewmodel} auto-rotate rotation-per-second={`30deg`} camera-controls touch-action={"pan-y"}/>
                </div>
            </div>

            <div className={`md:hidden flex justify-center my-5 h-${heightNum}px w-${widthNum}px`}>
                <div className="w-60 h-60">
                    <model-viewer src={viewmodel} auto-rotate rotation-per-second={`30deg`} camera-controls touch-action={"pan-y"}/>
                </div>
            </div>
        </div>
        

    </>
  )
}

export default Landing