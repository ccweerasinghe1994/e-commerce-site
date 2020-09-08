import React from "react";
import CustomButton from "../custom-button/CustomButton.component";
import './CartDropdown.styles.scss'
import CartItem from "../cart-item/CartItem.component";
import {connect} from "react-redux";
import {selectCartItems} from "../../Redux/cart/cart.selectors";
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import {toggleCardHidden} from '../../Redux/cart/cart.action'

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        {
            cartItems.length ?
                <div className='cart-items'>
                    {cartItems.map(cartItem => <CartItem item={cartItem} key={cartItem.id}/>)}
                </div> : <div className='empty-message'>
                    Your Cart Items is Empty
                </div>
        }

        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCardHidden());
        }}>GO TO CHECKOUT</CustomButton>


    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));