import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { toggleTheme } from '../features/theme/themeSlice';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const theme = useSelector((state) => state.theme.mode);
    const newDashboard = useSelector((state) => state.features.newDashboard);

    return (
        <header style={{ background: theme === 'dark' ? '#333' : '#eee', padding: '1rem' }}>
            <h1>Welcome {user?.name || 'Guest'}</h1>
            <button onClick={() => dispatch(toggleTheme())}>
                Toggle Theme (Current: {theme})
            </button>
            {user && <button onClick={() => dispatch(logout())}>Logout</button>}
            {newDashboard && <span style={{ marginLeft: '1rem' }}>🚀 New Dashboard Enabled!</span>}
        </header>
    );
};

export default Header;