import React,{useEffect,useState} from 'react'
import Rescard from './Rescard'
import {  locationData, searchedRestau, settings } from '../../utils/helper'
import Displayfood from './Displayfood'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Shimmer from '../Shimmer'
import { Link } from 'react-router-dom'
import {useOnline } from '../../utils/customhooks'
import { useSelector } from 'react-redux'

const Body = () => {

  const[hotelData,setHotelData]=useState([])
  const[replica,setReplica]=useState([])
  const[items,setItems]=useState([])
  const[searchip,setSearchIp]=useState('')
  const loc_data= useSelector(store=>store.location.loc)
  const data=locationData()
  useEffect(()=>{
    setHotelData(data?.jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setReplica(data?.jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setItems(data?.jsondata?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
  })
  // useEffect(()=>{
  //    gettingHotelData()
  // },[])
  
  // const gettingHotelData=async()=>{
  //   const data=await fetch(HTL_API_CORS)
  //   const json_data=await data.json()
  //   setHotelData(json_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //   setReplica(json_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //   setItems(json_data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
  
  // }
  const isonline=useOnline()
  if(!isonline){return<h1 className='m-5 font-bold text-center text-xl'>You are offline 🔴</h1>}

  return !replica?<Shimmer/>:  (
   <>
       <div>
        <form onSubmit={(e)=>e.preventDefault()}>
            <input className='border border-black w-1/3 ml-[10%] my-4 rounded-l-full p-2' type='text'
             placeholder='Search restaurants here...' value={searchip} onChange={(e)=>setSearchIp(e.target.value)} />
            <button className='bg-indigo-200 py-2 px-5 border border-black rounded-r-full'
            onClick={()=>{const res=searchedRestau(searchip,replica)
                setHotelData(res)
            }}>🔍</button>
            <button className='bg-pink-400 my-4 p-2 rounded-md float-end mr-[10%] shadow-md'
            onClick={()=>{const res=replica.filter(i=>i?.info?.avgRating>4)
              setHotelData(res)
            }}>Toprated⭐</button>
        </form>
      </div>
      <h1 className='p-3 m-3 font-bold italic text-2xl'>What's on your mind🤔</h1>
       <div className='w-10/12 px-5 mx-auto shadow-sm bg-slate-50'>
            <Slider {...settings} >
                      {items.map((item)=><Displayfood key={item?.id} itemlist={item}/>)}
            </Slider>
        </div>
      
    {hotelData.length>=1?
        <h1 className='p-3 m-3 font-bold text-2xl '>Restaurants with online food delivery {loc_data}</h1>:
        <h1 className='p-10 mx-[25%] my-2 text-red-500 text-2xl'>Sorry,No restaurants found 😔</h1>
    }
        <div className='w-11/12 ml-[7%]  mr-[7%] flex flex-wrap '>
          {hotelData.map((hotel)=>
          <Link to={'/restaurants/'+hotel?.info?.id} key={hotel?.info?.id}><Rescard  htlinfo={hotel?.info}/></Link>
          )}
        </div>
   </>
  )
}

export default Body
