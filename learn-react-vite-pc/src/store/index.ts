import {createStore,applyMiddleware,combineReducers} from "redux"
import {persistReducer,persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"

import userReducer from "@/reducReducer/userReducer";

const persistConfig={
    key:"root",
    storage,
    blacklist:[''],
}

const all=combineReducers({
    userinfo:userReducer,
})

const myPersistReducer=persistReducer(persistConfig,all);

const store=createStore(myPersistReducer,composeWithDevTools(applyMiddleware(thunk)));

const persist=persistStore(store);

export {store,persist};

