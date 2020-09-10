import React from "react";
import CustomButton from "../custom-button/CustomButton.component";

import CartItem from "../cart-item/CartItem.component";
import {connect} from "react-redux";
import {selectCartItems} from "../../Redux/cart/cart.selectors";
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import {toggleCardHidden} from '../../Redux/cart/cart.action'
import {
    CartDropdownContainer,
    CartDropdownEmptyMessageContainer,
    CartDropdownItemsContainer
} from "./CartDropdown.styles";

const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartDropdownContainer >
        {
            cartItems.length ?
                <CartDropdownItemsContainer >
                    {cartItems.map(cartItem => <CartItem item={cartItem} key={cartItem.id}/>)}
                </CartDropdownItemsContainer> : <CartDropdownEmptyMessageContainer >
                    Your Cart Items is Empty
                </CartDropdownEmptyMessageContainer>
        }

        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCardHidden());
        }}>GO TO CHECKOUT</CustomButton>


    </CartDropdownContainer>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));