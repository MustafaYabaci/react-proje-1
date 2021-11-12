import React, { Component } from 'react'
import {Table} from "reactstrap"
import { Button } from 'reactstrap'
export default class CartList extends Component {
    render() {
        return (
            <div>
               <Table striped>
                <thead>
                    <tr>
                <th>#</th>
                <th>Category Name</th>
                <th>product name</th>
                <th>unit price</th>
                <th>units in stock</th>
                <th>Quantity</th>
                <th>

                </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map(cartItem=>(
                       <tr key={cartItem.product.id}>
                           <td>{cartItem.product.id}</td>
                           <td>{cartItem.product.categoryid}</td>
                           <td>{cartItem.product.productName}</td>
                           <td>{cartItem.product.unitPrice}</td>
                           <td>{cartItem.product.unitsInStock}</td>
                           <td>{cartItem.quantity}</td>
                           <td>
                               <Button color="danger" 
                               onClick={()=>this.props.removeFromCart(cartItem.product)} >Remove</Button>
                           </td>
                         </tr>  
                        ))
                    }
                </tbody>


               </Table>
            </div>
        )
    }
}
