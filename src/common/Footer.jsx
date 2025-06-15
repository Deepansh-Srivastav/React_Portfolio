import '../styles/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 d-flex justify-content-center align-items-start flex-wrap w-100 footer">
      <div className="container text-center">
        <h5 className="mb-3">Let's Connect</h5>
        <p className="mb-4">Passionate MERN Stack Developer | Open to Opportunities</p>
        <ul className="list-inline mb-3">
          <li className="list-inline-item mx-2">
            <a href="/projects" className="text-light text-decoration-none">Projects</a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="/contact" className="text-light text-decoration-none">Contact</a>
          </li>
          <li className="list-inline-item mx-2">
            <a href="/resume" className="text-light text-decoration-none">Resume</a>
          </li>
        </ul>
        <div className="mb-3">
          <a href="https://github.com/yourusername" className="text-light mx-2" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-light mx-2" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:youremail@example.com" className="text-light mx-2" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p className="mt-3">&copy; {new Date().getFullYear()} Your Name. Built with React & Bootstrap.</p>
      </div>
    </footer>
  );
};

export default Footer;



// className = "d-flex justify-content-center align-items-start flex-wrap w-100 my-5 footer"