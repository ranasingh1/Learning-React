import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Profile from './Profile';

const About = () => {
  const [count , setCount] = useState(0);
//use of return in useEffect
  useEffect(
    // async useEffect must not return anything besides a function, which is used for clean-up.
    //The useEffect hook in React is designed to handle side effects in functional components. 
    //However, you can't directly declare the callback function of useEffect as async. 
    //This is because an async function implicitly returns a Promise, but the useEffect hook expects the return value to be either nothing (undefined) or a clean-up function.
    
    ()=>{
   //However, you can still perform asynchronous operations inside useEffect. 
   //The typical pattern is to define an async function inside the useEffect callback and then call it immediately. 
   //Here’s an example:
  // async function fetchData() {
  //   const response = await fetch('https://example.com/data');
  //   const data = await response.json();
  //   console.log(data);
  // }

  // fetchData();

      // const timer = setInterval(()=>console.log("About interval"), 1000);       
 //return here will work as component will unmount
    
      // return ()=>{
      //   clearInterval(timer);
      // }
  }, )
  return (
    <div>
      About
      <h1>count:{count}</h1>
      <button onClick={()=>setCount((count)=>count+1)}>Increase</button>
      <Profile names ="Rana" />
    </div>
    
  )
 
}


export default About