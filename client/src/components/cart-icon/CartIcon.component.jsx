import React from 'react';
import {toggleCardHidden} from "../../Redux/cart/cart.action";
import {connect} from "react-redux";
import {selectCartItemsCount} from '../../Redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import {CartIconContainer, ItemCountContainer, ShoppingIconContainer} from "./CartIcon.styles";

const CartIcon = ({toggleCardHidden, quantity}) => {
    return (
        <CartIconContainer  onClick={toggleCardHidden}>

            <ShoppingIconContainer />
            <ItemCountContainer >
                {quantity}
            </ItemCountContainer>
        </CartIconContainer>
    )
}
const mapDispatchToProps = (dispatch) => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
})

const mapStateToProps = createStructuredSelector({
    quantity: selectCartItemsCount
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);