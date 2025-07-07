import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import themeReducer from '../features/theme/themeSlice';
import notificationReducer from '../features/notifications/notificationSlice';
import featureFlagsReducer from '../features/features/featureFlagsSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        theme: themeReducer,
        notifications: notificationReducer,
        features: featureFlagsReducer,
    }
});