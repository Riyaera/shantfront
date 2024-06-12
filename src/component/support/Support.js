import React from "react";
import "./Support.css"
// import { useNavigate } from "react-router-dom";

function Support() {
  // const navigate= useNavigate()
  
  return <div>
    <div className="wrapper clearfix">
    <section className="under-development-section">
      <div className="nav-wrap">
        <nav className="main-nav" role="navigation">
          <ul className="unstyled list-hover-slide">
            <li><a href="/" >Software Downloads</a></li>
            <li><a href="/" >Manuals</a></li>
            <li><a href="/" >Cable Diagram</a></li>
            <li><a href="/" >Tutorials</a></li>
          </ul>
        </nav>
      </div>
      <div className="content-wrap">
        <h1>Page is under development</h1>
      </div>
    </section>
    </div>
  </div>;
}

export default Support;
