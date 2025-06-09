import { useEffect, useState, useDebugValue } from 'react';

export default function UseDebugValue() {
    return (
        <StatusIndicator />
    )
}

function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        function handleOnline() {
            setIsOnline(true);
        }

        function handleOffline() {
            setIsOnline(false);
        }

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    // Debug label in React DevTools
    useDebugValue(isOnline ? 'Online' : 'Offline');

    return isOnline;
}

function StatusIndicator() {
    const isOnline = useOnlineStatus();

    return (
        <p>
            Status: {isOnline ? '✅ Online' : '❌ Offline'}
        </p>
    );
}

/* 
UseDebugValue:  -A hook that lets you label and show debug info for a custom hook inside React DevTools.
                -When you're building custom hooks, especially reusable ones, it helps other developers (or your future self) understand what’s going on inside that hook by showing helpful data.
                -Inside custom hooks only. Never in components.
                -Use it when:
                    Your hook has internal logic or state.
                    You want to log what's happening in the hook for debugging in React DevTools.
*/