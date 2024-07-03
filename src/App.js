import React from 'react';
import { Dashboard, About, Products, Contacts } from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from './shared/error-boundary';


const App = () => (
  <div>
    <ErrorBoundary>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </div>
);

export default App;
