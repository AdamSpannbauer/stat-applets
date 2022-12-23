import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MySideNav from './components/MySideNav';

import Home from './pages/Home';

import ZHome from './pages/zTable/ZHome';
import ZFromP from './pages/zTable/ZFromP';
import PFromZ from './pages/zTable/PFromZ';

import THome from './pages/tTable/THome';
import TFromP from './pages/tTable/TFromP';
import PFromT from './pages/tTable/PFromT';

import ChiSqHome from './pages/chiSqTable/ChiSqHome';
import ChiSqFromP from './pages/chiSqTable/ChiSqFromP';
import PFromChiSq from './pages/chiSqTable/PFromChiSq';

function App() {
  return (
    <BrowserRouter>
      <MySideNav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/z" element={<ZHome />} />
        <Route path="/z/z-from-p" element={<ZFromP />} />
        <Route path="/z/p-from-z" element={<PFromZ />} />

        <Route path="/t" element={<THome />} />
        <Route path="/t/t-from-p" element={<TFromP />} />
        <Route path="/t/p-from-t" element={<PFromT />} />

        <Route path="/chi-sq" element={<ChiSqHome />} />
        <Route path="/chi-sq/chi-sq-from-p" element={<ChiSqFromP />} />
        <Route path="/chi-sq/p-from-chi-sq" element={<PFromChiSq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
