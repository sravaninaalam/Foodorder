import React from 'react'
import { CDN_URL, Green_Rating_Img, Yellow_Rating_Img } from '../../utils/constants'

const Rescard = ({htlinfo}) => {
  const {name,cloudinaryImageId,cuisines,avgRating, costForTwo}=htlinfo
  return (
   <>
      <div className='bg-gray-100 p-2 m-2 w-64 outline outline-blue-200 hover:bg-blue-300 hover:shadow-2xl'>
        <img src={CDN_URL+cloudinaryImageId} className='p-1 rounded-xl'/>
          <h3 className='font-bold mt-1'> {name}</h3>
          <h4 className="truncate">{cuisines.join(',')}</h4>
          <div className='flex my-1 p-1'>
                    {avgRating>4?<h4 className="w-5 h-5  flex">
                    <img src={Green_Rating_Img} className="rounded-lg"/>{avgRating}
                    </h4>:<h4 className="w-6 h-6  flex">
                        <img className="rounded-lg" src={Yellow_Rating_Img}/>
                        {avgRating}</h4>}
                    <h4 className="ml-28">{costForTwo}</h4>
                </div>
      </div>
   </>
  )
}

export default Rescard