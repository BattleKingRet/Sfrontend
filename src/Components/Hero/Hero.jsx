import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import flowerRing from "../../assets/images/flower-ring.svg";
import Carousel from "react-material-ui-carousel";

//images
import heroA from "../../assets/images/hero-carousel-1.svg";
import carouselMask from "../../assets/images/carouselMask.svg";
import noiseMask from "../../assets/images/noiseMask.svg";
import doubleLine from "../../assets/images/double-line.svg";

const Hero = () => {
    return (
        <div>
            <Container className="hero-section-container">
                <Row className="hero-section-row">
                    <Col xs={12} md={6} className="hero-section-col-left">
                        <div className="hero-left">
                            <h1>
                            A new way to invest in stock market              
                            </h1>
                            <h2>
                            Stock Monkey - Now Predict Stock Prices based on machine Learning 
                            </h2>
                            <NavLink to="predict">
                            <div className="hero-left-btns">
                                <div className="createOwn">Predict Now</div>
                            </div></NavLink>
                        </div>
                    </Col> 
                    {/* carousel slider */}
                    <Col xs={12} md={6} className="hero-section-col-right">
                        <img
                            className="carouselMask"
                            src={carouselMask}
                            alt="mask"
                        />
                        <Carousel
                            className="hero-carousel-container"
                            animation="slide"
                            duration="400"
                            autoplay="false"
                            swipe="true"
                            indicatorIconButtonProps={{
                                style: {
                                    
                                    color: "#A9A9A9", // 3
                                    
                                },
                            }}
                            activeIndicatorIconButtonProps={{
                                style: {
                                    backgroundColor: "#20BD69", // 2
                                    color:"#20BD69",
                                    
                                },
                            }}
                        >
                            <div className="hero-carousel-col">
                                A
                                <img src={heroA} alt="" />
                            </div>
                            <div className="hero-carousel-col">
                                <img src={heroA} alt="" />
                            </div>
                            <div className="hero-carousel-col">
                                <img src={heroA} alt="" />
                            </div>
                            <div className="hero-carousel-col">
                                <img src={heroA} alt="" />
                            </div>
                            <div className="hero-carousel-col">
                                <img src={heroA} alt="" />
                            </div>
                            <div className="hero-carousel-col">
                                <img src={heroA} alt="" />
                            </div>
                        </Carousel>
                    </Col>
                    <div className="hero-line">
                        <img src={doubleLine} alt="line"/>
                    </div>
                </Row>
                
            </Container>
            

        </div>
    );
};

export default Hero;
