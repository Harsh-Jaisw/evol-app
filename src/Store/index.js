import { configureStore } from "@reduxjs/toolkit";
import imageSlices from "./Slices/imageSlices";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, imageSlices.reducer);

export const store = configureStore({
  reducer: {
    images: imageSlices.reducer
  }
});

export const persistor = persistStore(store)