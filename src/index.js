import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';

import AppTheme from './context/Theme';
import GlobalStyle from './style';

import AdminSign from './component/Admin/Sign';
import AdminHome from './component/Admin/Home'

import Home from './component/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AppTheme>
        <GlobalStyle />
        <Routes>
          <Route path='/admin/login' element={<AdminSign />} />
          <Route path='/admin' element={<AdminHome />} >
          </Route>

          <Route path='/' element={<Home />} />
        </Routes>
      </AppTheme>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
