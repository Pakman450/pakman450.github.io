import { useState, useRef, useEffect } from "react";

function PastProjects() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
  const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
  },{threshold: 0.25});
  console.log(isIntersecting);
  const el = document.getElementById("pastprojects")
  if (isIntersecting){
      el.classList.add("opacity-100")
      el.classList.add("translate-x-[0]")
  }else{
      el.classList.remove("opacity-100")
      el.classList.remove("translate-x-[0]")
  }
  observer.observe(ref.current);
  return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <>          

        <div ref={ref} id="pastprojects" className='transitions duration-300 translate-x-[-50%] opacity-0 w-full max-w-7xl my-2 p-5 text-white'>
          <div className="mt-2 ml-2">
            <h1 className="text-4xl md:text-7xl">
            Past Projects
            </h1>
          </div>

          <div className=' w-full grid justify-center max-w-7xl rounded-lg my-2 p-10 md:p-20 text-white bg-slate-800'>
            <div className=" snap-x flex snap-mandatory bg-white space-x-10 rounded-lg p-5 md:p-10 min-w-full max-w-4xl overflow-y-hidden">

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
        </div>
    </>
  )
}

export default PastProjects