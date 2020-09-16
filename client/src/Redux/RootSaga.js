import {call, all} from 'redux-saga/effects';
import {shopSagas} from './shop/Shop.saga';
import {userSaga} from "./User/user.sagas";
import {cartSagas} from "./cart/Cart.saga";


export default function* rootSaga() {
    yield all([
        call(shopSagas),
        call(userSaga),
        call(cartSagas),
    ])
}