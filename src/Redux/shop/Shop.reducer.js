// import {SHOP_DATA} from './ShopData'
import {shopActionTypes} from "./Shop.types";

const INITIAL_STATE = {
    collections: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionTypes.UPDATE_SHOP_DATA:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state
    }
}


export default shopReducer;