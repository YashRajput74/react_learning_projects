import React, { useEffect } from 'react';
import Header from './components/Header';
import NotificationBanner from './components/NotificationBanner';
import { useDispatch } from 'react-redux';
import { login } from './features/auth/authSlice';
import { showNotification } from './features/notifications/notificationSlice';
import { setFeatureFlags } from './features/features/featureFlagsSlice';

const App = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(login({
            name: "Jason"
        }))
        dispatch(showNotification({
            message: "Logged in successfully",
            type: "success"
        }))
        dispatch(setFeatureFlags({
            newDashboard: true
        }))
    },[dispatch])

    return (
        <div>
            <NotificationBanner />
            <Header />
            <main style={{ padding: '1rem' }}>
                <p>This is the main content of the app.</p>
            </main>
        </div>
    );
};

export default App;