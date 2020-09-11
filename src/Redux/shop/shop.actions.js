import {shopActionTypes} from "./Shop.types";


export const updateCollections = (collections) => ({
    type: shopActionTypes.UPDATE_SHOP_DATA,
    payload: collections
})