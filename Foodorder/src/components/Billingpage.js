import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { CDN_URL } from '../utils/constants'

function Billingpage() {
    const qnty=useSelector(state=>state.cart.items.quantity)
    const cart_data=useSelector(store=>store.cart.items)
   
  return (
   <>
        <div className='bg-gray-300 my-5 shadow-md border border-black w-96'>
            <h1 className='font-bold text-center'>Total billing in(Rs/-) </h1>  
            <div>
                {cart_data.map((item,index)=><div key={index} className='border border-black m-2 flex'>
                    <div>
                        <img src={CDN_URL+item.imageId} className='w-24'/>
                        <h1 className='font-bold'>{item.name}</h1>
                    </div>
                    <h4 className=' font-medium text-center mt-4 ml-5'>Price-₹{item.price/100 ||item.defaultPrice/100}</h4>
                    <h4 className='text-center  mt-4 ml-5'>Quantity:<span className='font-medium'>{qnty}</span></h4>
               </div>
              )}
        </div>  
           
    </div>
        
   </>
  )
}

export default Billingpage
