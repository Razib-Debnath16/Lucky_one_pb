import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { product, cart } = props;
    const { name, price, img } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='name'>Name :{name}</p>
                <p>Price : ${price}</p>
            </div>
            <button className='cart-btn' onClick={cart}>
                <p className='cart-btn-txt'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;