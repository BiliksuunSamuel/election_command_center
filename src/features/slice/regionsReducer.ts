import { createSlice } from "@reduxjs/toolkit";
import { GetRegionsThunk } from "../../functions/thunk";
import { RegionsReducerState } from "../../state";

export default createSlice({
  name: "RegionsReducer",
  initialState: RegionsReducerState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetRegionsThunk.fulfilled, (state, action) => {
      state.regions = action.payload;
    });
  },
}).reducer;
