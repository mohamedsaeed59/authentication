import {createSlice} from "@reduxjs/toolkit";
import { AuthState } from "./auth.types";
import { AuthService } from "./auth.service";

const initState: AuthState = {
    isLoad: false,
    user: {},
}

export const authSlice = createSlice({
    name: 'appAuth',
    initialState: initState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(
            AuthService().loginUser.pending,
            AuthService().handleloginUserPending
        );
        builder.addCase(
            AuthService().loginUser.fulfilled,
            AuthService().handleloginUserFulfilled
        );
        builder.addCase(
            AuthService().loginUser.rejected,
            AuthService().handleloginUserRejected
        )
    }
})

export const {} = authSlice.actions

export default authSlice.reducer