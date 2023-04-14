import React from 'react'
import Projects from './body/Projects'
import Landing from './body/Landing'

function Body() {
  return (
    <>
      <div className='m-2  flex  justify-center'>      
      
        <Landing/>
        <Projects/>
      </div>

    </>

  )
}

export default Body