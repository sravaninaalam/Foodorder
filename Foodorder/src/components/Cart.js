import React, { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { CDN_URL, Cart_Empty_Img } from '../utils/constants'
import { Link } from 'react-router-dom' 
import {clearCart,removeItem, updateQuantity} from '../redux/cartSlice'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Billingpage from './Billingpage'
function Cartcard({data}){
  const dispatch=useDispatch()
  changeQuantity=(id,qty)=>{
      dispatch(updateQuantity({id,qty}))
  }
  return(
    <div>
      <ToastContainer theme='colored'/>
      <div className='w-5/6 mx-auto flex my-4 bg-white  shadow-2xl items-center py-4'>
        
        <img src={CDN_URL+data.imageId} className='w-24 rounded'/>
        <h1 className='font-bold mx-6'>{data.name}</h1>
        <h3  className="text-lg font-semibold">₹{data.price/100 || data.defaultPrice/100}</h3>
          <button className='p-2 my-2 mx-6 rounded-md bg-red-200 outline outline-red-300'
           onClick={()=>{ toast.error("Item has been removed")
            dispatch(removeItem(data.id))}}
           >Remove Item</button>
           <button className='p-2 my-2 mr-6 rounded-md bg-green-300 outline  outline-green-400'
           onClick={()=>{toast.success("Order placed successfully!!")
           toast.info("order item hasbeen removed from the cart")
           dispatch(removeItem(data.id))}}>Place Order</button>
            {data.quantity >1 && <button className=' bg-gray-400 px-2 mt-1' onClick={()=>changeQuantity(data.id,data.quantity-1)}>-</button>}
            <span className='px-2 text-center font-bold'>{data.quantity}</span>
        
            <button className=' bg-gray-400 px-2 mt-1' onClick={()=>changeQuantity(data.id,data.quantity+1)}>+</button>
      </div>
    </div>
  )
}
const Cart = () => {
  const cart_data=useSelector(store=>store.cart.items)
  const dispatch=useDispatch()
  return (
   <div >
   <div >
   <ToastContainer theme='colored'/>
        <div className='w-9/12 mx-auto my-5'>
            {cart_data.map((item,index)=><Cartcard data={item} />
            )}
          </div>
      <div className='flex justify-center'>
          {cart_data.length?
          <div>
            <Billingpage/>
          <button className="rounded-lg font-medium outline outline-red-500 p-2 m-5 hover:bg-red-400"
          onClick={()=>{toast.error("Cart has been cleared")
          const t=setTimeout(()=>{dispatch(clearCart())},0)
          return ()=>clearTimeout(t)
        }} >Clear cart</button>
        </div>
        :
        <div className='m-3'>
           <img src={Cart_Empty_Img} className='w-56 h-60  mt-2 mx-5'/>
                  <p className='mt-5 text-xl font-serif text-red-500'>Cart is empty Go back to <Link to='/home'><span className='font-bold text-black'>Home</span></Link></p>
                 
        </div>
        }
        </div>
      </div>
    
   </div>

  )
}

export default Cart