import "../styles/About.css";
import aboutImage from "../assets/Images/aboutImage.jpg";
import { aboutSectionHeadingData } from "../data/homePageData";
import Heading_Type_1 from "../common/Heading_Type_1";
import "aos/dist/aos.css";

const About = () => {

  return (
    <section className="about_section">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="image_container" data-aos="fade-right">
            <img src={aboutImage} alt="Image Deepansh Srivastav" />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="py-5" data-aos="fade-left">
            <Heading_Type_1 {...aboutSectionHeadingData} />
            <div className="general_text">
              <p>
                Hello! I&apos;m Deepansh Srivastav, a dedicated Frontend Developer with over 10 months of real-world experience in building responsive and user-centric web applications using React.js. I specialize in creating clean, performant, and accessible interfaces that enhance user experience and bring designs to life.<br /><br />
                With a strong foundation in modern frontend technologies and a continuous drive to stay updated with industry trends, I strive to craft scalable and maintainable solutions. <br /><br />
                I&apos;m  passionate about transforming ideas into interactive digital experiences and always eager to collaborate, innovate, and grow in this ever-evolving tech landscape.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;