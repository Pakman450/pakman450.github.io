import { useState } from 'react'
import Navigation from './Navigation'
import Body from './Body'
import Footer from './Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
    <div className="App">

    <Navigation/>
    <Body/>
    <Footer/>


    </div>
  
  </>

  )
}

export default App
