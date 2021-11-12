import React, { Component } from 'react'
import { Button,Form,FormGroup ,Label,Input} from 'reactstrap'
import alertify from 'alertifyjs';
export default class FormDemo2 extends Component {
    state={email:"",password:"",city:"",description:""}
    handleChange=(event)=>{
        let name=event.target.name
        let  value=event.target.value
        this.setState({[name]:value})
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        alertify.success(this.state.email+ "  added to  email" )

    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                <FormGroup>

                    <Label for="email">Email</Label>
                    <input  type="email" name="email"  
                    placeholder="enter email"
                    onChange={this.handleChange}></input>

                 </FormGroup>


                   <FormGroup>

                    <Label for="passwword">password</Label>
                    <input  type="password" name="password"  
                    placeholder="enter password"
                    onChange={this.handleChange}></input>

                    </FormGroup>
                         <FormGroup>

                        <Label for="description">password</Label>
                        <input  type="textarea" name="description"  
                        placeholder="enter ddescription"
                        onChange={this.handleChange}></input>

                        </FormGroup>
                        <FormGroup>
                          <Label for="city">city</Label>
                          <Input type="select" name="city" 
                          
                          onChange={this.handleChange}>
                           <option>Ankara</option>  
                           <option>istanbul</option>  
                           <option>izmir</option>  
                           <option>adana</option>  
                           <option>diyarbakır</option>  
                           
                              </Input>

                        </FormGroup>
                   <Button type="submit">save</Button>
                </Form>
            </div>
        )
    }
}
