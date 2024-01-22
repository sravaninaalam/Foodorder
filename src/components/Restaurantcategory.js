import React, { useState } from 'react'
import Menuitems from './Menuitems'

function Restaurantcategory({menudata,show,setShow,hide}) {
   
  return (
   <>
        <div className='w-6/12 mx-auto shadow-xl bg-slate-50 p-4 my-5'>
            <div className='flex justify-between' onClick={()=>setShow()} onDoubleClick={()=>hide()}>
               <span className='font-bold'>{menudata.title}({menudata?.itemCards.length})</span>
               <span>🔽</span>
               </div>
            {show &&
               <Menuitems items={menudata?.itemCards}/>}
        </div>
   </>
  )
}

export default Restaurantcategory
