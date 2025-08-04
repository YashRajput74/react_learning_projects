import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null
};

const authSlice = createSlice({//to create a slice
    name: 'auth',
    initialState,//for initialization
    reducers: {//for changing the initial data
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
});

export const { login, logout } = authSlice.actions;//for components
export default authSlice.reducer;//for store