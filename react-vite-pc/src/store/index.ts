import { createStore, applyMiddleware, combineReducers } from "redux"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"

import userReducer from "../reduxReducer/userReducer"

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [''],//写入不缓存的数据，如何userinfo
}

const all = combineReducers({
    userinfo: userReducer
})

const myPersistReducer = persistReducer(persistConfig, all)

const store = createStore(myPersistReducer, applyMiddleware(thunk))

const persistor = persistStore(store)

export { store, persistor }