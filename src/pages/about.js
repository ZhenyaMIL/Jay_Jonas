import React from "react";
import { Container, Row, Col, Button, Card, Carousel, Form } from "react-bootstrap";
import FooterComponent from '../components/footer.component'

const About = () => {
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
                                                                    <Col className="pt-5">
                                                                        <br />
                                                                        <h2 className="sectionMainHeading">About Me</h2>
                                                                        <p className="mt-5 fs-18">Over the past four years I have been heavily involved within the online marketing sector. The first year and a half of my experience was focused on helping to run advertisements, gaining vital knowledge and skills which enabled me to start up my own marketing company around two and a half years ago.
</p>
                                                                    </Col>
                                                                </Row>
                                                                
                                                                <Row className="mt-4">
                                                                    <Col>
                                                                        <p className="fs-18">In the past two years, I have specialised in multiple areas of social media marketing which include social media content creation, website design, SEO, platform development, PR distribution, social media growth and celebrity bookings.
</p>
                                                                    </Col>
                                                                </Row>
                                                                
  
                                                                <Row className="mt-4">
                                                                    <Col>
                                                                        <p className="fs-18">The last 2 years I have witnessed technology developing at an extremely fast rate, I personally see huge potential in blockchain based gaming within the next few years and feel it is important to implement the skills and knowledge I have acquired to contribute to the future of P2E gaming. Our vision at WebFi Group is to be at the forefront of the Web 3.0 gaming community, aiming to build the future of P2E games and contributing as much as possible to assist in the rapid growth of the Web 3.0 community. I will make it my mission to spread awareness and knowledge about its endless possibilities and opportunities to the world.,</p>
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
                        <Container fluid className="mt-5 pb-5">
                            <Row>
                                <Col>
                                    <Container className="pt-5 pb-5 position-relative">
                                        <Row>
                                            <Col><h3 className="fs-30 text-center mb-5 mt-5 text-primary">My Experience</h3></Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Container fluid className="timeLine position-relative">
                                                    <Row>
                                                        <Col></Col>
                                                        <Col className="rightColumn">
                                                            <div className="arrow-left arrow_box p-3 text-start fs-16">
                                                                <span className="text-primary">2016-2017</span>
                                                                <p> Edge Hill University</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="leftColumn">
                                                            <div className="arrow_right arrow_box p-3 text-start fs-16">
                                                                <span className="text-primary">2017-2018</span>
                                                                <p>Social media marketing career began, running numerous ads and content creation for small local businesses around the North West of the UK alongside a full time job.</p>
                                                            </div>
                                                        </Col>
                                                        <Col></Col>
                                                    </Row>
  
                                                    <Row>
                                                        <Col></Col>
                                                        <Col className="rightColumn">
                                                            <div className="arrow-left arrow_box p-3 text-start fs-16">
                                                                <span className="text-primary">2018</span>
                                                                <p>
                                                                Founded Instant Marketing Ltd,  one of the UK's leading social media marketing companies, focusing on increasing brands online presence through social media growth, press releases, paid advertisements, SEO and content creation.
                                                                </p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="leftColumn">
                                                            <div className="arrow_right arrow_box p-3 text-start fs-16">
                                                                <span className="text-primary">2019-2020</span>
                                                                <p>Instant Marketing Ltd added additional services to meet clients demands. We began to offer brand consulting, alongside talent booking with UK & USA based influencers.</p>
                                                            </div>
                                                        </Col>
                                                        <Col></Col>
                                                    </Row>
                                                    <Row>
                                                        <Col></Col>
                                                        <Col className="rightColumn">
                                                            <div className="arrow-left arrow_box p-3 text-start fs-16">
                                                                <span className="text-primary">2020-2021</span>
                                                                <p>
                                                                Instant Marketing Ltd introduced talent booking for hundreds of the worlds biggest celebrities including Floyd Mayweather, Georgina Rodriguez, Iggy Azalea, Barbara Palvin, Kat Graham and many more. Early 2021, Jay began to heavily educate himself around the Web3 space.                                                                </p>
                                                            </div>
                                                        </Col>
                                                    </Row>

                                                    <Row>
                                                        <Col className="leftColumn">
                                                            <div className="arrow_right arrow_box p-3 text-start fs-16">
                                                                <span className="text-primary">2021</span>
                                                                <p>
                                                                In early October 2021 Jay co-founded WebFi Group DMCC, a P2E gaming company that functions using blockchain technology. Jay and his co-founder Liam Derbyshire joined  forces with the vision to create the best P2E gaming experiences the world has seen, aiming to be at the forefront of the Web3 gaming industry.                                                                </p>
                                                            </div>
                                                        </Col>
                                                        <Col></Col>
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

export default About;