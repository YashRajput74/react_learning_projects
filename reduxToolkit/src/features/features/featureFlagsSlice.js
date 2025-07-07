import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    newDashboard: false,
    betaAccess: false,
};

const featureFlagsSlice = createSlice({
    name: 'features',
    initialState,
    reducers: {
        setFeatureFlags: (state, action) => {
            return { ...state, ...action.payload };
        }
    }
});

export const { setFeatureFlags } = featureFlagsSlice.actions;
export default featureFlagsSlice.reducer;