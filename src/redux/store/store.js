import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "../reducer/reducer";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// export const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// )

const persistConfig = {
    key: 'root',
    storage
  }
  
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export const persistor = persistStore(store)