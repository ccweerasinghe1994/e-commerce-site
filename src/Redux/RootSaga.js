import {call, all} from 'redux-saga/effects';
import {fetchCollectionStart} from './shop/Shop.saga';
import {userSaga} from "./User/user.sagas";


export default function* rootSaga() {
    yield all([
        call(fetchCollectionStart),
        call(userSaga)
    ])
}