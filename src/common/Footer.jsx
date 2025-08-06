import '../styles/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaInstagram, FaLinkedinIn, IoLogoGithub } from "../assets/icons.js"

const Footer = () => {
  return (
    <footer className="footer-main py-4">
      <div className="container text-center">
        <h5 className="footer-title mb-2">Let's Connect</h5>
        <p className="footer-desc mb-3">
          Passionate MERN Stack Developer &middot; Open to Opportunities
        </p>
        <nav className="mb-3" aria-label="Footer links">
          <a href="/projects" className="footer-link mx-2">Projects</a>
          <a href="/contact" className="footer-link mx-2">Contact</a>
          <a href="/resume" className="footer-link mx-2">Resume</a>
        </nav>
        <div className="footer-social mb-3 d-flex justify-content-center ">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle bg-white text-black mx-2 pointer"
            style={{ width: "35px", height: "35px" }}
          >
            <FaLinkedinIn />
          </div>
          <div
            className="d-flex align-items-center justify-content-center rounded-circle bg-white text-black mx-2 pointer"
            style={{ width: "35px", height: "35px" }}
          > <IoLogoGithub /></div>
          <div
            className="d-flex align-items-center justify-content-center rounded-circle bg-white text-black mx-2 pointer"
            style={{ width: "35px", height: "35px" }}
          > <FaInstagram /></div>
        </div>
        <small className="footer-copy">
          &copy; {new Date().getFullYear()} Deepansh Srivastav. Built with <span className="footer-tech">React</span> & <span className="footer-tech">Bootstrap</span>.
        </small>
      </div>
    </footer>
  );
};

export default Footer;

// className = "d-flex justify-content-center align-items-start flex-wrap w-100 my-5 footer"