import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./config/reducers";
import { createLogger } from "redux-logger";

const middleware = [thunk];

const loggerMiddleware = createLogger();
let store;

if (process.env.NODE_ENV === "production") {
  middleware.push(loggerMiddleware);
}

store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

const persistor = persistStore(store);

export { store, persistor };
