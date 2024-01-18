import React, { useEffect, useState } from 'react'
import { CDN_URL, MENU_API_CORS } from '../utils/constants'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'

const Hotelmenu = () => {
    const{resId}=useParams()

    const[resInfo,setResInfo]=useState([])
    useEffect(()=>{
        getMenuData()
    },[])
    const getMenuData=async()=>{
            const data=await fetch(MENU_API_CORS+resId)
            const json=await data.json()
         
            setResInfo(json?.data)
    }
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
