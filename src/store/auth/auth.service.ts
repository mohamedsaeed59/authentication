import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';
import { AuthState, LoginInfo } from "./auth.types";

const API_URL = 'https://one-hand/login';

export const AuthService = () => {
    const loginUser = createAsyncThunk(
        'auth/loginUser',
        async (data: LoginInfo, thunkApi) => {
            try {                
                const response = await axios.post(`${API_URL}?uid=${data.uid}`, data, {
                    headers: {
                      'X-secret-key': 'OH2024',
                    },
                  }
                );

                return response.data

            } catch (err: any) {
                
                return thunkApi.rejectWithValue(err)
            }
        }
    );

    const handleloginUserPending = (state: AuthState, action: PayloadAction<any>) => {
        state.isLoad = true
    }
    const handleloginUserFulfilled = (state: AuthState, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.isLoad = false
    }

    const handleloginUserRejected = (state: AuthState, action: PayloadAction<any>) => {
        state.isLoad = false
    }

    return {
        loginUser,
        handleloginUserPending,
        handleloginUserFulfilled,
        handleloginUserRejected,
    }
}