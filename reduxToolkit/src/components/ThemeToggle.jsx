import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  return <button onClick={() => dispatch(toggleTheme())}>Theme: {mode}</button>;
};

export default ThemeToggle;