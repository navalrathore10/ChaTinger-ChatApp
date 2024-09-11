// src/App.jsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';
import ThemePasser from './ThemePasser';
const App = () => {
  return (
    <ThemeProvider>
      <ThemePasser />
    </ThemeProvider>
  );
}

export default App;
