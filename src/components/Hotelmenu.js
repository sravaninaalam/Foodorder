import React from 'react'
import { CDN_URL } from '../utils/constants'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useMenu from '../utils/customhooks'

const Hotelmenu = () => {
    const{resId}=useParams()
    resInfo =useMenu(resId)
    
    if(resInfo.length<1){
        return <Shimmer/>
    }
    const{name,avgRating,city,cloudinaryImageId,costForTwoMessage,cuisines}=
                  resInfo?.cards[0]?.card.card.info
   const category=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
   .filter(c=>c.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
   console.log(category)
  return (
    <>
        <div className=' my-3 p-5 text-center '>
            <div className='flex justify-center mb-6'>
            <img src={CDN_URL+cloudinaryImageId} className='w-32'/>
                <div className='ml-7'>
                    <h2 className='font-bold text-xl'>{name}</h2>
                    <h3 className=''>{cuisines.join(",")}</h3>
                    <h3>{costForTwoMessage}</h3>
                </div>
            </div>
            
             {category.map(item=><h3>{item?.card?.card?.title}</h3>)}
        </div>
    </>
  )
}

export default Hotelmenu
