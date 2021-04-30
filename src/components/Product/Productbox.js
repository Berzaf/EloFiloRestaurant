import React from 'react';
import './Product.css';

function Productbox(props) {
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} />

            </div>
            <div className='a-b-text'>
                <h2> {props.price} </h2>
                <h2> {props.title} </h2>
                <button className='productbox-button'>Order Now</button>
            </div>

        </div>
    )
}

export default Productbox;