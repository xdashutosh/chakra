import React from 'react';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Courses from './component/Courses';
import Upload from './component/Upload';
import Errorpage from './component/Errorpage';
import Signup from './component/Signup';
import Login from './component/Login';
function App() {


  return (
  <Router>
<Header/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/courses' element={<Courses/>}/>
       <Route path='/upload' element={<Upload/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='*' element={<Errorpage/>}/>
    </Routes>
<Footer/>
  </Router>
  );
}

export default App;
