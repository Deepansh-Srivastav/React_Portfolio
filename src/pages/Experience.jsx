import "../styles/Experience.css";
import "../styles/About.css";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading_Type_2 from "../common/Heading_Type_2"
import { experiencePageHeadingData, experienceData } from "../data/data.js";
import { useState } from "react";
import CertificateModal from "../common/CertificateModal";
import ExperienceCard from "../common/ExperienceCard.jsx";


const Experience = () => {

  const [certificateImage, setCertificateImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function handleCertificateImage(image) {
    setShowModal(true)
    setCertificateImage(image);
    return

  }

  function handleClose() {
    setShowModal(false)
    setCertificateImage(null);
    return;
  }

  return (

    <main
      className={`d-flex flex-column justify-content-center align-items-center w-100 main_page_layout ${showModal ? "main-blur" : ""
        }`}
    >
      <div className="custom_margin_extra">
        <Heading_Type_2 {...experiencePageHeadingData} />
      </div>

      <section className="about_section ">
        <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-center align-item-center">
            <div className="image_container" data-aos="fade-right">
              <img src={"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Experience Image" />
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

      {experienceData?.map((experienceData, index) => {
        return <ExperienceCard  {...experienceData} key={index} handleCertificateImage={handleCertificateImage} />
      })}

      {showModal && <CertificateModal show={showModal} certificateImage={certificateImage} handleClose={handleClose} />}

    </main>
  );
};

export default Experience;
