import React from 'react'
import { CDN_URL } from '../utils/constants'

const Menuitems = ({items}) => {
    // console.log(items)
  return (
    <>
        <div>
            {items.map(item=><div key={item?.card?.info?.id}>
                <div className='flex justify-between'>
                    <h2>{item?.card?.info?.name}</h2>
                    <img src={CDN_URL+item.card.info.imageId} 
                    className='w-16 p-2 m-2'/>
               </div>
            </div>)}
        </div>
    </>
  )
}

export default Menuitems
