import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from './pages/Home'
import Login from './pages/Login/Login';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>   
          <Route path="/login" element={<Login />} />  
        </Routes>
      </Router>
    </>
  )
}

export default App
