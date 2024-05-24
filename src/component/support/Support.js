import React from "react";
import "./Support.css"

function Support() {
  return <div>
    <div className="wrapper clearfix">
    <section className="under-development-section">
      <div className="nav-wrap">
        <nav className="main-nav" role="navigation">
          <ul className="unstyled list-hover-slide">
            <li><a href="http://localhost:3000/" >Software Downloads</a></li>
            <li><a href="http://localhost:3000/" >Manuals</a></li>
            <li><a href="http://localhost:3000/" >Cable Diagram</a></li>
            <li><a href="http://localhost:3000/" >Tutorials</a></li>
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
