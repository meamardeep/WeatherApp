import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {App} from './App';
import {Home} from './Home';
import {Contact} from './Contact';
import { Policy } from './Policy';
import  About from './About';
import { Login } from './Login';
import { Error } from './Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='about' element={<About/>}/>
           <Route path='contact' element={<Contact/>}/>
           <Route path='policy' element={<Policy/>}/>
           <Route path='weatherApp' element={<App/>}/>
           <Route path='login' element={<Login/>}/>
           <Route path='*' element={<Error/>}/>
          </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
