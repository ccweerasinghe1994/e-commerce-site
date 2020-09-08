import React from 'react';
import './CartIcon.styles.scss';
import {ReactComponent as ShoppingBagIcon} from '../../assets/shoopingBag.svg';
import {toggleCardHidden} from "../../Redux/cart/cart.action";
import {connect} from "react-redux";


const CartIcon = ({toggleCardHidden}) => {
    return (
        <div className='cart-icon' onClick={toggleCardHidden} >

            <ShoppingBagIcon className='shopping-icon'/>
            <span className='item-count'>
                0
            </span>
        </div>
    )
}
const mapDispatchToProps = (dispatch)=>({
    toggleCardHidden:()=>dispatch(toggleCardHidden())
})
export default connect(null,mapDispatchToProps)(CartIcon);