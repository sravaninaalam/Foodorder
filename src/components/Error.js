import { useRouteError } from "react-router-dom"
const Error=()=>{
    const err=useRouteError()
    
    return(
        <div className="w-96 p-6 mx-auto my-24 shadow-lg">
             <h1 className="font-bold text-xl">Oops! Sorry, an unexpected error has occurred.😵..!!</h1>
           <h1 className="font-bold text-red-500 p-3 text-lg">{err.status}:{err.statusText} !</h1>
        </div>
    )
}

export default Error