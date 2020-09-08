import React from "react";
import './checkoutItem.styles.scss'

const CheckoutItem = ({item:{imageUrl,name,price,quantity}}) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
            <div className="name">{name}</div>
            <div className="quantity">{quantity}</div>
            <div className="price">${price}</div>
            <div className='remove-button'>&#9932;</div>
        </div>
    )
}

export default CheckoutItem;