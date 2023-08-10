import React from "react";
import { Container, Row, Col, Button, Card, Carousel, Form } from "react-bootstrap";
import NavbarComponent from '../components/navbar.component'
import FooterComponent from '../components/footer.component'
import thrive from '../img/Jones/thrive.png';
import united from '../img/Jones/united.png';
import yahoo from '../img/Jones/yahoo.png';
import influencive from '../img/Jones/influencive.webp';

const Feature = () => {
    return (
       
    <Container fluid>
    <Row>
        <Col className="p-0">
            <section className="bannerArea mt-5 ">
            <Container fluid>
                <Row>
                    <Col>
                        <Container fluid className="pt-5 pb-5">
                            <Row>
                                <Col className="p-0">
                                    <Container className="starImg">
                                        <Row className="justify-content-center align-items-center h-100">  
                                            <Col sm={12} md={8} className="text-center h-100 d-flex">
                                                <Container fluid className="pt-5 pb-5">
                                                    <Row>
                                                        <Col className="pt-5 pb-5">
                                                            <br />
                                                            <h2 className="sectionMainHeading">Press Features</h2>
                                                            <p className="mt-5">Jay Jones — The 23 Years old Social Media Marketing Expert who is Helping Artists And Brands Increase Their Reach </p>
                                                            <Button className="mt-5" variant="primary" size="lg">Contact Me</Button>{' '}
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </Col>
                                        </Row>
                                    </Container> 
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            </section>
            <section>
            <Container fluid className="mt-5 pb-5 featuresContantArea">
                <Row>
                    <Col>
                        <Container fluid className="pt-5 pb-5 position-relative">
                            <Row>
                                <Col>
                                    <Container>
                                        <Row>
                                            <Col md={6} className="d-flex align-items-center pt-5 pb-5">
                                            <a href="https://theubj.com/featured/7596/jay-jones-the-social-media-genius-who-works-with-a-list-celebrities/" className="text-nowrap text-center" target="_blank">
                                                <img src={united} style={{height:"40px"}}/>
                                            </a>
                                            </Col>

                                            <Col md={6} className="d-flex align-items-center pt-5 pb-5">
                                            <a href="https://thriveglobal.com/stories/jay-jones-shares-golden-rules-of-personal-branding/" className="text-nowrap text-center" target="_blank">
                                                <img src={thrive} style={{height:"40px"}}/>
                                            </a>
                                            </Col>

                                            <Col md={6}  className="d-flex align-items-center pt-5 pb-5">
                                            <a href="https://finance.yahoo.com/news/internet-entrepreneur-jay-jones-set-152500901.html" className="text-nowrap text-center" target="_blank">
                                                <img src={yahoo} style={{height:"40px"}}/>
                                            </a>
                                            </Col>

                                          

                                            <Col md={6}  className="d-flex align-items-center pt-5 pb-5">
                                            <a href=" https://www.influencive.com/jay-jones-the-23-years-old-social-media-marketing-expert-who-is-helping-artists-and-brands-increase-their-reach/" className="text-nowrap text-center" target="_blank">
                                                <img src={influencive} style={{height:"40px"}}/>
                                            </a>
                                            </Col>
                                        </Row>

                                    </Container>
                                </Col>
                            </Row> 
                        </Container>
                    </Col>
                </Row>
            </Container>
            </section>
            <section>
            <Container fluid>
                    <Row className="">
                        <Col className="section-5 pb-5 pt-5 align-itens-center d-flex">
                            <Container>
                                <Row className="align-items-center justify-content-center h-100">
                                    <Col md={6}>
                                        <h2 className="sectionMainHeading mb-5">
                                            Contact Me
                                        </h2>

                                        <Form>
                                            <Container>
                                                <Row>
                                                    <Col md={6} className="mb-5">
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                            <Form.Control size="lg" type="email" placeholder="name@example.com" />
                                                        </Form.Group>
                                                    </Col> 

                                                    <Col md={6} className="mb-5">
                                                        <Form.Group className="mb-3 rounded-pill border-primary" controlId="exampleForm.ControlInput1">
                                                            <Form.Control size="lg" type="email" placeholder="name@example.com" />
                                                        </Form.Group>
                                                    </Col> 

                                                    <Col sm={12} className="mb-5">
                                                        <Form.Group className="mb-3 rounded-pill border-primary" controlId="exampleForm.ControlTextarea1">
                                                            <Form.Control as="textarea" rows={3} />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col sm={12} className="mb-5">
                                                        <Button variant="outline-primary" className="w-50 rounded-pill bg-white text-dark" size="lg">Send Message</Button>{' '}
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Form>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
            </Container>
            </section>
        </Col>
        </Row>
        <FooterComponent />
    </Container>
    );
};

export default Feature;