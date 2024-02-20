import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CDN_URL } from '../utils/constants'

function Billingpage() {
  
    const cart_data=useSelector(store=>store.cart.items)
    const[total,setTotal]=useState(0)
    useEffect(()=>{
        setTotal(cart_data.reduce((acc,curr)=>acc+(curr.price/100 || curr.defaultPrice/100)*curr.quantity,0))
    },[cart_data])
   
  return (
   <>
        <div className='bg-gray-300 my-5 shadow-md border border-black w-96'>
            <h1 className='font-bold text-center'>Total billing in(Rs/-) {total}</h1>  
            <div>
                {cart_data.map((item,index)=><div key={index} className='border border-black m-2 flex'>
                    <div>
                        <img src={CDN_URL+item.imageId} className='w-24'/>
                        <h1 className='font-bold'>{item.name}</h1>
                    </div>
                    <h4 className=' font-medium text-center mt-4 ml-5'>Price-₹{item.price/100 ||item.defaultPrice/100}</h4>
                    <h4 className='text-center  mt-4 ml-5'>Quantity:<span className='font-medium'>{item.quantity}</span></h4>
               </div>
              )}
        </div>  
           
    </div>
        
   </>
  )
}

export default Billingpage
