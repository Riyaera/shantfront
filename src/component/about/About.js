import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function About() {
    const options = {
        items: 5,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
      };
    
      const clients = [
        'assets/client/1.png',
        'assets/client/2.png',
        'assets/client/3.png',
        'assets/client/4.jpg',
        'assets/client/5.png',
        'assets/client/6.png',
        'assets/client/7.jpg',
        'assets/client/8.png',
        'assets/client/9.png',
        'assets/client/10.png',
        'assets/client/11.png',
        'assets/client/12.png',
        'assets/client/13.png',
        'assets/client/14.png',
        'assets/client/15.png',
        'assets/client/16.png',
        'assets/client/17.jpg',
      ];
  return <>
     <div className="page-title" data-background="assets/img/banner_about.jpg" data-mode="none">
      <div className="container">
        <div className="dev-breadcrumb">
          <ul className="clearfix">
          <li><a href="/" >Home</a></li>
<li><a className="none-link" href="about.html">About Us</a></li>

          </ul>
        </div>
        <div className="page-meta">
          <h2 style={{color: "rgb(137,18,17)"}}>About Us</h2>
          <p style={{color: "rgb(137,18,17)"}}>With over 5 years of experience in Industrial Automation we've <br /> built well known name.</p>
        </div>
      </div>
    </div>
    {/* <!-- Wrapper of page --> */}
		<div class="wrapper clearfix">
            {/* Icon boxes */}
        <section className="padding paddv-100">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="dev-iconbox">
              <a href="/">
                <i className="fa fa-heartbeat" aria-hidden="true"></i>
              </a>
              <h2>
                <span>We Always do</span>
                Quality Work
              </h2>
              <p>
                We never compromise with quality. Our top class Software solutions make us one of the leading software development company in India. include cellular and molecular biology medical genetics, immunology. and psychology.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dev-iconbox">
              <a href="cubes.html">
                <i className="fa fa-cubes" aria-hidden="true"></i>
              </a>
              <h2>
                <span>On-Time</span>
                Delivery
              </h2>
              <p>
                We never fail the contract time bound of the projects. We are always committed to deliver your projects earlier of the dead line.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dev-iconbox">
              <a href="/">
                <i className="fa fa-area-chart" aria-hidden="true"></i>
              </a>
              <h2>
                <span>Reliable</span>
                Communication
              </h2>
              <p>
                We have excellent communication skilled support and sales team to give you proper support and guide to show the right direction and hassle free solutions for any issue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Icon boxes end */}

    {/* about us */}
    <section className="padding paddv-100 light-section">
      <div className="container section-row">
        <div className="row">
          <div className="col-md-6">
            <h1 className="section-title">
              <span className="sub-title">Read What We Do</span>
              About Sysnix Automation
              <span className="linner"></span>
            </h1>
            <p className="section-desc">
              Sysnix Automation is a leading Industrial Automation products and solution provider for various industry verticals. Established in 2010, The Company has been promoted by some highly experienced Professionals dedicated to provide total industrial automation solutions under one roof. It possesses not only the latest technologies but also the most knowledgeable and experience hands to offer most user friendly customized solutions.
            </p>
            <p>
              Sysnix Automation provides high quality on site services for industrial automation and the end users on a broad range of hardware & software platforms and latest technologies.
            </p>
            <ul className="feature-list">
              <li data-animation-name="fadeInLeft" data-animation-delay="1000" data-animation-duration="1000">
                <a href="/" >
                  <i className="fa fa-globe"></i>
                  <h2>
                    <span>Expanding</span>
                    Provider
                  </h2>
                </a>
              </li>
              <li data-animation-name="fadeInLeft" data-animation-delay="1500" data-animation-duration="1000">
                <a href="/" >
                  <i className="fa fa-certificate"></i>
                  <h2>
                    <span>Global</span>
                    Certified
                  </h2>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <div data-animation-name="fadeInRight" className="framed-images clearfix">
              <span className="frame-border">
                <span></span>
              </span>
              <img src="assets/img/about.jpg" alt="Framed Images" title="Framed Images" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about us end */}

    {/* timeline */}
    <section className="padding paddv-100 light-section">
      <div className="container">
        <div className="dev-timeline animation-full">
          <div className="timeline-tree">
            <ul>
              <li className="active" data-animation-name="fadeInLeft">
                <a href="/" >
                  <span className="timeline-circle"></span>
                  <span className="timeline-title">Understanding the Project Requirement</span>
                </a>
              </li>
              <li data-animation-name="fadeInLeft">
                <a href="/" >
                  <span className="timeline-circle"></span>
                  <span className="timeline-title">Innovative Team</span>
                </a>
              </li>
              <li data-animation-name="fadeInLeft">
                <a href="/" >
                  <span className="timeline-circle"></span>
                  <span className="timeline-title">Vision & Mission</span>
                </a>
              </li>
              <li data-animation-name="fadeInLeft">
                <a href="/" >
                  <span className="timeline-circle"></span>
                  <span className="timeline-title">Our Quality Policy</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="timeline-content">
            <div className="timeline-inner">
              <div className="timeline-item">
                <h2>Understanding the Project Requirement</h2>
                <p>
                  First of all our technically & operationally experienced project manager and project expertise understands your projects requirements and makes a road map of the projects that needs for your business. Every project at Sysnix Technologies is special. We look, understand and develop very carefully to give maximum return of your investment.
                </p>
              </div>
              <div className="timeline-item">
                <h2>Innovative Team</h2>
                <p>
                  Whatever you need in industrial automation field we can give you the exact solution for our innovative automation team. Sysnix Technologies is really proud of its highly qualified and technically skilled engineers, support & sales team.
                </p>
              </div>
              <div className="timeline-item">
                <h2>Vision & Mission</h2>
                <p>
                  We have successfully completed hundreds of projects in different industry verticals. The applications we executed range from quite simple cost effective systems to highly complicated systems. With this background we are ready to take new challenges and complete them with confidence in specified time frame.
                </p>
              </div>
              <div className="timeline-item">
                <h2>Our Quality Policy</h2>
                <p>
                  We shall strive to build a long-term relationship with our customers based on mutual trust & highest standards of behavior. We shall provide services to our customers, which meet or exceed their expectations. Taking into consideration all the little details and checked-tested thoroughly before deploying. Our team have given an edge over the peers making us expert, much valuable and time saver. With this there is no surprise that we are known for the quality and flexibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* timeline end */}

    {/* team */}
    <section className="padding paddv-60 dark-section" style={{ backgroundColor: '#fff' }}>
      <div className="counters">
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel className="clients-slider owl-carousel" {...options}>
              {clients.map((client, index) => (
                <a href="/"  key={index} className="client">
                  <img src={client} alt={`client ${index + 1}`} height="60" width="90" />
                </a>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  </div>;
  </>
}

export default About;
