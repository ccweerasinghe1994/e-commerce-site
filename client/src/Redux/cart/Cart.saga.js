import {all,put,takeLatest,call} from 'redux-saga/effects'
import {clearCart} from "./cart.action";
import UserTypes from "../User/User.types";

function* clearCartData(){
    yield put(clearCart())
}

function* clearCartOnSignOutSuccess(){
    yield takeLatest(UserTypes.SIGN_OUT_USER_SUCCESS,clearCartData)
}

export function* cartSagas(){
    yield all([
        call(clearCartOnSignOutSuccess)
    ])
}