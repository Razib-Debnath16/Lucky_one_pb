import React, { useState } from 'react';
import './Cart.css';
import ShowCart from '../ShowCart/ShowCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import RandomSelect from '../RandomSelect/RandomSelect';

const Cart = (props) => {
    // console.log(props);
    let { cart, data } = props;
    let [randomObj, setrandomobj] = useState({});
    if (cart.length > 0) {
        document.getElementById('cart-section').style.display = 'block';
    }
    const ChooseOne = (props) => {
        // console.log(props.length);
        let random;
        random = Math.floor(Math.random() * 4);
        // eslint-disable-next-line no-unused-expressions
        randomObj = props[random];
        console.log(randomObj);
        setrandomobj(randomObj);
        if (props.length === 4) {
            document.getElementById('select-random').style.display = 'flex';

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
            {/* <RandomSelect data={randomObj}></RandomSelect> */}
            <div className='random-item'>
                <div className='Show-item' id='select-random'>
                    <img src={randomObj?.img} alt="" />
                    <p>{randomObj?.name}</p>
                    <button><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                    <br /><br />
                </div>
            </div>
            <button className='btn-2' onClick={data}><p>Choose Again</p></button>
        </div>
    );
};

export default Cart;