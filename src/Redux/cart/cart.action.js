import {cartActionTypes} from "./cart.types";

export const toggleCardHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_STATE
})

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item=>({
    type:cartActionTypes.REMOVE_CART_ITEM,
    payload: item
})

export const removeItemFromCart = item => ({
    type: cartActionTypes.REMOVE_CARD_ITEM_FROM_CART,
    payload: item
})
