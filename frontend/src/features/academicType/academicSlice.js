import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import academicService from "./academicService";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// create academic type
export const createAcademicType = createAsyncThunk(
  "academic/create",
  async (academicName, thunkAPI) => {
    try {
      return await academicService.createAcademicType(academicName);
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
export const getAcademicTypes = createAsyncThunk(
  "academic/get",
  async (_, thunkAPI) => {
    try {
      return await academicService.getAcademicTypes();
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
      .addCase(createAcademicType.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAcademicType.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createAcademicType.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getAcademicTypes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAcademicTypes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(getAcademicTypes.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset } = academicSlice.actions;
export default academicSlice.reducer;
