import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './RandomSelect.css';

const RandomSelect = (props) => {
    // console.log(props.data?.name);
    console.log('abc');
    return (
        <div className='random-item'>
            <div className='Show-item' id='select-random'>
                <img src={props.data?.img} alt="" />
                <p>{props.data?.name}</p>
                <button><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                <br /><br />
            </div>
        </div>
    );
};

export default RandomSelect;