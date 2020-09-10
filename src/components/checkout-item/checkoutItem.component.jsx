import React from "react";

import {connect} from 'react-redux';
import {removeItemFromCart, addItem, removeItem} from "../../Redux/cart/cart.action";
import {
    CheckOutItemArrowContainer,
    CheckOutItemContainer,
    CheckOutItemImageContainer,
    CheckOutItemNameContainer, CheckOutItemPriceContainer,
    CheckOutItemQuantityContainer, CheckOutItemRemoveButtonContainer, CheckOutItemValueContainer
} from "./CheckOutItem.styles";

const CheckoutItem = ({item, removeCartItem, removeItem, addItem}) => {
    const {imageUrl, name, price, quantity} = item
    return (
        <CheckOutItemContainer className="checkout-item">
            <CheckOutItemImageContainer className="image-container">
                <img src={imageUrl} alt=""/>
            </CheckOutItemImageContainer>
            <CheckOutItemNameContainer className="name">{name}</CheckOutItemNameContainer>
            <CheckOutItemQuantityContainer className="quantity">

                <CheckOutItemArrowContainer onClick={() => removeItem(item)} className='arrow'>&#10094;</CheckOutItemArrowContainer>
                <CheckOutItemValueContainer className="value">{quantity}</CheckOutItemValueContainer>
                <CheckOutItemArrowContainer onClick={() => addItem(item)} className='arrow'>&#10095;</CheckOutItemArrowContainer>
            </CheckOutItemQuantityContainer>
            <CheckOutItemPriceContainer className="price">${price}</CheckOutItemPriceContainer>
            <CheckOutItemRemoveButtonContainer className='remove-button' onClick={() => removeCartItem(item)}>&#9932;</CheckOutItemRemoveButtonContainer>
        </CheckOutItemContainer>
    )
}
const mapDispatchToProps = dispatch => ({
    removeCartItem: (item) => dispatch(removeItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);