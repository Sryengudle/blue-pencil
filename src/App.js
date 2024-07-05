import React from 'react';
import { Dashboard, About, Products, Contacts } from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from './shared/error-boundary';
import NavBar from './shared/nav-bar';
import Footer from './shared/footer';


const App = () => (
  <>
    <ErrorBoundary>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  </>
);

export default App;
