import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { latandlang } from "./constants";
import { json } from "react-router-dom";
import Unknown from "../components/Unknown";

export function searchedRestau(ip,data){
  // console.log(ip)
    return(data.filter(i=>i?.info?.name.toLowerCase().includes(ip.toLowerCase())))
} 


export function Slidearrows(props){
  const{className,style,onClick}=props
  return(
        <div className={className}
        style={{ ...style, display: "block", background: "green" }}
  onClick={onClick}></div>
  )
}

export const settings = {
  slidesToShow: 5,
  slidesToScroll:5,
  infinite: true,
  dots:false,
  speed: 1300,
  nextArrow:<Slidearrows/>,
  prevArrow:<Slidearrows/>
};


export function getRestaurantsWith(item,data){
  return(
        data.filter(i=>i?.info?.cuisines.toLowerCase().includes(item.toLowerCase()))
  )
}



export const locationData=()=>{
  
  const loc_data= useSelector(store=>store.location.loc)
  const[jsondata,setJsonData]=useState()
  
  let ap=latandlang.filter(i=>i.Location.toLowerCase()===loc_data.toLowerCase())
  if(ap.length==0){
    return <Unknown/>
  }
  const{lat,lng}=ap[0]
   useEffect(()=>{
       getLoc()
   },[loc_data])
   async function getLoc(){
    const HTL_API=`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true`
    const HTL_API_CORS=`https://api.allorigins.win/raw?url=${encodeURIComponent(HTL_API)}`
    const data=await fetch(HTL_API_CORS)
    const json=await data.json()
     setJsonData(json)
   }
   
   return{jsondata}
}


