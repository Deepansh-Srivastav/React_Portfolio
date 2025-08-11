import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/Header.css"
import { NavLink } from 'react-router-dom';
import { IoCloudDownloadOutline } from "../data/icons.js"
import portfolioLogo from "../assets/Logos/portfolioLogo.png"

const Header = () => {
    return (
        <Navbar expand="lg" className="px-5 clr_purple custom_navbar" data-aos="fade-down">
            <Container fluid>
                <img src={portfolioLogo} alt="Portfolio Icon" className='nav-logo' />
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="d-flex align-items-center mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'mx-5 clr_white active' : 'mx-5 clr_white')}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/experience"
                            className={({ isActive }) => (isActive ? 'mx-5 clr_white active' : 'mx-5 clr_white')}
                        >
                            Experience
                        </NavLink>

                        <NavLink
                            to="/projects"
                            className={({ isActive }) => (isActive ? 'mx-5 clr_white active' : 'mx-5 clr_white')}
                        >
                            Projects
                        </NavLink>

                        <NavLink
                            to="/education"
                            className={({ isActive }) => (isActive ? 'mx-5 clr_white active' : 'mx-5 clr_white')}
                        >
                            Education
                        </NavLink>

                        {/* <NavLink
                            to="/education"
                            className={({ isActive }) => (isActive ? 'mx-5 clr_white active' : 'mx-5 clr_white')}
                        >
                            Skills
                        </NavLink> */}

                    </Nav>

                    <a className="d-flex justify-content-center align-items-center download_btn" href='../assets/Resume/Deepansh_Srivastav Resume.pdf'
                        download="Deepansh_Srivastav Resume.pdf">Resume <IoCloudDownloadOutline className='mx-1' /></a>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;