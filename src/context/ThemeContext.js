import { createContext, useContext } from 'react';

// Create the theme context
const ThemeContext = createContext();

// Custom hook to use the theme context
export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
