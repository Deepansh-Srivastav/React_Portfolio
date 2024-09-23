import "../styles/About.css"
import aboutImage from "../assets/Images/aboutImage.jpg"
import { aboutSectionHeadingData } from "../data/homePageData"
import Heading_Type_1 from "../common/Heading_Type_1"
import "aos/dist/aos.css"

const About = () => {

  return (
    <section className="about_section">
      <div className="row">
        <div className="col-12 col-md-6 ">
          <div className="image_container d-flex flex-row justify-content-center align-items-end" data-aos = "fade-right">
            <img src={aboutImage} alt="Image Deepansh Srivastav" />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="py-5" data-aos = "fade-left">
            <Heading_Type_1 {...aboutSectionHeadingData} />
            <div className="general_text">
              <p>Hey there! I&apos;m Deepansh Srivastav, a passionate student and a keen learner specializing in MERN stack development. Driven by curiosity and a dedication to growth, I continuously seek to expand my knowledge and skillset.<br /><br />My mission is to leverage the insights I gain to make a positive impact.
              <br />
              Join me on this exciting journey of learning, exploration, and innovation as we uncover new possibilities and embrace growth together.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About