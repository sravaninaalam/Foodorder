import React, { useState } from 'react'
import { APPLOGO } from '../utils/constants'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { enterLocation } from '../redux/locationSlice'
const Header = () => {
    const[loc,setLoc]=useState('')
    const dispatch=useDispatch()
    const fetchingLocation=(e)=>{
       e.preventDefault()
       dispatch(enterLocation(loc))
      setLoc('')
    }
    
    const cartItems=useSelector(store=>store.cart.items)
   
  return (
   <>
        <div className='flex justify-between items-center bg-slate-50 shadow-md sticky top-0'>
            <img src={APPLOGO} alt='applogo' className='w-16 p-2 ml-24'/>
            
            <div className='flex'>
            <form  className='' onSubmit={fetchingLocation}>
                 <input type='text' placeholder='Enter Location' className='border border-black p-1 mt-6 w-48'
                 value={loc} onChange={(e)=>setLoc(e.target.value)}/>
            </form>
                <ul className='flex p-3 m-3 items-center'>
                    <Link to='/'><li className='mx-3'>Home</li></Link>
                   <Link to='/about'><li className='mx-3'>About</li></Link>
                    <Link to='/cart'><li className='mx-3'>Cart -{cartItems.length}</li></Link>
                   <Link to='/login'><li className='mx-3'>Login</li></Link>
                </ul>
            </div>
        </div>
   </>
  )
}

export default Header
