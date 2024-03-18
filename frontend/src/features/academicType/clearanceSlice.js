import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import academicService from "./clearanceService";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// create academic type
export const createClearanceType = createAsyncThunk(
  "academic/create",
  async (academicName, thunkAPI) => {
    try {
      return await academicService.createClearanceType(academicName);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Get academic types
export const getClearanceTypes = createAsyncThunk(
  "academic/get",
  async (_, thunkAPI) => {
    try {
      return await academicService.getClearanceTypes();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Get update types
export const updateClearance = createAsyncThunk(
  "academic/updateClearnce",
  async (data, thunkAPI) => {
    try {
      return await academicService.updateClearance(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const academicSlice = createSlice({
  name: "academic",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // to register Floor
      .addCase(createClearanceType.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createClearanceType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createClearanceType.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getClearanceTypes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getClearanceTypes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(getClearanceTypes.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(updateClearance.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateClearance.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(updateClearance.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset } = academicSlice.actions;
export default academicSlice.reducer;
