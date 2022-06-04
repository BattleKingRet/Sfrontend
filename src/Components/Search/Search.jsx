import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import imageOne from "../../assets/images/homeBottom.svg";

const Search = () => {
    return (
        <div className="home-bottom-info">
            <Container className="home-bottom-container">
                <Row className="home-bottom-row">
                    <Col xs={12} sm={12} lg={6} className="home-bottom-col-1">
                        <img src={imageOne} alt="home"/>
                    </Col>
                    <Col xs={12} sm={12} lg={6} className="home-bottom-col-2">
                        <div className="home-bottom-top"><h1>Search stocks</h1></div>
                        <div className="home-bottom-mid"><h2>Go to search page</h2></div>

                        <NavLink to="/search">
                        <Button className="btn-primary btn_green btn-signUp">Now</Button>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Search;