import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "../../axiosConfig";

interface User {
  username: string;
  // Add other user properties as needed
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

export const fetchAuthStatus = createAsyncThunk(
  "auth/fetchAuthStatus",
  async (_, { dispatch }) => {
    try {
      const response = await axios.get<{ user: User }>("/api/auth/status");
      dispatch(authSuccess(response.data));
    } catch (error) {
      dispatch(authFailure());
    }
  }
);

interface LoginCredentials {
  username: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }: LoginCredentials, { dispatch }) => {
    try {
      const response = await axios.post<{ user: User }>("/api/auth/login", {
        username,
        password,
      });
      dispatch(authSuccess(response.data));
    } catch (error) {
      dispatch(authFailure());
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch }) => {
    try {
      await axios.post("/api/auth/logout");
      dispatch(authFailure());
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authSuccess: (state, action: PayloadAction<{ user: User }>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    authFailure: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAuthStatus.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchAuthStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? null;
    });
  },
});

export const { authSuccess, authFailure } = authSlice.actions;

export default authSlice.reducer;
