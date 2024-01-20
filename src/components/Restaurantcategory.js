import React from 'react'
import Menuitems from './Menuitems'

function Restaurantcategory({menudata}) {
//   console.log(menudata.itemCards)
  return (
   <>
        <div className='w-7/12 mx-auto shadow-xl  '>
             <h3 className='font-bold text-start p-1'>{menudata.title}</h3>
            <Menuitems items={menudata?.itemCards}/>
        </div>
   </>
  )
}

export default Restaurantcategory
