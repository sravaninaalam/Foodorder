import React from 'react'
import User from './User'
import Userclass from './Userclass'



export const Section=({title,Body})=>{
  return(
   <div>
       <h2>{title}</h2>
       <h3>{Body}</h3>
   </div>
  )
}
const About = () => {
  return (
   <>
      <Section title={"Developed By"} 
      Body={ <Userclass name={"Naalam Sravani"} location={"Vizianagaram,Andhra Pradesh,India"} mail={"nalamsravani2016@gmail.com"}/>}
      />
      <Section title={"Techstack"} 
     Body={
        <ul>
          <li>React Slick</li>
          <li>Tailwind</li>
        </ul>
      }/>
      <Section title={"Feautures"}Body={
        <ul>
          <li>UI design</li>
          <li>Navigation</li>
        </ul>
      }/>
        {/* <div className='mx-auto text-center '>
            <h1>Developed By</h1>
            <Userclass name={"Naalam Sravani"} location={"Vizianagaram,Andhra Pradesh,India"} mail={"nalamsravani2016@gmail.com"}/>
        </div> */}
   </>
  )
}

export default About