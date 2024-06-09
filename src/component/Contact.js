import React from "react";

function Contact() {
  return <>
    <div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27920.32615554313!2d79.37365812762278!3d28.986162881878546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a07fee6824ceb9%3A0x2afe625a8db34866!2sSysnix+Technologies!5e0!3m2!1sen!2sin!4v1510597753788"
          width="100%"
          height="250"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen
          title="Sysnix Technologies Location"
        ></iframe>
      </div>
      {/* Wrapper of page */}
      <div className="wrapper clearfix">
        {/* Contact Us */}
        <section className="padding paddv-80">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="section-title">Contact Us</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form
                  className="contact-form"
                  method="post"
                  action="./php/contact/contact.php"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="dev[name]"
                          value=""
                          placeholder="Your name *"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="email"
                          name="dev[email]"
                          value=""
                          placeholder="Email address*"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="dev[phone]"
                          value=""
                          placeholder="Phone Number *"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="dev[subject]"
                          value=""
                          placeholder="Your Subject *"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="dev[message]"
                          placeholder="Type your message"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <button type="submit" className="devbtn">
                        Send us message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                {/* Call Contact Us */}
                <div className="contact-block">
                  <h2>Call us</h2>
                  <ul>
                    <li>
                      <h2>
                        <i className="fa fa-phone"></i>Sysnix Automation:
                        <span className="value">
                          +91-7466076666
                        </span>
                      </h2>
                    </li>
                  </ul>
                </div>
                {/* End Call Contact Us */}

                {/* Email me */}
                <div className="contact-block">
                  <h2>Email Us</h2>
                  <ul>
                    <li>
                      <h2>
                        <i className="fa fa-envelope"></i>Project Support:
                        <span className="value">
                          info@Sysnixautomation.com
                        </span>
                      </h2>
                    </li>
                  </ul>
                </div>
                {/* End Email me */}

                {/* Contact Address */}
                <div className="contact-block">
                  <h2>Address</h2>
                  <ul>
                    <li>
                      <h2>
                        <i className="fa fa-location-arrow"></i>MAIN OFFICE:
                        <span className="value">
                          D1, D2 Gangwar Tower, Adarsh Colony Rudrapur <br />
                          Dist. U.S.Nagar (UK)
                        </span>
                      </h2>
                    </li>
                  </ul>
                </div>
                {/* End Contact Address */}
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Us */}
      </div>
    </div>
  </>;
}

export default Contact;
