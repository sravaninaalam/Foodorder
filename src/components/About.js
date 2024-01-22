import React, { useState } from 'react'
import User from './User'
import Userclass from './Userclass'



export const Section=({title,Body,visible,setShow,hide})=>{
  return(
   <div className='my-4 md:p-2 md:mx-10 mx-1 border border-blue-200 bg-lime-50'>
       <h2 className='font-bold'>{title}</h2>
       {visible
            ?<div>
                <button onClick={()=>hide()}>HIDE</button>
                <h3>{Body}</h3>
            </div>
       :<button onClick={()=>setShow()}>SHOW</button>
       }
     
   </div>
  )
}
const About = () => {

     const[show,setShow]=useState()

  return (
   <>
   <div  className='mt-5 md:mx-10 mx-0'>
      <Section title={"Developed By"} visible={show=='developer'} setShow={()=>setShow('developer')} hide={()=>setShow(null)}
      Body={ <Userclass name={"Naalam Sravani"} location={"Vizianagaram,Andhra Pradesh,India"} mail={"nalamsravani2016@gmail.com"}/>}
      />
      <Section title={"Techstack"}  visible={show=='techstack'} setShow={()=>setShow('techstack')}
      hide={()=>setShow(null)} Body={
        <ul className='mx-8 my-3 list-disc'>
        <li><span className='font-bold'>React: </span> The heart and soul of our app, ensuring dynamic and responsive user interfaces.</li>
        <li><span className='font-bold'>Parcel: </span> A blazing-fast web application bundler, keeping our app performant.</li>
        <li><span className='font-bold'>Tailwind CSS :</span> Making our UI sleek, stylish, and customizable</li>
        <li><span className='font-bold'>Redux Toolkit: </span> For state management that's both efficient and developer-friendly.</li>
        <li>For effortless navigation <span className='font-bold'>React Router</span> is used which enables Client side routing</li>
      </ul>
      }/>
      <Section title={"Feautures"} visible={show=='feautures'} setShow={()=>setShow('feautures')}
       hide={()=>setShow(null)} Body={
        <ul  className='mx-8 my-3 list-disc'>
                 <li> Explore Delicious Menus offered by Top Restaurants</li>
                 <li>Swiggy's Live Api data</li>
                 <li> Effortless Ordering</li>
                 <li>Dazzling Shimmer UI</li>
                 <li>Search Restaurants</li>
                 <li> Error Handling - 404 Page</li>
                 <li> Fully Responsive</li>
              </ul>
      }/>
        </div>
   </>
  )
}

export default About