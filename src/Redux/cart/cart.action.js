import {cartActionTypes} from "./cart.types";

export const toggleCardHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_STATE
})

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})