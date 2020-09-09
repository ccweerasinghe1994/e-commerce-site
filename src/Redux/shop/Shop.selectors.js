import {createSelector} from 'reselect';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneaker: 2,
    jackets: 3,
    mens: 4,
    womens: 5

}

const selelctShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selelctShop],
    (shop) => shop.collections
)

export const selectCollection = (collectionUrlParameter) => createSelector(
    [selectShopCollections],
    (collectionItems) => collectionItems.find(item => item.id === COLLECTION_ID_MAP[collectionUrlParameter])
)