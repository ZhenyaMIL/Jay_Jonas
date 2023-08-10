import React from "react";
import { Navbar, Nav, ListGroup,Form, FormControl, Offcanvas, Button, Container, Row, Col } from "react-bootstrap";
import Logo from './../img/Jones/logo.svg';
import {Link,useLocation} from 'react-router-dom'

const NavbarComponent = () =>{

    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    
  return (
    <Container>
      <Row>
        <Col>
          <Navbar bg="transparent" expand="lg" className="pt-0">
            <Container fluid className="w-100">
              <Row className="w-100">
                  <Col sm="6" md="2">
                    <Navbar.Brand as={Link} to="/">
                      <img src={Logo} />
                    </Navbar.Brand>
                  </Col>
                  <Col sm="6" md="10">
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                          <Nav.Link className={splitLocation[1] === "" ? "menuLink active text-nowrap" : "menuLink text-nowrap"} as={Link} to="/">Home</Nav.Link>
                          <Nav.Link className={splitLocation[1] === "services" ? "menuLink active text-nowrap" : "menuLink text-nowrap"} as={Link} to="/services">Services</Nav.Link>
                          <Nav.Link className={splitLocation[1] === "talent-booking" ? "menuLink active text-nowrap" : "menuLink text-nowrap"} as={Link} to="/talent-booking">Talent Booking</Nav.Link>
                          <Nav.Link className={splitLocation[1] === "features" ? "menuLink active text-nowrap" : "menuLink text-nowrap"} as={Link} to="/features" >Features</Nav.Link>
                          <Nav.Link className={splitLocation[1] === "about-me" ? "menuLink active text-nowrap" : "menuLink text-nowrap"} as={Link} to="/about-me" >About Me</Nav.Link>
                          <Nav.Link className={splitLocation[1] === "blog" ? "menuLink active text-nowrap" : "menuLink text-nowrap"} as={Link} to="/blog" >Blog</Nav.Link>
                          <Nav.Link  className="bg-primary mt-4 btn-link" as={Link} to="/contact-me" >Contact Me</Nav.Link>
                        </Nav>
                      </Navbar.Collapse>
                  </Col>
              </Row>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
        )
};

export default NavbarComponent; 