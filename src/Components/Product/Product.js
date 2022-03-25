import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props);
    const { name, price, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='name'>Name :{name}</p>
                <p>Price : ${price}</p>
            </div>
            <button className='cart-btn'>
                <p>Add To Cart</p>
            </button>

        </div>
    );
};

export default Product;