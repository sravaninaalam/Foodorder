import React, { useContext, useState } from 'react'
import { APPLOGO } from '../utils/constants'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { enterLocation } from '../redux/locationSlice'
import { Home ,BadgeInfo,ShoppingCart,UserSquare2} from 'lucide-react'
import userContext from '../utils/userContext'
const Header = () => {
    const[loc,setLoc]=useState('')
    const dispatch=useDispatch()
    const fetchingLocation=(e)=>{
       e.preventDefault()
       dispatch(enterLocation(loc))
      setLoc('')
    }
    
    const {loggedUser}=useContext(userContext)
   
    const cartItems=useSelector(store=>store.cart.items)
   
  return (
   <>
        <div className='flex justify-between bg-cyan-100 items-center shadow-md sticky top-0'>
            <img src={APPLOGO} alt='applogo' className='w-16 p-2 ml-24 rounded-md'/>
            
            <div className='flex'>
            <form  className='' onSubmit={fetchingLocation}>
                 <input type='text' placeholder='Enter Location' className='rounded-md border border-black p-1 mt-6 w-48'
                 value={loc} onChange={(e)=>setLoc(e.target.value)}/>
            </form>
                <ul className='flex p-3 m-3 items-center'>
                    <Link to='/'><li className='mx-3'><Home/></li></Link>
                   <Link to='/about'><li className='mx-3'><BadgeInfo/></li></Link>
                    <Link to='/cart'><li className='mx-3 flex'><ShoppingCart/> -
                   <span className='bg-white rounded-full px-1 font-semibold text-red-800'>{cartItems.length}</span></li></Link>
                    {loggedUser ?<span className="font-bold mx-4 my-4 md:my-0">{loggedUser}</span>:
                   <Link to='/login'><li className='mx-3 '><UserSquare2/></li></Link>}
                </ul>
            </div>
        </div>
   </>
  )
}

export default Header
