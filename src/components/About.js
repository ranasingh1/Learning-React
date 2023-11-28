import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
  const [count , setCount] = useState(0);
  return (
    <div>
      About
      <h1>count:{count}</h1>
      <button onClick={()=>setCount((count)=>count+1)}>Increase</button>
      <Outlet/>
    </div>
    
  )
 
}


export default About