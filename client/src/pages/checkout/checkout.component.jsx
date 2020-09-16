
import React from "react";
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux'
import {selectCartItems} from "../../Redux/cart/cart.selectors";
import {selectCarItemTotal} from '../../Redux/cart/cart.selectors'
import CheckoutItem from "../../components/checkout-item/checkoutItem.component";
import StripeButton from "../../components/stripe-button/StripeButton.component";
import {
    CheckoutHeaderBlockContainer,
    CheckoutHeaderContainer,
    CheckoutPageContainer, TestWarningContainer,
    TotalContainer
} from "./CheckoutPage.styles";

const CheckoutPage = ({cartItems, total}) => {
    return (
        <CheckoutPageContainer >
            <CheckoutHeaderContainer >
                <CheckoutHeaderBlockContainer >
                    <span>Product</span>
                </CheckoutHeaderBlockContainer>
                <CheckoutHeaderBlockContainer >
                    <span>Description</span>
                </CheckoutHeaderBlockContainer>
                <CheckoutHeaderBlockContainer >
                    <span>Quantity</span>
                </CheckoutHeaderBlockContainer>
                <CheckoutHeaderBlockContainer >
                    <span>Price</span>
                </CheckoutHeaderBlockContainer>
                <CheckoutHeaderBlockContainer >
                    <span>Remove</span>
                </CheckoutHeaderBlockContainer>
            </CheckoutHeaderContainer>
            {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem}/>)}
            <TotalContainer >TOTAL:${total}</TotalContainer>
            <TestWarningContainer >
                please use the following card number for testing
                <br/>
                4242 4242 4242 4242 EXP-any future date CVC-any three digit number
            </TestWarningContainer>
            <StripeButton price={total}/>
        </CheckoutPageContainer>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCarItemTotal
})
export default connect(mapStateToProps)(CheckoutPage);