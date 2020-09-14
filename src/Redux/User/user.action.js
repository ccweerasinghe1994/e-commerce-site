import userTypes from './User.types';

export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
})

export const googleSignInStart = () => ({
    type: userTypes.GOOGLE_SIGN_IN_START
})

export const SignInSuccess = user => ({
    type: userTypes.SIGN_IN_SUCCESS,
    payload: user
})
export const SignInError = error => ({
    type: userTypes.SIGN_IN_FAILURE,
    payload: error
})

export const checkUserSession = () => ({
    type: userTypes.CHECK_USER_SESSION
})

export const signOutStart = ()=>({
    type:userTypes.SIGN_OUT_USER_START
})
export const signOutSuccess = ()=>({
    type:userTypes.SIGN_OUT_USER_SUCCESS
})
export const signOutFailure = (error)=>({
    type:userTypes.SIGN_OUT_USER_FAILURE,
    payload:error
})

export const emailPasswordGoogleSignInStart = (emailPassword) => ({
    type: userTypes.EMAIL_PASSWORD_SIGN_IN_START,
    payload: emailPassword
})


