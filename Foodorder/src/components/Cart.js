import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { CDN_URL, Cart_Empty_Img } from '../utils/constants'
import { Link } from 'react-router-dom' 
import {clearCart,removeItem} from '../redux/cartSlice'
function Cartcard({data}){
  const dispatch=useDispatch()
  return(
    <>
     
        <div className='w-72 bg-gray-100 p-2 m-2 rounded-lg shadow-lg outline outline-blue-200'>
          <img src={CDN_URL+data.imageId} className='w-24'/>
           <h1 className='font-bold'>{data.name}</h1>
           <h3 className="truncate hover:overflow-y-clip ">{data.description}</h3>
           <h3  className="text-lg font-semibold">₹{data.price/100 || data.defaultPrice/100}</h3>
           <button className='p-2 m-2 rounded-md bg-red-200 outline outline-red-300'
           onClick={()=>dispatch(removeItem(data.id))}
           >Remove Item</button>
           <button className='p-2 m-2 rounded-md bg-green-300 outline  outline-green-400'>Place Order</button>
        </div>
    </>
  )
}
const Cart = () => {
  const cart_data=useSelector(store=>store.cart.items)

  const dispatch=useDispatch()
  return (
   <>
        <div className='w-9/12 mx-auto my-5 flex flex-wrap'>
            {cart_data.map((item,index)=><Cartcard data={item} key={index} />
            )}
          </div>
      <div className='flex justify-center'>
          {cart_data.length?
          <button className="rounded-lg font-medium outline outline-red-500 p-2 m-5 hover:bg-red-400"
          onClick={()=>dispatch(clearCart())}>Clear cart</button>
        :
        <div className='m-3'>
           <img src={Cart_Empty_Img} className='w-56 h-60  mt-2 mx-5'/>
                  <p className='mt-5 text-xl font-serif text-red-500'>Cart is empty Go back to <Link to='/home'><span className='font-bold text-black'>Home</span></Link></p>
                 
        </div>
        }
        </div>
   </>
  )
}

export default Cart