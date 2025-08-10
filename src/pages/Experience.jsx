import "../styles/Experience.css";
import "../styles/About.css";
import "aos/dist/aos.css";
import Heading_Type_2 from "../common/Heading_Type_2"
import { experiencePageData } from "../assets/data";

const Experience = () => {
  return (

    <main className="d-flex flex-column justify-content-center align-items-center w-100 main_page_layout">

      <div className="custom_margin_extra">
        <Heading_Type_2 {...experiencePageData} />
      </div>

      <section className="about_section">
        <div className="row">
          <div className="col-12 col-md-6 ">
            <div className="image_container d-flex flex-row justify-content-center align-items-end" data-aos="fade-right">
              <img src={"https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Image Deepansh Srivastav" />
              {/* <img src={experienceImage} alt="Image Deepansh Srivastav" /> */}
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="py-5" data-aos="fade-left">
              {/* <Heading_Type_1 {...experiencePage} /> */}
              <div className="general_text">
                <p>
                  Hi! I&apos;m Deepansh Srivastav, a Frontend Developer with hands-on experience in building responsive, user-focused web applications. Over the past year, I’ve worked on real-world projects and internships with organizations like Unravel and Bitlyze, contributing to performance optimization, API integrations, and reusable UI components.<br /><br />
                  My work spans across React.js, JavaScript, HTML5, CSS3, Bootstrap, and Material UI — creating clean, scalable, and maintainable solutions. I’m passionate about translating ideas into interactive, accessible digital experiences.<br /><br />
                  I believe in continuous learning and collaboration, striving to make every project impactful and user-friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="custom_margin_extra">
        <Heading_Type_2 heading="Verified Credentials" />
      </div>

      <ExperienceCertificate
        logo="https://dashboard-internal.unravelapp.com/static/media/logo.8739eb776c97f9ebf4b3.png"
        companyName="Unravel"
        duration="Jan 2025 – Present"
        description="Built and maintained a live real-time dashboard, integrating features such as Google OAuth and other enhancements to improve usability and performance."
        certificateLink="https://your-certificate-link.com"
        moreLink="https://your-project-link.com"
        isActive={true}
      />

      <ExperienceCertificate
        logo="https://www.bitlyze.com/_next/image/?url=%2Fimages%2Flogo.png&w=1200&q=75"
        companyName="Bitlyze"
        duration="Feb 2024 – July 2024"
        description="Contributed to Bitlyze’s marketing platform by developing reusable UI components and a blog module with full CRUD functionality using REST APIs."
        certificateLink="https://your-certificate-link.com"
        moreLink="https://your-project-link.com"
      />

    </main>
  );
};

export default Experience;


import { Badge, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ExperienceCertificate({ logo, companyName, duration, description, certificateLink, moreLink, isActive = false }) {
  return (
    <div className="experience-card mb-5 mx-3 rounded-3">

      {/* Logo Section */}
      <div className="p-3 experience-logo-container">
        <img
          src={logo}
          alt={`${companyName} logo`}
          className="company-logo img-fluid"
        />
      </div>

      {/* Content Section */}
      <div className="col-md-10 col-12 p-4 experience-info-container">
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
          <h5 className="mb-0 fw-bold">{companyName}</h5>
          <Badge
            bg="success"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "#fff",
              fontWeight: "400"
            }}
          >
            {duration}
          </Badge>
        </div>

        <p className="experience-description">{description} </p>

        {/* Buttons */}
        <div className="d-flex justify-content-between">

          {!isActive && (
            <Button
              className="btn-view-certificate"
              size="sm"
              onClick={() => window.open(certificateLink, "_blank")}
            >
              View Certificate
            </Button>
          )}

          <Button
            className="btn-see-more"
            size="sm"
            onClick={() => window.open(moreLink, "_blank")}
          >
            See More
          </Button>
        </div>
      </div>

    </div>
  );
}