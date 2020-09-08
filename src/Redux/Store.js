import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist'
import rootReducer from './Root-reducer';

const middleWare = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleWare));
export const persistor = persistStore(store)



