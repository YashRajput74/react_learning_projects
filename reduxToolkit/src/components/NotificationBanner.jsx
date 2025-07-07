import { useSelector, useDispatch } from 'react-redux';
import { hideNotification } from '../features/notifications/notificationSlice';

const NotificationBanner = () => {
    const { message, type, visible } = useSelector(state => state.notifications);
    const dispatch = useDispatch();

    if (!visible) return null;

    return (
        <div style={{
            padding: '10px',
            background: type === 'error' ? '#f44336' : '#4caf50',
            color: '#fff',
            marginBottom: '10px'
        }}>
            <strong>{message}</strong>
            <button onClick={() => dispatch(hideNotification())} style={{ marginLeft: '1rem' }}>Dismiss</button>
        </div>
    );
};

export default NotificationBanner;