import React from "react";
import {Link,useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card, Carousel, Form } from "react-bootstrap";
import FooterComponent from '../components/footer.component'
import Banner from '../img/Jones/banner.jpg';
import BannerSection from '../img/Jones/banner_2.jpg';
import JayJones from '../img/Jones/jayjones.jpg';
import Icon1 from '../img/Jones/icons/icon.svg';
import Icon2 from '../img/Jones/icons/icon_1.svg';
import Icon3 from '../img/Jones/icons/icon_2.svg';
import Icon4 from '../img/Jones/icons/icon_3.svg';
import Icon5 from '../img/Jones/icons/icon_4.svg';
import Icon6 from '../img/Jones/icons/icon_5.svg';

import LogoNike from '../img/Jones/company/elevenstart.png';
import LogoAws from '../img/Jones/company/Instant.png';
import LogoIntel from '../img/Jones/company/meta.png';
import LogoIbm from '../img/Jones/company/nft-islands.png';
import LogoTimes from '../img/Jones/logo_times.svg';

import LogoYahoo from '../img/Jones/yahoo.png';
import LogoThrive from '../img/Jones/thrive.png';

import LogoMetro from '../img/Jones/thrive.png';

import LogoUnited from '../img/Jones/united.png';
import LogoInfluencive from '../img/Jones/influencive.png';

