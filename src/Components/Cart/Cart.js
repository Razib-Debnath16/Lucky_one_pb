import React from 'react';
import './Cart.css';
import ShowCart from '../ShowCart/ShowCart';

const Cart = (props) => {
    // console.log(props);
    const { cart } = props;
    if (cart.length > 0) {
        document.getElementById('cart-section').style.display = 'block';
    }

    return (
        <div className='Cart'>
            <h1>Select Shoes</h1>
            <div className='cart-info' id='cart-section'>
                {
                    cart.map(product =>
                        <ShowCart key={product.id} product={product}></ShowCart>)
                }
            </div>
            <button className='btn-1'><p>Choose 1 For Me</p></button><br />
            <button className='btn-2'><p>Choose Again</p></button>
        </div>
    );
};

export default Cart;