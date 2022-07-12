import { createSlice } from "@reduxjs/toolkit";
import { GetRegionsThunk } from "../../functions/thunk";
import { responseReducerState } from "../../state/responseReducerState";

const responseReducer = createSlice({
  name: "ResponseReducer",
  reducers: {
    clearResponse: (state) => {
      state.error = null;
      state.message = null;
      state.loading = false;
    },
    errorResponse: (state, action) => {
      state.error = action.payload;
      state.message = null;
      state.loading = false;
    },
    messageResponse: (state, action) => {
      state.error = null;
      state.message = action.payload;
      state.loading = false;
    },
  },
  initialState: responseReducerState,
  extraReducers: (builder) => {
    builder
      .addCase(GetRegionsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(GetRegionsThunk.fulfilled, (state) => {
        state.loading = false;
        state.message = null;
        state.error = null;
      })
      .addCase(GetRegionsThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
        state.message = null;
      });
  },
});

export default responseReducer.reducer;
export const { clearResponse, errorResponse, messageResponse } =
  responseReducer.actions;
