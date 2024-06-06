
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import MYCV from './screens/MYCV.js';
import Page1 from './screens/page1.js';
import Cvgenere from './screens/Cvgenere.js';
import HomePage from './screens/home';


const App: React.FC = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<HomePage />} />
        <Route path='/formulaire' element={<Page1 />} />
        <Route path='/moncv' element={<MYCV />} />
        <Route path='/Cvgenere' element={<Cvgenere />} />
      </Routes>
    </div>
  );
};

export default App;
