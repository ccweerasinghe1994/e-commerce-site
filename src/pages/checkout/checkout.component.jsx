import './checkout.styles.scss'
import React from "react";
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux'
import {selectCartItems} from "../../Redux/cart/cart.selectors";
import {selectCarItemTotal} from '../../Redux/cart/cart.selectors'
import CheckoutItem from "../../components/checkout-item/checkoutItem.component";

const CheckoutPage = ({cartItems, total}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem}/>)}
            <div className='total'>TOTAL:${total}</div>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCarItemTotal
})
export default connect(mapStateToProps)(CheckoutPage);