import React from "react";
import CustomButton from "../custom-button/CustomButton.component";
import './CartDropdown.styles.scss'
import CartItem from "../cart-item/CartItem.component";
import {connect} from "react-redux";


const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem=><CartItem item={cartItem} key={cartItem.id} />)}
        </div>

        <CustomButton>GO TO CHECKOUT</CustomButton>


    </div>
)
const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})
export default connect(mapStateToProps)(CartDropdown);