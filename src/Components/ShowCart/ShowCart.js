import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './ShowCart.css';

const ShowCart = (props) => {
    return (
        <div className='Show-item'>
            <img src={props.product.img} alt="" />
            <p>{props.product.name}</p>
            <button><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
            <br /><br />
        </div>
    );
};

export default ShowCart;