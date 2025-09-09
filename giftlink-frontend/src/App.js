import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import RegisterPagee from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import SearchPage from './components/SearchPage/SearchPage';
import 'bootstrap/dist/cssents/Navbar/Navbar';
/bootstrap.min.css';
import './App.css';
import Navbar from './compon
function App() {

  return (
    <>
        <Navbar/>
        <Routes>
          {/* the final code will not pass the products to every page, but each page will call the server API */}
          <Route path="/" element={<MainPage />} />
          <Route path="/app" element={<MainPage />} />
          <Route path="/app/login" element={<LoginPage />} />
          <Route path="/app/register" element={<RegisterPagee />} />
          <Route path="/app/product/:productId" element={<DetailsPage/>} />
          <Route path="/app/search" element={<SearchPage/>} />
        </Routes>
        </>
  );
}

export default App;
