import { Link, useRouteError } from "react-router-dom"
const Error=()=>{
    const err=useRouteError()
    
    return(
      
        <div className="text-center p-6 mx-auto my-24 shadow-lg">
             <h1 className="font-bold text-xl">Oops! Sorry, an unexpected error has occurred.😵..!!</h1>
         {err.status ?
         <h1 className="font-bold text-red-500 p-3 text-lg">{err.status}:{err.statusText} !</h1>
        :
        <h1 className='font-bold italic text-red-600 text-xl p-3'> Location is not available!!!😔</h1>
        }
       <Link to='/'><button className="p-2 mt-5 mx-2 rounded-lg  outline outline-black">
            <span className="font-medium">Back to Home</span></button>
            </Link>
   </div>
    )
}

export default Error