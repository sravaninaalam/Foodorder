import React from 'react'
import Menuitems from './Menuitems'

function Restaurantcategory({menudata,showItems,setShowItems}) {

  return (
   <>
        <div className='w-6/12 mx-auto shadow-xl bg-slate-50 p-4 my-5 cursor-pointer'>
            <div className='flex justify-between' onClick={()=>setShowItems()} >
               <span className='font-bold'>{menudata.title}({menudata?.itemCards.length})</span>
               <span>🔽</span>
               </div>
            {showItems &&
               <Menuitems items={menudata?.itemCards}/>}
        </div>
   </>
  )
}

export default Restaurantcategory