import LogoBbc from '../img/Jones/logo_bbc.svg';
import LogoForbs from '../img/Jones/logo_forbs.svg';
import LogoUs from '../img/Jones/logo_ustoday.svg';
import LogoEnter from '../img/Jones/logo_enter.svg';
import LogoCnn from '../img/Jones/logo_cnn.svg';
import ImgBlog1 from '../img/Jones/BlogHome1.jpg';
import ImgBlog2 from '../img/Jones/BlogHome2.jpg';
import ImgBlog3 from '../img/Jones/BlogHome3.jpg';
import ImgBlog4 from '../img/Jones/BlogHome4.png';
const Home = () => {

    const navigate = useNavigate();
    return (
        
        <Container fluid>
           

            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <div className="bannerContainer position-relative">   
                                    <img src={Banner} class="img-fluid" />
                                    <div className="position-absolute top-0 left-0 w-100 h-100 d-none d-md-block">
                                        <Container fluid className="h-100">
                                            <Row className="align-items-center h-100">
                                                <Col md={3} className="text-start">
                                                    <h1 className="sectionHeading">Jay Jones</h1>
                                                    <h2 className="sectionMainHeading">Profession</h2>
                                                    <p> Internet Entrepreneur</p>
                                                    <p>Specialising in Social Media marketing, SEO and Web3 P2E gaming development.</p>
                                                    {/* <Button variant="primary" size="lg">Contact Me</Button>{' '} */}
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            <Row>
                <Col className="section-2">
                    <Container fluid className="p-0">
                        <Row>
                            <Col md={6} className="p-0">
                                <img src={JayJones} className="img-fluid" />
                            </Col>

                            <Col md={4}>
                                <Container fluid className="h-100">
                                    <Row className="align-items-center h-100">
                                        <Col className="text-start">
                                            <h2 className="sectionHeading">Over the past four years I have been heavily involved within the online marketing sector.</h2>
                                            <br/>
                                            <p> In the past two years, I have specialised in multiple areas of social media marketing which include social media content creation, website design, SEO, platform development, PR distribution, social media growth and celebrity bookings.</p>
                                            <br/>
                                            <p>The last 2 years I have witnessed technology developing at an extremely fast rate, I personally see huge potential in blockchain based gaming within the next few years.</p>
                                            <Button onClick={() => navigate("about-me")} variant="primary" size="lg">Read More</Button>{' '}
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>

                        </Row>
                    </Container>
               </Col>
            </Row>

            <Row>
                <Col className="section-3 pb-5 pt-5">
                    <Container>
                        <Row>
                            <Col>
                                <h1 className="sectionMainHeading mt-5">Section</h1>
                            </Col>
                        </Row>
                        <Row className="pb-5">
                            <Col md={4} className="mb-4">
                                <div class="d-flex align-items-center h-100 mb-5">
                                    <span className="w-25 text-start"><img src={Icon1} className="img-fluid" /></span>
                                    <span className="w-75 fs-20 ms-3 text-start">Social Media Growth</span>
                                </div>
                                
                            </Col>
                            <Col md={4} className="mb-4">
                                <div class="d-flex align-items-center h-100 mb-5">
                                        <span className="w-25 text-start"><img src={Icon2}  className="img-fluid" /></span>
                                        <span className="w-75 fs-20 ms-3 text-start">Press Release</span>
                                </div>
                            </Col>
                            <Col md={4} className="mb-4">
                                <div class="d-flex align-items-center h-100 mb-5">
                                    <span className="w-25 text-start"><img src={Icon3}  className="img-fluid" /></span>
                                    <span className="w-75 fs-20 ms-3 text-start">Brand Strategy Consulting</span>
                                </div>
                            </Col>
                            <Col md={4} className="mb-4">
                                <div class="d-flex align-items-center h-100 mb-5">
                                    <span className="w-25 text-start"><img src={Icon4}  className="img-fluid" /></span>
                                    <span className="w-75 fs-20 ms-3 text-start">Talent Booking</span>
                                </div>
                            </Col>
                            <Col md={4} className="mb-4">
                                <div class="d-flex align-items-center h-100 mb-5">
                                    <span className="w-25 text-start"><img src={Icon5}  className="img-fluid" /></span>
                                    <span className="w-75 fs-20 ms-3 text-start">Content Creation</span>
                                </div>
                            </Col>
                            <Col md={4} className="mb-4">
                                <div class="d-flex align-items-center h-100 mb-5">
                                    <span className="w-25 text-start"><img src={Icon6}  className="img-fluid" /></span>
                                    <span className="w-75 fs-20 ms-3 text-start">Start Up Investor</span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Container className="pt-5 pb-5">
                        <Row>
                            <Col sm={12} lg={12}>
                                <Container className="h-100">
                                     <Row className="align-items-center justify-content-center h-100">
                                        <Col className="">
                                            <h2 className="sectionMainHeading">Companies  Associated With</h2>
                                        </Col>
                                    </Row><br/><br/>
                                </Container>
                            </Col>
                            <Col sm={12} lg={12}>
                                <Container>
                                    <Row>
                                        <Col sm={12} md={3}>
                                            <img src={LogoNike} className="mb-5 img-fluid" />
                                        </Col>
                                        <Col sm={12} md={3}>
                                            <img src={LogoAws}  className="mb-5 img-fluid" />
                                        </Col>
                                   
                                        <Col sm={12} md={3}>
                                            <img src={LogoIbm} className="mb-5 img-fluid"  />
                                        </Col>
                                        <Col sm={12} md={3}>
                                            <img src={LogoIntel} className="mb-5 img-fluid"  />
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Col>            
            </Row>

            <Row className="">
                <Col className="section-4 pb-5 pt-5 align-itens-center d-flex">
                    <Container>
                        <Row className="align-items-center justify-content-center h-100">
                            <Col md={12}>
                                <h2 className="sectionMainHeading mt-5 mb-5">Featured In</h2>
                                <Container fluid>
                                    <Row>
                                        <Col className="d-flex align-items-center pt-5 pb-5">
                                            <a href="https://finance.yahoo.com/news/internet-entrepreneur-jay-jones-set-152500901.html" className="text-nowrap text-center" target="_blank">
                                                <img src={LogoYahoo} style={{height:"40px"}}/>
                                            </a>
                                        </Col>
                                        <Col className="d-flex align-items-center pt-5 pb-5">
                                            <a href="https://theubj.com/featured/7596/jay-jones-the-social-media-genius-who-works-with-a-list-celebrities/" className="text-nowrap text-center" target="_blank">
                                                <img src={LogoUnited} style={{height:"40px"}}/>
                                            </a>
                                        </Col>
                                        <Col className="d-flex align-items-center pt-5 pb-5">
                                            <a href="https://thriveglobal.com/stories/jay-jones-shares-golden-rules-of-personal-branding/" className="text-nowrap text-center" target="_blank">
                                                <img src={LogoThrive} style={{height:"40px"}}/>
                                            </a>
                                        </Col>
                                        <Col className="d-flex align-items-center pt-5 pb-5">
                                            <a href=" https://www.influencive.com/jay-jones-the-23-years-old-social-media-marketing-expert-who-is-helping-artists-and-brands-increase-their-reach/" className="text-nowrap text-center" target="_blank">
                                                <img src={LogoInfluencive} style={{height:"40px"}}/>
                                            </a>
                                        </Col>
                                        {/* <Col className="d-flex align-items-center pt-5 pb-5">
                                            <img src={LogoEnter} />
                                        </Col>
                                        <Col className="pt-5 pb-5">
                                            <img src={LogoCnn} />
                                        </Col> */}
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Container className="pt-5 pb-5">
                        <Row>
                            <Col md={3}>
                                <h1 className="sectionMainHeading mb-5">My Blog</h1>
                                <Link to="/blog"><Button variant="primary" size="lg">Show More</Button></Link>{' '}
                            </Col>
                            <Col md={9}>
                                <Container fluid>
                                    <Row>
                                        <Col md={6} className="d-flex align-items-center mb-5">
                                            <Link to="/blog" style={{color:"black"}}>
                                                <div className="bgThemeColor rounded-3 lh-0">
                                                    <img src={ImgBlog1} className="img-fluid" />
                                                    <span className="d-inline-block p-4 fs-16 ms-3 text-start lh-20">Web 3.0 Shaping the<br/> Future of Finance                                                   <br/>consectetur adipiscing elit.
                                                    </span>
                                                </div>
                                            </Link>
                                        </Col>
                                        
                                        
                                        <Col md={6} className="d-flex align-items-center mb-5">
                                            <Link to="/blog" style={{color:"black"}}>
                                                <div className="bgThemeColor rounded-3 lh-0">
                                                    <img src={ImgBlog2} className="img-fluid" />
                                                    <span className="d-inline-block p-4 fs-16 ms-3 text-start lh-20">What is a Crypto
                                                    Wallet?
                                                    </span>
                                                </div>
                                            </Link>
                                        </Col>

                                        <Col md={6} className="d-flex align-items-center mb-5">
                                            <Link to="/blog" style={{color:"black"}}>
                                                <div className="bgThemeColor rounded-3 lh-0">
                                                    <img src={ImgBlog3} className="img-fluid" />
                                                    <span className="d-inline-block p-4 fs-16 ms-3 text-start lh-20">
                                                        How to Secure Your
                                                        <br/>Cryptocurrency from Theft?
                                                    </span>
                                                </div>
                                            </Link>
                                        </Col>

                                        <Col md={6} className="d-flex align-items-center mb-5 text-start">
                                            <Link to="/blog" style={{color:"black"}}>
                                                <div className="bgThemeColor rounded-3 lh-0">
                                                    <img src={ImgBlog4} className="img-fluid" />
                                                    <span className="d-inline-block p-4 fs-16 ms-3 text-start lh-20">
                                                        Can Cryptocurrency<br/> Survive Recession?
                                                    </span>
                                                </div>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Container>                            
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

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

            <FooterComponent />

        </Container>

    );
};

export default Home;