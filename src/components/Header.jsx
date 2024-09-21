import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/Header.css"
import { NavLink } from 'react-router-dom';
import { MdOutlineFileDownload } from "react-icons/md";


const Header = () => {
    return (

        <Navbar expand="lg" className="px-5 clr_purple custom_navbar">
            <Container fluid>
                <Navbar.Brand href="#">Portfolio</Navbar.Brand>
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

                        <NavDropdown title="Link" id="navbarScrollingDropdown" className="mx-4">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>

                    <a className="d-flex justify-content-center align-items-center download_btn" href='../assets/Resume/Deepansh_Srivastav Resume.pdf'
                    download="Deepansh_Srivastav Resume.pdf">Download Resume <MdOutlineFileDownload className='mx-1'/></a>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
