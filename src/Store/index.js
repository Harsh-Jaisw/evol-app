import { configureStore } from "@reduxjs/toolkit";
import imageSlices from "./Slices/imageSlices";


export const store = configureStore({
  reducer: {
    images: imageSlices.reducer
  }
});