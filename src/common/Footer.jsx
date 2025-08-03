import '../styles/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="footer-social mb-3">
          <a href="https://github.com/yourusername" className="footer-social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" className="footer-social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:youremail@example.com" className="footer-social-link" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
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