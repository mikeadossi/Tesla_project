import{ createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import {persistStore, persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import rootReducer from "./config/reducers"
import {createLogger} from "redux-logger"

const middleware = [thunk];

const persistConfig = {
    key: "tesla-project",
    blacklist: ["form"],
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const loggerMiddleware = createLogger();
let store;


if(process.env.NODE_ENV === "production"){
    middleware.push(loggerMiddleware);
}

store = createStore(
    persistedReducer,
    compose(applyMiddleware(...middleware))
);

const persistor = persistStore(store)


export {store, persistor};
