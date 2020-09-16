import {createSelector} from 'reselect';


const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)

export const selectCollection = (collectionUrlParameter) => createSelector(
    [selectShopCollections],
    (collectionItems) => collectionItems ? collectionItems[collectionUrlParameter] : null
)

export const selectCollectionPreview = createSelector(
    [selectShopCollections],
    collection => collection ? Object.keys(collection).map(key => collection[key]) : []
)

export const selectCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectCollectionsLoaded = createSelector(
    [selectShop],
    shop=>!!shop.collections
)