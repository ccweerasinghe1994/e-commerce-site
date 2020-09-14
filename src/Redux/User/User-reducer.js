import userTypes from './User.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case userTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case userTypes.SIGN_OUT_USER_SUCCESS:
            return {
                ...state,
                currentUser: null
            }
        case userTypes.SIGN_IN_FAILURE:
        case userTypes.SIGN_OUT_USER_FAILURE:

            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;