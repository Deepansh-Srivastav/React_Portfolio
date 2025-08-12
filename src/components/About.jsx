import "../styles/About.css";
import aboutImage from "../assets/Images/image.png";
import { aboutSectionHeadingData } from "../data/homePageData";
import Heading_Type_1 from "../common/Heading_Type_1";
import "aos/dist/aos.css";

const About = () => {

  return (
    <section className="about_section">
      <div className="row">
        <div className="col-12 col-md-6 d-flex justify-content-center align-item-center">
          <div className="image_container" data-aos="fade-right">
            <img src={aboutImage} alt="Image Deepansh Srivastav" />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="py-5" data-aos="fade-left">
            <Heading_Type_1 {...aboutSectionHeadingData} />
            <div className="general_text">

              <p>
                Hello! I&apos;m <span className="highlighter">Deepansh Srivastav</span>, a
                <span className="highlighter"> Frontend Developer</span> with
                <span className="highlighter"> 10+ months of experience</span> building
                responsive, user-focused web applications using
                <span className="highlighter"> React.js</span> and
                <span className="highlighter"> JavaScript (ES6+)</span>.
                I create clean, performant, and accessible interfaces that enhance user experience.
                <br /><br />
                With a strong foundation in modern frontend technologies, I deliver
                <span className="highlighter"> scalable</span> and
                <span className="highlighter"> maintainable solutions</span>, turning ideas into
                <span className="highlighter"> interactive digital experiences</span> through
                <span className="highlighter"> collaboration</span>,
                <span className="highlighter"> innovation</span>, and
                <span className="highlighter"> growth</span>.
              </p>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;