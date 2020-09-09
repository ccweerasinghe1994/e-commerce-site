import {combineReducers} from "redux";
import userReducer from "./User/User-reducer";
import cartReducer from "./cart/Cart.reducer";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import directoryReducer from "./directory/Directory.reducer";

const persisitConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
})

export default persistReducer(persisitConfig, rootReducer)