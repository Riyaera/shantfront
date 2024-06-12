import React from "react";
import "./Carrer.css";
import card1 from "../carrer/automation.webp";
import card2 from "../carrer/1.jpg";
import card3 from "../carrer/2.jpg";
import card4 from "../carrer/3.jpg";
function Carrer() {
  return <div>
    <div className="wrapper clearfix">
        <div className="carrer-container">
            <section className="carrer-sec">
                <h1>career</h1>
                <p className="career-p">Imagine the Possibilities</p>
            </section>
            <section className="carrer-sec carrer-sec2">
                
            </section>
        </div>
        <div className="container-summary">
        <section className="professional-summary">
        <p style={{fontSize: "17px",wordSpacing: "2px",textAlign: "left",margin: "30px 20px 10px 20px"}}>
          Highly skilled Industrial Automation Engineer with over 10 years of experience in designing, 
          developing, and implementing automation solutions. Expertise in PLC programming, robotics, 
          and SCADA systems. Proven track record of improving efficiency and productivity in manufacturing 
          environments through innovative automation solutions.
        </p>
      </section>
      <section className="global-summary">
        <p className="global-p" style={{fontSize: "20px",color: "white",lineHeight: "33px", textAlign: "center"}}>
        We are a global leader in industrial automation and digital transformation. We connect the imaginations of people with the potential of technology to expand what is humanly possible.
        </p>
      </section>
        </div>
        <div className="container-people">
          <section className="our-people">
            <h1>our people</h1>
            <p style={{textAlign: "left",fontSize: "15px"}}>
            Welcome to Sysnix Automation, where we push boundaries and redefine the future of industrial automation. We come from diverse backgrounds but share a common purpose: to help our clients achieve greater efficiency and sustainability. At Sysnix Automation, you'll have the opportunity to make a significant impact, whether you’re designing user interfaces, writing algorithms, developing web content, or supporting customers. Our innovative solutions and customer-centric approach drive us to deliver exceptional results in the industrial sector. Be part of our collaborative environment where your ideas and contributions are valued, and join us in shaping the future of industrial automation. Explore opportunities with us and become a catalyst for industrial innovation.</p>
            <p style={{textAlign: "left",fontSize: "15px"}}>One way we achieve this is by investing in a unified set of learning and development tools and assessments across the enterprise, creating a fully automated and integrated talent ecosystem to nurture and retain talent. Annually, we survey our employees to gain insights into their perceptions of our culture and understand what motivates their engagement with our organization.</p>
            <p style={{textAlign: "left",fontSize: "15px"}}>We also offer several benefits to retain our talent, including flexible work hours, extended parental leave, and support for volunteering. Mentorship is a key component of our development plans, whether department-based or informally led, and we provide resources such as our mentor guidebook to all Sysnix employees.Additionally, we have launched a sponsorship program through our talent review process, intentionally connecting diverse talent with sponsors within the organization to foster continued career growth and development.</p>
          </section>
          <section className="our-image">
          <div className="card">
      <img 
        src={card1}
        alt="Card cap" 
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">Our teams and people</h5>
        <p className="card-text">
         A dynamic community dedicated to expanding human Possibility.
        </p>
        <a href="/" className="btn">Go somewhere</a>
      </div>
    </div>

          </section>
        </div>
        <div className="container-banner">
      <section className="banner">
        <p  className="global-p" style={{fontSize: "20px",color: "white",textAlign: "center"}}>
        When we combine technology with an engaged, enthusiastic workforce, anything is possible.
        </p>
      </section>
      <section>
        <h1 className="fraud" style={{marginLeft: "30px"}}>Beware Recruiting Fraud</h1>
        <p style={{fontSize: "17px",marginLeft: "30px",textAlign: "left"}}>Job Applicants should be aware of job recruitment, interview, and offer scams being perpetrated through the use of the Internet and social media platforms. No applicant for employment with Sysnix Automation is ever required to pay any money as part of the job application or hiring process, and Sysnix Automation’s job recruitment process involves in-person and/or telephonic interviews in most cases.</p>
      </section>
        </div>
        <div className="container-people">
          <section className="beaware-card">
          <div className="card">
      <img 
        src={card2}
        alt="Card cap" 
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">Cybersecurity Careers: Staying  Ahead of Criminals</h5>
        <p className="card-text">
    
        A hack can threaten lives and safety for customers. Our cybersecurity professionals are innovative thinkers who make an impact by staying one step ahead.  
                            
        </p>
      </div>
    </div>
    <div className="card">
      <img 
        src={card3}
        alt="Card cap" 
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title"> As Threats Evolve, So Do Cybersecurity Careers
                            </h5>
        <p className="card-text">
        In-demand cybersecurity professionals have found a home at Sysnix Automation, where they gain unique knowledge and training to be able to fight cyber attacks in an IT/OT space.
        </p>
       
      </div>
    </div>
    <div className="card">
      <img 
        src={card4}
        alt="Card cap" 
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">Transgender Inclusion: Creating a Safe Workplace
           </h5>
        <p className="card-text">
        How a transgender man found a supportive workplace environment and a company culture focused on diversity, equity and inclusion at Sysnix Automation.
                            
        </p>
        
      </div>
    </div>
          </section>
        </div>
    </div>
  </div>;
}

export default Carrer;
