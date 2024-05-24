import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  
  const handleOnClick = (link) => {
    setActiveLink(link);
  };



  return (
    <>
    <div className="site-container">
      {/* Header */}
      <header className="clearfix">
        {/* Top Bar */}
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <ul className="contact-us">
                  <li>
                    <a href="/" >
                      <i className="fa fa-phone" aria-hidden="true" />
                      +91-7466076666
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="contact-us contact-us-right">
                  <li>
                    <a href="/" >
                      <i className="fa fa-envelope" aria-hidden="true" />
                      info@shantiautomation.com
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.co.in/maps/@28.9800407,79.3975113,15z?hl=en">
                      <i className="fa fa-map-marker" aria-hidden="true" />
                      Rudrapur, UK
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Top Bar */}
        {/* Menu Bar Navigation */}
        <div className="menubar">
          <div className="container">
            <div className="navbar">
              {/* Navbar Header */}
              <div className="navbar-header">
                <Link className="navbar-brand clearfix" to="/" style={{ marginTop: '5px' }}>
                  <img alt="logo" src="assets/img/logo.jpeg" />
                </Link>
              </div>
              {/* End Navbar Header */}
              {/* Search & Hamburger Menu */}
              <div className="collapsed-icons">
                <ul>
                  <li>
                    <a className="search" href="/"  id="trigger-overlay">
                      <i className="fa fa-search" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <button type="button" id="navbar-toggle" className="navbar-toggle"   data-toggle="collapse">
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </li>
                </ul>
              </div>
              
              {/* End Search & Hamburger Menu */}
              {/* Navigation */}
              <div className="navbar-collapse collapse navbar-right">
                <ul className="navbar-nav nav">
                  <li>
                    <Link
                      to="/"
                   
                      onClick={() => handleOnClick('home')}
                      style={{ color: activeLink === 'home' ? '#2ff924' : 'black' }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Service"
                   
                      onClick={() => handleOnClick('services')}
                      style={{ color: activeLink === 'services' ? '#2ff924' : 'black' }}
                    >
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products"
                   
                      onClick={() => handleOnClick('products')}
                      style={{ color: activeLink === 'products' ? '#2ff924' : 'black' }}
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                   
                      onClick={() => handleOnClick('about')}
                      style={{ color: activeLink === 'about' ? '#2ff924' : 'black' }}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/career"
                   
                      onClick={() => handleOnClick('career')}
                      style={{ color: activeLink === 'career' ? '#2ff924' : 'black' }}
                    >
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                   
                      onClick={() => handleOnClick('contact')}
                      style={{ color: activeLink === 'contact' ? '#2ff924' : 'black' }}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/supports"
                   
                      onClick={() => handleOnClick('supports')}
                      style={{ color: activeLink === 'supports' ? '#2ff924' : 'black' }}
                    >
                      Support &amp; Downloads
                    </Link>
                  </li>
                </ul>
              </div>
              {/* End Navigation */}
            </div>
          </div>
        </div>
        {/* End Menu Bar Navigation */}
        {/* <div id="sidr-main" class="sidr right"  style={{transition: "right 0.2s ease 0s",right: "0px"}}>
          <div class="sidr-inner">
<h1>h</h1>
          </div>
          </div> */}
      </header>
      {/* End Header */}
      
    </div>
    </>
  );
};

export default Header;
