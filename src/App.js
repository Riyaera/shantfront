import React from 'react';
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Service from './component/service/Service';
import Product from './component/product/Product';
import Contact from './component/Contact';
import About from './component/about/About';
import Support from './component/support/Support';
import Admin from './component/admin_login/Admin';
import User from './component/userlogin/User';
import Sigup from './component/signup/Sigup';
import Addata from './component/serviceadmin/Addata';



function App() {
  return (
    <>

    <div className="site-container">
    <BrowserRouter>
    <Header/>
   
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Service' element={<Service/>} />
    <Route path='/products' element={<Product/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/career' element={<Home/>} />
    <Route path='/supports' element={<Support/>} />
    <Route  path='/admin' element={<Admin/>} />
    <Route  path='/user' element={<User/>} />
    <Route  path='/sign' element={<Sigup/>} />
    <Route  path='/login' element={<User/>} />
    <Route  path='/addata' element={<Addata/>} />



</Routes>
    </BrowserRouter>
    
    <Footer/>
    </div>
    </>
  );
}

export default App;
