import React from "react"
class Userclass extends React.Component{
   constructor(props){
     super(props)
   }
 
    render(){
        const {name,location,mail}=this.props
       
        return(
            <div className="my-5 bg-blue-200">
            <h2 className='text-black font-medium mx-1 p-1'>Name:<span className='text-gray-600 ml-1'>{name}</span></h2>
            <h3 className='text-black font-medium mx-1 p-1'>Location: <span className='text-gray-600 ml-1'>{location}</span></h3>
            <h3 className='text-black font-medium mx-1 p-1'>Mail: <span className='text-gray-600 ml-1'>{mail}</span></h3>
        </div>
        )
    }

}
export default Userclass