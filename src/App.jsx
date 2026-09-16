import {  Route, Routes } from 'react-router-dom';
import './App.css'
import Loginform from './components/login-form';
import Signupform from './components/signup-form';
import UserDetails from './components/user-details';

function App() {
 
  return (
    <>
     
     <Routes>
          <Route path="/" element={<Loginform />}/>
          <Route path="/signupform" element={<Signupform />}/>
          <Route path="/formsdetails" element={<UserDetails/>}/>

      </Routes>
     
     
    </>
  )
}

export default App
