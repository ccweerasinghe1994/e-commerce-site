import {createSelector} from 'reselect';


const selelctShop = state=>state.shop;

export const selectShopCollections = createSelector(
    [selelctShop],
    (shop)=>shop.collections
)