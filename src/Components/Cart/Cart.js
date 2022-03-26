import React from 'react';
import './Cart.css';
import ShowCart from '../ShowCart/ShowCart';
import RandomSelect from '../RandomSelect/RandomSelect';

const Cart = (props) => {
    // console.log(props);
    let { cart, data } = props;
    if (cart.length > 0) {
        document.getElementById('cart-section').style.display = 'block';
    }
    let randomObj;
    const ChooseOne = (props) => {
        // console.log(props.length);
        let random;
        random = Math.floor(Math.random() * 4);
        // eslint-disable-next-line no-unused-expressions
        randomObj = props[random];
        // console.log(randomObj);
        if (props.length === 4) {
            document.getElementById('select-random').style.display = 'block';
            <RandomSelect data={randomObj}></RandomSelect>
        }
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
            <button className='btn-1' onClick={() => ChooseOne(cart)}><p>Choose 1 For Me</p></button><br />
            <div>
                {
                    <RandomSelect></RandomSelect>
                }
            </div>
            <button className='btn-2' onClick={data}><p>Choose Again</p></button>
        </div>
    );
};

export default Cart;