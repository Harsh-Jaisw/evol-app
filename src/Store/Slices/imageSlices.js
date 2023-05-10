import { createSlice } from "@reduxjs/toolkit";

const imageSlices = createSlice({
  name: "images",
  initialState: [],
  reducers: {
    addImages(state, action) {
      // state.push(action.payload);
      return [action.payload,...state]
    },
  },
});

export default imageSlices;
export const { addImages } = imageSlices.actions;
