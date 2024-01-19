import React from "react"
class Userclass extends React.Component{
   constructor(props){
     super(props)
    this.state={
        count:0
    }
   }
 
    render(){
        const {name}=this.props
        const{count}=this.state
        return(
            <div className="my-5 bg-blue-200">
            <h3>Name:{name}</h3>
            <h4>mail:nalamsravani2016@</h4>
            <h3>{count}-times</h3>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>click</button>
        </div>
        )
    }

}
export default Userclass