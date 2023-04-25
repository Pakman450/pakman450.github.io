import React from 'react'
import PastProjects from './body/PastProjects'
import Landing from './body/Landing'

function Body() {
  // const observer = new IntersectionObserver( (entries) => {
  //   entries.forEach((entry)=>{
  //     console.log(entry)
  //     if (entry.isIntersecting){
  //       entry.target.classList.add('show')
  //     }else{
  //       entry.target.classList.remove('show')
  //     }
  //   })
  // })
  // // const bodyElements = document.getElementById('body')
  // // bodyElements.forEach((e1)=> observer.observe(e1))

  return (
    <>
      <div id="body" className='m-2 grid justify-items-center'>      
        <Landing/>
        <PastProjects/>
      </div>

    </>

  )
}

export default Body