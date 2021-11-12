import React, { Component } from 'react'
import {
   
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavItem,
    NavLink
} from "reactstrap";
import { Link } from 'react-router-dom';
export default class Cartsummary extends Component {
   renderSummary(){
       return(
<UncontrolledDropdown nav inNavbar>
 <DropdownToggle nav caret>your cart</DropdownToggle>
   <DropdownMenu right>
       {
          this.props.cart.map(cartItem=>(
         <DropdownItem key={cartItem.product.id}>
           <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>X</Badge>
         {cartItem.product.productName}
         <Badge color="success">{cartItem.quantity}</Badge>
         </DropdownItem> 
          ))

       }
      
         
         <DropdownItem>
           <Link to="cart"> GO TO CART</Link>
         </DropdownItem>
 </DropdownMenu>
 </UncontrolledDropdown> )    

}
renderEmptyCart=()=>{
  
  return(
  
    <NavItem>
   <NavLink> emptycart</NavLink>
   
   
   </NavItem>
   )
}
   
    render() {
       return (
            <div>
            { this.props.cart.length>0?this.renderSummary():this.renderEmptyCart()}
            </div>
        )
    }
}
