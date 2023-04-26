import React from 'react'
import PastProjects from './body/PastProjects'
import Landing from './body/Landing'
import Background from './body/Background'

function Body() {
  return (
    <>
      <div id="body" className='m-2 grid justify-items-center'>      
        <Landing/>
        <Background/>
        <PastProjects/>
      </div>

    </>

  )
}

export default Body