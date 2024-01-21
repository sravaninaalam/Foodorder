import { useEffect, useState } from "react"
import { HTL_API_CORS, MENU_API_CORS } from "./constants"

const useMenu=(resId)=>{
  const[resInfo,setResInfo]=useState([])
useEffect(()=>{
    getMenuData()
},[])
  async function getMenuData(){
    const data=await fetch(MENU_API_CORS+resId)
            const json=await data.json()
            setResInfo(json?.data)
  }
    return resInfo
}
export default useMenu

// only have one state variable and items variable return those variables.when we receiving we do like
// setdata(var)
export const useHotelData=()=>{
    const[data,setData]=useState([])
   
    const[item,setItem]=useState([])
    
    useEffect(()=>{
        getData()
    },[])
    const getData=async()=>{
        const data=await fetch(HTL_API_CORS)
        const json_data=await data.json()
        setData(json_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      
        setItem(json_data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
   
    }
    return(
        [data,item]
      
        )
}


export const useOnline=()=>{
    const[onlineStatus,setOnlineStatus]=useState(true)
    const handleStatusOnline=()=>setOnlineStatus(true)
    const handleStatusOffline=()=>setOnlineStatus(false)
    useEffect(()=>{
     window.addEventListener("online",handleStatusOnline)
     window.addEventListener("offline",handleStatusOffline)
return(()=>{
    window.removeEventListener("online",handleStatusOnline)
    window.removeEventListener("offline",handleStatusOffline)
  })
},[])
    return onlineStatus
}


