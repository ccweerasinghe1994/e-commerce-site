import {cartActionTypes} from './cart.types';
import {addItemToCart, removeCartItem} from './Cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_STATE:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.REMOVE_CARD_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case cartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeCartItem(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default CartReducer;