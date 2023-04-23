import React from 'react'
import PastProjects from './body/PastProjects'
import Landing from './body/Landing'

function Body() {
  return (
    <>
      <div className='m-2 grid justify-items-center'>      
        <Landing/>
        <PastProjects/>
      </div>

    </>

  )
}

export default Body