import {shopActionTypes} from "./Shop.types";
import {convertCollectionSnapShotToMap, firestore} from "../../firebase/FireBase.util";


export const fetchCollectionStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionSuccess = (collectionsMap) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})
export const fetchCollectionError = error => ({
    type: shopActionTypes.FETCH_COLLECTIONS_ERROR,
    payload: error
})
export const fetchCollectionStartAsync = () => {
    return (dispatch) => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart())
        collectionRef.get().then(async snapShot => {
            const collections = convertCollectionSnapShotToMap(snapShot);
            dispatch(fetchCollectionSuccess(collections))

        }).catch(error => dispatch(fetchCollectionError(error.message)))
    }


}
