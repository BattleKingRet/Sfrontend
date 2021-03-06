import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import imageOne from "../../assets/images/homeBottom.svg";
import { NavLink } from "react-router-dom";

const HomeBottomInfo = () => {
    return (
        <div className="home-bottom-info">
            <Container className="home-bottom-container">
                <Row className="home-bottom-row">
                    <Col xs={12} sm={12} lg={6} className="home-bottom-col-1">
                        <img src={imageOne} alt="home"/>
                    </Col>
                    <Col xs={12} sm={12} lg={6} className="home-bottom-col-2">
                        <div className="home-bottom-top"><h1>Learn About Stock Market</h1>
                        <NavLink to="/learn">
                        <Button className="btn-primary btn_green btn-signUp">Now</Button></NavLink></div>
                        
                       
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeBottomInfo;
