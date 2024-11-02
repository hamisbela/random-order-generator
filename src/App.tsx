import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RandomOrderGenerator } from './pages/RandomOrderGenerator';
import { NameGenerator } from './pages/NameGenerator';
import { DraftGenerator } from './pages/DraftGenerator';
import { NumberGenerator } from './pages/NumberGenerator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RandomOrderGenerator />} />
        <Route path="/name-generator" element={<NameGenerator />} />
        <Route path="/draft-generator" element={<DraftGenerator />} />
        <Route path="/number-generator" element={<NumberGenerator />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;