import {takeLatest, call, put} from 'redux-saga/effects'
import {shopActionTypes} from "./Shop.types";
import {convertCollectionSnapShotToMap, firestore} from "../../firebase/FireBase.util";
import {fetchCollectionError, fetchCollectionSuccess} from "./shop.actions";


function* fetchCollectionStartAsync() {
    const collectionRef = firestore.collection('collections');
    try {
        const snapShot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionSnapShotToMap, snapShot)
        yield put(fetchCollectionSuccess(collectionMap))
    } catch (error) {
        yield put(fetchCollectionError(error.message))
    }
}

export function* fetchCollectionStart() {

    yield(takeLatest(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionStartAsync))

}