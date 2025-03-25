import { useTheme } from '../context/ThemeContext';
import '../styles/components.css';

export function ThemeToggle() {
  const { toggleTheme, isLightTheme } = useTheme();

  return (
    <div className="theme-toggle-wrapper">
      <label className="switch">
        <input 
          type="checkbox" 
          checked={isLightTheme}
          onChange={toggleTheme}
          aria-label={`Switch to ${isLightTheme ? 'dark' : 'light'} mode`}
        />
        <span className="slider round">
          <span className="slider-circle">
            {isLightTheme ? '☀️' : '🌙'}
          </span>
        </span>
      </label>
    </div>
  );
}
