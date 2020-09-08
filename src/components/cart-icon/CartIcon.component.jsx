import React from 'react';
import './CartIcon.styles.scss';
import {ReactComponent as ShoppingBagIcon} from '../../assets/shoopingBag.svg';
import {toggleCardHidden} from "../../Redux/cart/cart.action";
import {connect} from "react-redux";
import {selectCartItemsCount} from '../../Redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'

const CartIcon = ({toggleCardHidden, quantity}) => {
    return (
        <div className='cart-icon' onClick={toggleCardHidden}>

            <ShoppingBagIcon className='shopping-icon'/>
            <span className='item-count'>
                {quantity}
            </span>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
})

const mapStateToProps = createStructuredSelector({
    quantity: selectCartItemsCount
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);