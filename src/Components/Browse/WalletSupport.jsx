import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import { NavLink } from "react-router-dom"; 
import imageOne from "../../assets/images/homeBottom.svg";
import Carousel from "react-material-ui-carousel";
import heroA from "../../assets/images/hero-carousel-1.svg";
import carouselMask from "../../assets/images/carouselMask.svg";

const Browse = () => {
    return (
        <div className="browse-bottom-info">
            <Container className="browse-bottom-container">
                <Row className="browse-bottom-row">
                    <Col xs={12} sm={12} lg={6} >
                    <div className="browse-bottom-mid-left"><h1>Go to browse page</h1>
                    <NavLink to="/browse">
                    <Button className="btn-primary btn_green btn-signUp">Now</Button></NavLink></div> 
                    </Col>
                    <Col xs={12} sm={12} lg={6} className="browse-bottom-col-2">
                        <div className="browse-bottom-top"><h1>Top stocks</h1></div>
                        <div className="browse-bottom-mid-right"><h2>Go to search page</h2></div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Browse;