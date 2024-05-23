
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





    </Routes>
    </BrowserRouter>
   
    {/* <Slideshow/> */}
    {/* <Carasoul/> */}
    {/* <RestComponent/> */}
    {/* <Service/> */}
    <Footer/>

    </div>
    
    </>
  );
}

export default App;
