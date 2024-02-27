import React, { useState } from 'react'
import { CDN_URL } from '../utils/constants'
import {useDispatch} from 'react-redux'
import { addItem } from '../redux/cartSlice'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Menuitems = ({items}) => {
  const[addedToCart,setAddedToCart]=useState([])
  const dispatch=useDispatch()
  const handleAddItem=(item)=>{
  
    const{name,id,imageId,price,
      description
      }=item?.card?.info
     setAddedToCart(id)
      if(addedToCart.includes(id)){
        toast.info("already added to cart")
        return
      }
    dispatch(addItem({id:id,name:name,imageId:imageId,price:price,  description:description, quantity:1}))
  }
 
  return (
    <>
  <ToastContainer theme='colored'/>
        <div>
            {items.map(item=>
           <div key={item?.card?.info?.id} className=" border-gray-200 border-b-2 m-2 p-2 flex justify-between">
           <div className="text-left w-9/12">
               <h5 className="font-medium">{item?.card?.info?.name}</h5>
                 <h3>₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</h3>
                 <h6 className="text-sm text-gray-600 my-3">{item?.card?.info?.description}</h6>
           </div>
             <div className="w-3/12">
              <img src={CDN_URL+item.card.info.imageId} alt={item?.card?.info?.name} />
              <button className="text-red-800 p-2 shadow-lg rounded-sm bg-yellow-200"
              onClick={()=>handleAddItem(item)}>ADD+</button>

             </div>
            
         </div>)}
        </div>
    </>
  )
}
export default Menuitems
