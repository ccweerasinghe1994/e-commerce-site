import React from "react";
import './checkoutItem.styles.scss'
import {connect} from 'react-redux'
import {removeItemFromCart, addItem, removeItem} from "../../Redux/cart/cart.action";

const CheckoutItem = ({item, removeCartItem, removeItem, addItem}) => {
    const {imageUrl, name, price, quantity} = item
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
            <div className="name">{name}</div>
            <div className="quantity">

                <div onClick={() => removeItem(item)} className='arrow'>&#10094;</div>
                <div className="value">{quantity}</div>
                <div onClick={() => addItem(item)} className='arrow'>&#10095;</div>
            </div>
            <div className="price">${price}</div>
            <div className='remove-button' onClick={() => removeCartItem(item)}>&#9932;</div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    removeCartItem: (item) => dispatch(removeItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);