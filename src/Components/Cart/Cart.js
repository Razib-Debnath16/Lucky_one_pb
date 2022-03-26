import React from 'react';
import './Cart.css'

const Cart = (props) => {
    return (
        <div>
            <h1>Select Shoes</h1>
            <button className='btn-1'><p>Choose 1 For Me</p></button><br />
            <button className='btn-2'><p>Choose Again</p></button>
        </div>
    );
};

export default Cart;