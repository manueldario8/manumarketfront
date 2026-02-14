import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/Home'
import Login from './pages/Login/StartLogin';
import MainLayout from './components/Layout/MainLayout';
import UserNotFound from './pages/Login/UserNotFound';
import UseConditions from './pages/Advisers/UseConditions';
import Privacy  from './pages/Advisers/Privacy';
import RegisterUser from './pages/Login/RegisterUser';
import PassPage from './pages/Login/PassPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<Home/>}></Route>
          </Route> 
          <Route path="/login" element={<Login />} />  
          <Route path="/fail-login" element={<UserNotFound/>} />       
          <Route path="/privacy" element={<Privacy/>} /> 
          <Route path="/conditions" element={<UseConditions/>} />   
          <Route path="/nuevousuario" element={<RegisterUser/>} />
          <Route path="/pass" element={<PassPage/>} />    
        </Routes>
      </Router>
    </>
  )
}

export default App
