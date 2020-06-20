import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer.js';

const middlewares = [];

console.log(process.env);
if(process.env.NODE_ENV==='development'){
    middlewares.push(logger);
}

//export not needed in below statements
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default { store, persistor};