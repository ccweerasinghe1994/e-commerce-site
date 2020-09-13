import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleWare from'redux-saga';
import {persistStore} from 'redux-persist'
import rootReducer from './Root-reducer';
import {fetchCollectionStart} from "./shop/Shop.saga";

const sagaMiddleWare = createSagaMiddleWare();
const middleWare = [sagaMiddleWare];
if (process.env.NODE_ENV === 'development') {
    middleWare.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleWare));
 sagaMiddleWare.run(fetchCollectionStart);
export const persistor = persistStore(store)



