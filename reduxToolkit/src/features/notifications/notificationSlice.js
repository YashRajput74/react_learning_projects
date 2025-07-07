import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    message: '',
    type: 'info', // info, success, error
    visible: false
};

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        showNotification: (state, action) => {
            state.message = action.payload.message;
            state.type = action.payload.type || 'info';
            state.visible = true;
        },
        hideNotification: (state) => {
            state.visible = false;
            state.message = '';
            state.type = 'info';
        }
    }
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;