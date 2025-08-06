import '../styles/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { footerSocialLinks } from '../assets/data.js';

import { FaInstagram, FaLinkedinIn, IoLogoGithub } from "../assets/icons.js"

const Footer = () => {


  return (
    <footer className="footer-main py-4">
      <div className="container text-center">

        {/* <h5 className="footer-title mb-2">Let's Connect</h5> */}

        <div className='socialLinksContainer'>

          <p className="footer-desc mb-3">
            Passionate MERN Stack Developer &middot; Open to Opportunities
          </p>

          <div className="footer-social mx-3 mb-3 d-flex justify-content-center ">
            {footerSocialLinks?.map((data) => {
              return <SocialLinkIcon data={data} key={data?.key} />
            })}

          </div>

          <small className="footer-desc mb-3">
            &copy; {new Date().getFullYear()} Deepansh Srivastav. Built with <span className="footer-tech">React</span> & <span className="footer-tech">Bootstrap</span>.
          </small>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

// className = "d-flex justify-content-center align-items-start flex-wrap w-100 my-5 footer"


function SocialLinkIcon({ data }) {

  const Icon = data?.icon;

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center rounded-circle text-black mx-2 socialLinks"
        onClick={() => {
          window.open(`${data?.url}`, "_blank");
        }}
        key={data?.id}
      >
        <Icon />
      </div >
    </>
  );
};