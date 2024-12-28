import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatPage from './Home/chatPage/chatPage'; 
import Hero from './Home/HomePage/Hero' 
import FacialRecognization from './Home/HomePage/FacialRecognization';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Hero/>} /> 
        <Route path="/chatPage" element={<ChatPage />} /> 
        <Route path="/camera" element={<FacialRecognization />} /> 


      </Routes>
    </BrowserRouter>
  );
}

export default App;
