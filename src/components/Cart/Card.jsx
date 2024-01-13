import React from 'react';
import './Card.css';

const Card = (props) => {

    const {cart} = props;

    let totalPrice = 0;
    let totalShipping = 0;
    let tex = 0;
    for(const sum of cart){
        totalPrice = totalPrice + sum.price;
        totalShipping = totalShipping + sum.shipping;
        tex = 7*totalPrice/100;
    }

    const grandTotal=  totalPrice + totalShipping + tex + totalShipping;

    return (
        <div>
            <div className="CartCalculation">
                <h5>Order Summary</h5>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${totalPrice.toFixed(2)} </p>
                <p>Total Shipping Charge: ${totalShipping.toFixed(2)} </p>
                <p>Tax:${tex.toFixed(2)}</p>
                <h6>Grand Total:{grandTotal.toFixed(2)}</h6>
            </div>           
        </div>
    );
};

export default Card;