import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
  };
}

interface LoginArgs {
  login: string;
  password: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: {
    id: string;
    email: string;
  } | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
  status: "idle",
  error: null,
};

export const login = createAsyncThunk<LoginResponse, LoginArgs>(
  "auth/login",
  async ({ login, password }, { rejectWithValue }) => {
    try {
      const response = await new Promise<LoginResponse>((resolve, reject) => {
        setTimeout(() => {
          if (login === "test" && password === "123") {
            resolve({
              token: "mock-token-123",
              user: {
                id: "1",
                email: "test@example.com",
              },
            });
          } else {
            reject(new Error("Invalid credentials"));
          }
        }, 1000);
      });

      return response;
    } catch {
      return rejectWithValue("Invalid credentials");
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = (action.payload as string) ?? "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
