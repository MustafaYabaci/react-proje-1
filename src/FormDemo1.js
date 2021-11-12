import React, { Component } from 'react'

export default class FormDemo extends Component {
   state={userName:"",City:""}
   onChangeHandler=(event)=>{
       //this.setState({userName:event.target.value})
       let name= event.target.name
       let value= event.target.value

       this.setState({[name]:value})
   }
onSubmitHandler=(event)=>{
    event.preventDefault();
    alert(this.state.userName);
}

    render() {
        return (
            <div>
            <form onSubmit={this.onSubmitHandler}>
                
            <h3>UsserName</h3> 

             
             <input name="userName" onChange={this.onChangeHandler} type="text">
                
             </input>
             <h3>userName {this.state.userName}</h3> 



             <h3>City</h3> 
             
             <input name="City" onChange={this.onChangeHandler} type="text">
                
             </input>
             <h3>City {this.state.City}</h3> 
             <input type="submit" value="Save"></input>
            </form>   

            </div>
        )
    }
}
