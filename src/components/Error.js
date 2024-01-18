import { useRouteError } from "react-router-dom"
const Error=()=>{
    const err=useRouteError()
    
    return(
        <div className="w-32">
             <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
           <h1 className="font-bold text-red-500">{err.status}:{err.statusText}</h1>
        </div>
    )
}

export default Error