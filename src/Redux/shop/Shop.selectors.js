import {createSelector} from 'reselect';


const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)

export const selectCollection = (collectionUrlParameter) => createSelector(
    [selectShopCollections],
    (collectionItems) => collectionItems[collectionUrlParameter]
)

export const selectCollectionPreview = createSelector(
    [selectShopCollections],
    collection=>Object.keys(collection).map(key=>collection[key])
)