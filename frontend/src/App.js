import React, { useState } from 'react';
import { Routes, Route, Router } from "react-router-dom";
import LoginPage from 'c:/Users/DELL/E-Learning/E-Learning-System-Project/frontend/src/pages/LoginPage/index';

function App() {
  return (

    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
