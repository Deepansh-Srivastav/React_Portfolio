import '../styles/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { footerSocialLinks } from '../data/data.js';

import { MdOutlineMail } from "../data/icons.js"

const Footer = () => {


  return (
    <footer className="footer-main py-4">
      <div className="container  d-flex justify-content-center align-items-center flex-column">

        <h5 className="footer-title mb-4 footer-desc text-decoration-none">Let's Connect</h5>

        <div className='socialLinksContainer'>

          <div className="footer-social mx-3 mb-3 d-flex justify-content-center align-items-center flex-column">

            <div>

              <p className="footer-desc">
                Connect with Me Online: Follow!
              </p>

            </div>

            <div className='d-flex'>
              {footerSocialLinks?.map((data) => {
                return <SocialLinkIcon data={data} key={data?.key} />
              })}
            </div>

          </div>

          <div className='footer-social-media-container mx-3 mb-3 d-flex justify-content-center align-items-center flex-column '>

            <p className="footer-desc mb-2">
              Get in Touch via Email
            </p>
            <Emails email={"deepansh.engineering03@gmail.com"} />
          </div>

        </div>

        <div className="my-3 divider"></div>

        <small className="footer-desc text-white text-decoration-none">
          ✦
          &copy; {new Date().getFullYear()} Deepansh Srivastav. Built with <span className="footer-tech">React</span> & <span className="footer-tech">Bootstrap</span>
          ✦
        </small>

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


function Emails({ email }) {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center footer_email'>

        <span>
          <MdOutlineMail fontSize={"16px"} />
        </span>

        <span className='mx-2 '>{email}</span>
      </div>
    </>
  );
}