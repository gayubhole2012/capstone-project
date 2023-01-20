import React from 'react';
import './App.css';
import About from './containers/About';
import Menu from './containers/Menu';
import OrderOnline from './containers/OrderOnline';
import Reservation from './containers/reservations';
import Login from './containers/Login';
import Home from './containers/Home';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <div className="main-container">
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route path='/home' element={< Home/>} />
            <Route path='/about' element={<About />} />
            <Route path='/reservation' element={< Reservation/>} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/orderonline' element={<OrderOnline />} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
