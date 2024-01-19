import React from 'react'
import User from './User'
import Userclass from './Userclass'

const About = () => {
  return (
   <>
        <div className='mx-auto text-center '>
            <h4>This is about us page </h4>
            <User/>
            <Userclass name={"ns"}/>
        </div>
   </>
  )
}

export default About