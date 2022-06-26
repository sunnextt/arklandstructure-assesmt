import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';
import './App.css';
import GlobalStyled from './GlobalStyled';
import HomePage from './pages';
import RedirectPage from './pages/RedirectPage';

const theme = {
    color: '#FFFFFF'
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyled />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route exact path="/external-link" element={<RedirectPage />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
