import React from 'react'
import { APPLOGO } from '../utils/constants'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
   <>
        <div className='flex justify-between items-center bg-slate-50 shadow-md sticky top-0'>
            <img src={APPLOGO} alt='applogo' className='w-16 p-2'/>
            <div >
                <ul className='flex p-3 m-3 items-center'>
                    <Link to='/'><li className='mx-3'>Home</li></Link>
                   <Link to='/about'><li className='mx-3'>About</li></Link>
                    <Link to='/cart'><li className='mx-3'>Cart</li></Link>
                   <Link to='/login'><li className='mx-3'>Login</li></Link>
                </ul>
            </div>
        </div>
   </>
  )
}

export default Header
