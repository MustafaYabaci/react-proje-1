import './App.css';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Navi from './Navi';
import {Col, Container,Row} from "reactstrap"
import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';
import alertify from 'alertifyjs';
import NotFound from "./NotFound"
import CartList from "./CartList"
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';
export default class App extends Component {
  state= {currentCategory:"",products:[],cart:[]}
  changeCategory=(category)=>{
    this.setState({currentCategory:category.categoryName})
    this.getProducts(category.id)
  }

    
  componentDidMount(){
    this.getProducts()
}
  getProducts=(categoryId)=>{
    let url="http://localhost:3000/products"
    if(categoryId){
      url+="?categoryId="+categoryId
    }
    fetch(url)
    .then(response=>response.json())
    .then(data=> this.setState({products:data}))
}
addtocart=(product)=>{
  let newCart=this.state.cart
  var addedItem=newCart.find(c=>c.product.id===product.id)
  if(addedItem){
    addedItem.quantity+=1
  }else{
    newCart.push({product:product,quantity:1})

  }
  
  this.setState({cart:newCart})
  alertify.success(product.productName+ "  added to  cart" )
}
removeFromCart=(product)=>{
  let newCart=this.state.cart.filter(c=>c.product.id!==product.id )
  this.setState({cart:newCart})
  alertify.error(product.productName+ "  removed from  cart" )
}
  render() {
    let  productinfo={title:"productlist"}
    let categoryinfo={title:"categorrylist"}
    return (
      <div> 
        <Container>
       
        <Navi removeFromCart={this.removeFromCart} 
        cart={this.state.cart}/>

          <Row>
            <Col xs="3">

            <CategoryList currentCategory=
            {this.state.currentCategory} 
            changeCategory={this.changeCategory} 
            info={categoryinfo}/>

            </Col>


          <Col xs="9">
      
            <Switch>
           <Route 
           exact 
           path="/" 
            render={props=>(
               <ProductList
               {...props}
               products={this.state.products}
               addtocart={this.addtocart}
               currentCategory={this.state.currentCategory}
               info={productinfo}
         
          />
          )}
          />
           <Route exact path="/cart"    render={props=>(
               <CartList
               {...props}
              cart={this.state.cart}
              removeFromCart={this.removeFromCart}
             
         
          />
          )}
          />
          <Route path="/form1"  component={FormDemo1}></Route>
          <Route path="/form2"  component={FormDemo2}></Route>
           <Route  component={NotFound}/>
           </Switch>

           
          
        
          </Col>

          
         
          


             </Row>
  
  
  
             </Container>
      </div>
    )
  }
}

