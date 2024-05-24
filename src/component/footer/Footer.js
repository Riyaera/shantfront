import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function Footer() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:1001/api/contact', data);
      setSuccessMessage(response.data.message);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <footer>
      <div className="widgets-block padding paddv-60">
        <div className="container">
          <div className="row widgets">
            <div className="col-md-4">
              <div className="widget widget-text">
                <p>Shanti Automation provides high quality on site services for industrial automation and the end users on a broad range of hardware &amp; software platforms and latest technologies.</p>
                <div className="dev-newsletter">
                  <h2>Subscribe our newsletter</h2>
                  <form action="#" method="GET" data-list_id="5cdb4dac1a">
                    <div className="input-group">
                      <input type="text" className="form-control" size={25} id="emailid" name="email" placeholder="yourname@domain.com" />
                      <span className="input-group-btn">
                        <button className="btn btn-default" type="submit"><i className="fa fa-paper-plane" aria-hidden="true" /></button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="widget widget-address">
                <h2>Find us at</h2>
                <p>MAIN OFFICE: <br />D1-D2, Adarsh Colony, Rudrapur <br />Dist. U.S.Nagar (UK)</p>
                <p><i className="fa fa-phone" aria-hidden="true" /> +91-7466076666 <br /><i className="fa fa-envelope-o" aria-hidden="true" /> sales@shantiautomation.com</p>
                <p><i className="fa fa-calendar" aria-hidden="true" /> Monday - Saturday: 9:00 Am - 18:00 Pm <br />Sunday: Closed</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="widget widget-contact" id="quickform">
                <h2>Send us a message</h2>
                {successMessage ? (
                  <div>
                    <h1>Thank You!</h1>
                    <p>You are very important to us, all information received will always remain confidential. We will contact you as soon as we review your message.</p>
                  </div>
                ) : (
                  <form className="contact-form" id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <input type="text" className="form-control" name="name" placeholder="Name" {...register('name', { required: true, maxLength: 255 })} />
                      {errors.name && <span>This field is required and should be less than 255 characters</span>}
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" name="email" placeholder="Email" {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                      {errors.email && <span>This field is required and should be a valid email</span>}
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="phone" placeholder="Mobile Number" {...register('phone', { required: true, pattern: /^\d{10}$/ })} />
                      {errors.phone && <span>This field is required and should be a 10-digit number</span>}
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" name="message" placeholder="Enter your message" {...register('message', { required: true, maxLength: 1000 })}></textarea>
                      {errors.message && <span>This field is required and should be less than 1000 characters</span>}
                    </div>
                    <button className="devbtn" id="butsave">Send Us</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-block padding paddv-60">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="footer-social">
                <li><a href="https://shantireactautomation.netlify.app/" ><i className="fa fa-facebook" /></a></li>
                <li><a href="https://shantireactautomation.netlify.app/" ><i className="fa fa-twitter" /></a></li>
                <li><a href="https://shantireactautomation.netlify.app/" ><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://shantireactautomation.netlify.app/" ><i className="fa fa-pinterest" /></a></li>
              </ul>
              <p>Copyright © 2019 <a href="https://shantireactautomation.netlify.app/" >Shanti Automation</a>.  All rights reserved</p>
            </div>
          </div>
        </div>
        <a href="https://shantireactautomation.netlify.app/" id="gotop" className="gotop" style={{fontSize: "14px"}}>top<i className="fa fa-angle-up" aria-hidden="true" /></a>
      </div>
    </footer>
  );
}

export default Footer;
