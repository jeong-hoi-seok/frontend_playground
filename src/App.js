import './App.css';

import React from 'react';
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom';

import Header from './pages/Header';
import About from './pages/About';
import Detail from './pages/Detail';
import ResetPasswd from './pages/mypage/ResetPasswd';



function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Header />

        <Routes>
          <Route path='/About' element={<About/>}></Route>

          <Route path='/Home' element={<About/>}></Route>
          <Route path='/Detail' element={<Detail/>}></Route>
          <Route path='/mypage/ResetPasswd' element={<ResetPasswd/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
