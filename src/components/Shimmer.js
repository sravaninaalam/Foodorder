const Shimmer=()=>{
    const arr=Array(15).fill("")
    return(
        <div className="flex flex-wrap">
            {arr.map((ar,index)=><div key={index} className="w-72 h-52 bg-gray-300 rounded-md m-4"></div>)}
        </div>
    )
}

export default Shimmer