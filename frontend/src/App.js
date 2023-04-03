import React, { useState } from 'react';
import { Routes, Route, Router } from "react-router-dom";
import LoginPage from '../src/pages/LoginPage';

function App() {
  return (

    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
