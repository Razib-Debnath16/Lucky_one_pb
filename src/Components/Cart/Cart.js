import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props);
    const { cart } = props;
    if (cart.length > 0) {
        document.getElementById('cart-section').style.display = 'flex';
    }

    return (
        <div>
            <h1>Select Shoes</h1>
            <div className='cart-info' id='cart-section'>
                <img src={cart[0]?.img} alt="" />
                <p>{cart[0]?.name}</p>
                <button><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
            </div>
            <button className='btn-1'><p>Choose 1 For Me</p></button><br />
            <button className='btn-2'><p>Choose Again</p></button>
        </div>
    );
};

export default Cart;