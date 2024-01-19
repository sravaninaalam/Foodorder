import React from 'react'
import User from './User'
import Userclass from './Userclass'

const About = () => {
  return (
   <>
        <div className='mx-auto text-center '>
            <h1>Developed By</h1>
            <Userclass name={"Naalam Sravani"} location={"Vizianagaram,Andhra Pradesh,India"} mail={"nalamsravani2016@gmail.com"}/>
        </div>
   </>
  )
}

export default About