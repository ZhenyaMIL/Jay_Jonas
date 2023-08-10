import React from "react";
import { Container, Row, Col, Button, Card, Carousel, Form } from "react-bootstrap";
import NavbarComponent from '../components/navbar.component'
import FooterComponent from '../components/footer.component'
import ServiceBanner from '../img/Jones/service_banner.svg';
import Icon1 from '../img/Jones/icons/icon.svg';
import Icon2 from '../img/Jones/icons/icon_1.svg';
import Icon3 from '../img/Jones/icons/icon_2.svg';
import Icon4 from '../img/Jones/icons/icon_3.svg';
import Icon5 from '../img/Jones/icons/icon_4.svg';
import Icon6 from '../img/Jones/icons/icon_5.svg';

const Service = () => {
    return (
       
        <Container fluid>

    <Row>
        <Col className="p-0">
            <Container fluid className="mt-5 pt-5 pb-5 bannerArea">
                <Row>
                    <Col>
                    <Container className="starImg">
                            <Row className="justify-content-center align-items-center h-100">          
                                <Col sm={12} md={8} className="text-center h-100 d-flex">
                                    <Container fluid className="pt-5 pb-5">
                                        <Row>
                                            <Col className="pt-5 pb-5">
                                                <br />
                                                <h2 className="sectionMainHeading">Services I Provide</h2>
                                                <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sociis maecenas adipiscing accumsan pretium ultrices scelerisque. Sed sit nunc lacus, odio rhoncus diam, non urna venenatis. </p>
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
        
    <Row>
        <Col>
            <Container className="mt-5">
                <Row className="pb-5 pt-5">
                    <Col md={6}>
                        <div class="border p-4 mb-5 rounded-3">
                            <div class="d-flex align-items-center">
                                <span><img src={Icon1} /></span>
                                <span className="fs-20 ms-3 text-start text-primary">Social media growth</span> 
                            </div>
                            <p className="text-start mt-3 fs-16"> Tailored marketing strategies to help grow social media presence via celebrity giveaways, targeted ad campaigns and high level celebrity/influencer marketing.</p>
                        </div>      
                    </Col>
                            
                    <Col md={6}>
                        <div class="border p-4 mb-5 rounded-3">
                            <div class="d-flex align-items-center">
                                <span><img src={Icon2} /></span>
                                <span className="fs-20 ms-3 text-start">Press Release</span>
                            </div>
                            <p className="text-start mt-3 fs-16">Tailor made PR packages, featuring you on some of the worlds biggest publications such as Forbes, Yahoo Finance, Manchester Evening News and more.</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="border p-4 mb-5 rounded-3">
                            <div class="d-flex align-items-center">
                                    <span><img src={Icon3} /></span>
                                    <span className="fs-20 ms-3 text-start">Brand Strategy Consulting</span>
                            </div>
                            <p className="text-start mt-3 fs-16">Assisting companies to define, sharpen and grow their brand reputation over a give period of time.</p>
                        </div>
                        </Col>
                            <Col md={6}>
                                <div class="border p-4 mb-5 rounded-3">
                                    <div class="d-flex align-items-center">
                                        <span><img src={Icon4} /></span>
                                        <span className="fs-20 ms-3 text-start">Talent Booking</span>
                                    </div>
                                    <p className="text-start mt-3 fs-16"> Assisting brands to book and negotiate fees with A-list celebrities and influencers for campaigns across all social media platforms.</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div class="border p-4 mb-5 rounded-3">
                                    <div class="d-flex align-items-center">
                                        <span><img src={Icon5} /></span>
                                        <span className="fs-20 ms-3 text-start">Content creation</span>
                                    </div>
                                    <p className="text-start mt-3 fs-16">Monthly retainer plans for complete content creation and branding for all social media platforms.</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div class="border p-4 mb-5 rounded-3">
                                    <div class="d-flex align-items-center">
                                        <span><img src={Icon6} /></span>
                                        <span className="fs-20 ms-3 text-start">Start Up Investor</span>
                                    </div>
                                    <p className="text-start mt-3 fs-16"> I am always open to hearing about new business opportunities, especially within the Web 3 community, where I would be prepared to offer financial backing, knowledge and guidance within this rapidly evolving space. The longevity is something I look for in any project pitched to me and would only invest in something I truly believe in.</p>
                                </div>
                            </Col>
                </Row>
            </Container>
        </Col>
    </Row>

    <FooterComponent />

    </Container>

    );
};

export default Service;