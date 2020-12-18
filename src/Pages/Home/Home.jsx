/* eslint-disable */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';
import Splash from '../../components/Splash/Splash';
import Trending from '../../components/Trending/Trending';
import { lightTheme, darkTheme } from '../../styles/Themes';
import { useDarkTheme } from '../../hooks/useDarkMode';

const Home = () => {
  const [theme, setTheme] = useDarkTheme(
    (typeof window !== 'undefined' && window.localStorage.getItem('theme')) || 'light',
  );

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Navbar />
        <Splash />
        <Trending />
      </ThemeProvider>
    </>
  );
};

export default Home;
