import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/main.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductsManagement';
import EmployeesManagement from './components/EmployeesManagement';
import LoginLogout from './components/LoginLogout';
import NotFound from './components/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>

        <Route path="/" element={<Dashboard />}/>
        <Route path="/productsmanagement" element={<ProductsManagement />}/>
        <Route path="/employeesmanagement" element={<EmployeesManagement />}/>
        <Route path="/loginlogout" element={<LoginLogout />}/>
        <Route path="*" element={<NotFound />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
