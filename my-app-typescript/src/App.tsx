import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
