import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/Header.css"

const Header = () => {
    return (

        <Navbar expand="lg" className="px-5 clr_purple custom_navbar">
            <Container fluid>
                <Navbar.Brand href="#">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className="me-3">Home</Nav.Link>

                        <Nav.Link href="#action2" className="me-3">Projects</Nav.Link>

                        <Nav.Link href="#action2" className="me-3">Link</Nav.Link>



                        <NavDropdown title="Link" id="navbarScrollingDropdown" className="me-3">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>


        // <Navbar expand="lg" className="bg-body-tertiary">
        //     <Container fluid>
        //         <Navbar.Brand href="#">Portfolio</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="navbarScroll" />
        //         <Navbar.Collapse id="navbarScroll">
        //             <Nav
        //                 className="mx-auto my-2 my-lg-0" // Updated class to center the nav items
        //                 style={{ maxHeight: '100px' }}
        //                 navbarScroll
        //             >
        //                 <Nav.Link href="#action1">Home</Nav.Link>
        //                 <Nav.Link href="#action2">Link</Nav.Link>
        //                 <NavDropdown title="Link" id="navbarScrollingDropdown">
        //                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
        //                 </NavDropdown>
        //                 <Nav.Link href="#" disabled>
        //                     Link
        //                 </Nav.Link>
        //             </Nav>
        //             <Form className="d-flex">
        //                 <Form.Control
        //                     type="search"
        //                     placeholder="Search"
        //                     className="me-2"
        //                     aria-label="Search"
        //                 />
        //                 <Button variant="outline-success">Search</Button>
        //             </Form>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>

    )
}

export default Header
