import "../styles/Experience.css";
import "../styles/About.css";
import experienceImage from "../assets/Images/experience.png";
import Heading_Type_1 from "../common/Heading_Type_1";
import "aos/dist/aos.css";
import { experiencePage } from "../data/homePageData";

const Experience = () => {
  return (

    <main className="d-flex flex-column justify-content-center align-items-center w-100 main_page_layout">
      <section className="about_section">
        <div className="row">
          <div className="col-12 col-md-6 ">
            <div className="image_container d-flex flex-row justify-content-center align-items-end" data-aos="fade-right">
              <img src={experienceImage} alt="Image Deepansh Srivastav" />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="py-5" data-aos="fade-left">
              <Heading_Type_1 {...experiencePage} />
              <div className="general_text">
                <p>Hey there! I&apos;m Deepansh Srivastav, a passionate student and a keen learner specializing in MERN stack development. Driven by curiosity and a dedication to growth, I continuously seek to expand my knowledge and skillset.<br /><br />My mission is to leverage the insights I gain to make a positive impact.
                  <br />
                  Join me on this exciting journey of learning, exploration, and innovation as we uncover new possibilities and embrace growth together.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Experience;