import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home'
import Login from './pages/Login/Login';
import MainLayout from './components/Layout/MainLayout';
import UseConditions from './pages/Advisers/UseConditions';
import Privacy  from './pages/Advisers/Privacy';
import RegisterUser from './pages/Login/RegisterUser';
import ProductCreate from './pages/Admin/Products/ProductCreate';
import CategoryCreate from './pages/Admin/Categories/CategoryCreate';
import ProviderCreate from './pages/Admin/Providers/ProviderCreate';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<Home/>}></Route>
          </Route> 
          <Route path="/login" element={<Login />} />      
          <Route path="/privacy" element={<Privacy/>} /> 
          <Route path="/conditions" element={<UseConditions/>} />   
          <Route path="/nuevousuario" element={<RegisterUser/>} />
          <Route path="/product/create" element={<ProductCreate/>}></Route>
          <Route path='/category/create' element={<CategoryCreate></CategoryCreate>}></Route>
          <Route path='/provider/create' element={<ProviderCreate></ProviderCreate>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
