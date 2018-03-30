import React, {Component} from 'react';
import axios from "axios";
class Product extends Component{
    constructor(props){
        super();
        this.state = {
            product_name: props.product_name,
            price: props.price,
            image_url: props.image_url
        }
    }
    


    render(){
        return (
            <div>Product</div>
        )
    }
}

export default Product;
