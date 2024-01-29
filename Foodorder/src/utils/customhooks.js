import { useEffect, useState } from "react"
import {  MENU_API_CORS } from "./constants"

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
