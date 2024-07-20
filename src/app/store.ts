import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
    persistStore,
    persistReducer,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
import loginApi from "../features/registration/loginAPI";
import registrationAPI from "../features/registration/registerAPI";


const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    [registrationAPI.reducerPath]: registrationAPI.reducer,
    [loginApi.reducerPath]: loginApi.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

 const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(
            loginApi.middleware, 
            registrationAPI.middleware),
})

const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export { store, persistor }