import {call, all, takeLatest, put} from 'redux-saga/effects';
import {auth, GoogleProvider, createUserProfileDocument, getCurrentUser} from "../../firebase/FireBase.util";
import UserTypes from "./User.types";
import {

    SignInError,
    SignInSuccess, signOutFailure, signOutSuccess
} from "./user.action";

function* getSnapShot(user) {
    try {
        const userRef = yield call(createUserProfileDocument, user);
        const snapShot = yield userRef.get();
        yield put(SignInSuccess({id: snapShot.id, ...snapShot.data()}))

    } catch (error) {
        yield put(SignInError(error.message))
    }
}

function* signInWithGoogle() {


    try {
        const {user} = yield  auth.signInWithPopup(GoogleProvider);
        yield getSnapShot(user)
    } catch (error) {
        yield put(SignInError(error.message))
    }
}

function* onGoogleSignInStart() {

    yield takeLatest(UserTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)

}

function* signInWithEmailAndPassWord({payload: {email, password}}) {

    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapShot(user)
    } catch (error) {
        yield put(SignInError(error.message))
    }
}


function* onSignInWithEmailAndPassword() {
    yield takeLatest(UserTypes.EMAIL_PASSWORD_SIGN_IN_START, signInWithEmailAndPassWord)
}

function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapShot(userAuth);


    } catch (error) {
        yield put(SignInError(error))
    }
}

function* onCheckUserSession() {
    yield takeLatest(UserTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

function* onSignOut() {
    yield takeLatest(UserTypes.SIGN_OUT_USER_START, signOut)
}


export function* userSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onSignInWithEmailAndPassword),
        call(onCheckUserSession),
        call(onSignOut),

    ])
}