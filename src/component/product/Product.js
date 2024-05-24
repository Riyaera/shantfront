import React from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const featuredProjects = [
  { title: "Sensors", image: "assets/img/lsensor.jpg" },
  { title: "PLC", image: "assets/img/splc.jpg" },
  { title: "HMI", image: "assets/img/shmi.jpg" },
  { title: "VFD", image: "assets/img/vfds.jpg" },
  { title: "Servo Drive", image: "assets/img/servo.jpg" },
  { title: "Controller & Indicators", image: "assets/img/controllers.jpg" },
  { title: "Encoders", image: "assets/img/encoders.png" },
  { title: "Vision System", image: "assets/img/vision.jpg" },
  { title: "Barcode", image: "assets/img/barcode.jpg" },
  { title: "RFID", image: "assets/img/rfid.png" },
  { title: "Industrial PC", image: "assets/img/ipc.jpg" },
  { title: "Pnuematic Controls", image: "assets/img/pnuematics.jpg" },
  { title: "Switch & Gears", image: "assets/img/switchg.jpg" },
  { title: "Panel Asseseries", image: "assets/img/passe.jpg" }
];

const options = {
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  center: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
};

function Product() {
	const filteredProjects = [
        { name: "Sensors", image: "assets/products/sensors.png" },
        { name: "PLC", image: "assets/products/plc.png" },
        { name: "HMI", image: "assets/products/hmi.png" },
        { name: "Drives", image: "assets/products/vfd.png" },
        { name: "Servo Drives", image: "assets/products/servos.png" },
        { name: "SCADA Systems", image: "assets/products/scada.png" },
        { name: "Industrial PC", image: "assets/products/pc.png" },
        { name: "Rugged Barcodes", image: "assets/products/Barcodee.png" },
        { name: "SMPS", image: "assets/products/smps.png" },
        { name: "CONTACTORS", image: "assets/products/contactors.png" },
        { name: "RELAYS", image: "assets/products/relays.png" },
        { name: "IoT EDGE GATEWAY", image: "assets/products/IOT.png" },
        { name: "PUSH BUTTON", image: "assets/products/PUSH.png" },
        { name: "INDICATORS", image: "assets/products/indi.png" },
        { name: "PANEL ACESSORIES", image: "assets/products/panelass.png" },
        { name: "RUGGED ENCLOSER", image: "assets/products/ENCLOSER.png" },
    ];
  return <div>
		{/* <!-- Wrapper of page --> */}
		<div className="wrapper clearfix">
		     {/* Featured Projects */}
			 <section className="padding paddv-100" style={{ background: "url(assets/img/projects1.jpg)" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1 className="section-title light-title add-margin margt-50">
              <span className="sub-title">View Products</span>
              Industrial Products
              <span className="linner"></span>
            </h1>
            <p className="section-desc light-title">
              We offer the most comprehensive and complete range of Instrumentation and control products.
            </p>
          </div>
          <div className="col-md-8">
            <OwlCarousel className="featured-slider owl-carousel" {...options}>
              {featuredProjects.map((project, index) => (
                <div className="fitem" key={index}>
                  <div className="thumb">
                  <img src={project.image} alt={project.title} />

                  </div>
                  <div className="content">
                    <h2>{project.title}</h2>
                    <a href="http://localhost:3000/" >View Details</a>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>

            {/* Filtered Projects */}
            <section className="projects">
                {/* Project Content */}
                <div className="projects-content">
                    <div className="container">
                        <ul className="projects-four project-items clearfix">
                            {/* Map through filtered projects */}
                            {filteredProjects.map(project => (
                                <li key={project.name} className="upcoming">
                                    <div className="project-item">
                                        <div className="thumb">
                                            <img src={project.image} alt={project.name} />
                                            <div className="hover">
                                                <a className="open-popup" href={project.image}><i className="dev_project_icon"></i></a>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h2>{project.name}</h2>
                                            <a href="http://localhost:3000/" >View Details</a>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* End Project Content */}
            </section>
            {/* End Filtered Projects */}
		</div>
		{/* <!-- End Wrapper of page --> */}
  </div>;
}

export default Product;
