import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './ShowCart.css';

const ShowCart = (props) => {
    // console.log(props)
    // const { product } = props;
    const { img, name } = props.product;
    return (
        <div className='Show-item'>
            <img src={img} alt="" />
            <p>{name}</p>
            <button><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
            <br /><br />
        </div>
    );
};

export default ShowCart;