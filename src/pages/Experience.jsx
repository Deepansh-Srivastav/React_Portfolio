import "../styles/Experience.css";
import "../styles/About.css";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading_Type_2 from "../common/Heading_Type_2"
import { experiencePageHeadingData, experienceData } from "../data/data.js";
import { useState } from "react";
import CertificateModal from "../common/CertificateModal";
import ExperienceCard from "../common/ExperienceCard.jsx";
import { experienceImage } from "../data/images.js";

const Experience = () => {

  const [certificateImage, setCertificateImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function handleCertificateImage(image) {
    setShowModal(true)
    setCertificateImage(image);
    return;
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
              <img src={experienceImage} alt="Experience Image" />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="py-5" data-aos="fade-left">
              {/* <Heading_Type_1 {...experiencePage} /> */}
              <div className="general_text">
                <p>
                  Hi! I&apos;m <span className="highlighter">Deepansh Srivastav</span>, a
                  <span className="highlighter"> Frontend Developer</span> with hands-on experience
                  in building <span className="highlighter">responsive</span>,
                  <span className="highlighter"> user-focused</span> web applications.
                  Over the past year, I’ve worked on <span className="highlighter">real-world projects</span>
                  and <span className="highlighter">internships</span> with organizations like
                  <span className="highlighter"> Unravel</span> and
                  <span className="highlighter"> Bitlyze</span>, contributing to
                  <span className="highlighter"> performance optimization</span>,
                  <span className="highlighter"> API integrations</span>, and
                  <span className="highlighter"> reusable UI components</span>.<br /><br />

                  My work spans across <span className="highlighter">React.js</span>,
                  <span className="highlighter"> JavaScript</span>,
                  <span className="highlighter"> HTML5</span>,
                  <span className="highlighter"> CSS3</span>,
                  <span className="highlighter"> Bootstrap</span>, and
                  <span className="highlighter"> Material UI</span> — creating
                  <span className="highlighter"> clean</span>,
                  <span className="highlighter"> scalable</span>, and
                  <span className="highlighter"> maintainable solutions</span>.
                  I’m passionate about translating ideas into
                  <span className="highlighter"> interactive</span>,
                  <span className="highlighter"> accessible</span> digital experiences.<br /><br />

                  I believe in <span className="highlighter">continuous learning </span>
                  and <span className="highlighter">collaboration</span>, striving to make eve.
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