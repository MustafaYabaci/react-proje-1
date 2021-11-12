import React, { Component } from 'react'
import { Table,Button } from 'reactstrap'

export default class ProductList extends Component {
    
    render() {
        return (
            <div>
                <h4>{this.props.info.title}-{this.props.currentCategory}</h4>
                <Table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">productName</th>
                        <th scope="col">quantityPerUnit</th>
                        <th scope="col">unitPrice</th>
                        <th scope="col">unitsInStock</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.products.map(product => (                        <tr  key={product.id}>
                        <th scope="row">{product.id}</th>
                        <td>{product.productName}</td>
                        <td>{product.quantityPerUnit}</td>
                        <td>{product.unitPrice}</td>
                        <td>{product.unitsInStock}</td>
                        <td><Button onClick={()=> this.props.addtocart(product)} type="button" class="btn btn-info">Add</Button></td>
                        </tr>
                    
                    ))}

                    </tbody>
                    </Table>
            </div>
        )
    }
}
