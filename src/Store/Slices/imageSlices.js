import { createSlice } from "@reduxjs/toolkit";

const imageSlices = createSlice({
  name: "images",
  initialState: [],
  reducers: {
    addImages(state, action) {
      state.unshift(action.payload);
    },
  },
});

export default imageSlices;
export const { addImages } = imageSlices.actions;
