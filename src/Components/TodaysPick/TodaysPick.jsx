import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NFTCardTwo from "../NFTCard/NFTCardTwo";
import {Button} from "react-bootstrap";

const TodaysPick = () => {
    return (
        <div className="todays-pick-section">
            <Container className="todays-pick-container">
                <Row>
                    <Col
                        className="section-title"
                        style={{ textAlign:"center", margin: "40px 0 20px 0" }}
                    >
                        Today's Pick
                    </Col>
                </Row>
                <Row className="todays-pick-row">
                  <Col xs={12} lg={6} xl={4} className="todays-pick-col">
                      <NFTCardTwo/>
                  </Col>
                  <Col xs={12} lg={6} xl={4} className="todays-pick-col">
                      <NFTCardTwo/>
                  </Col>
                  <Col xs={12} lg={6} xl={4} className="todays-pick-col">
                      <NFTCardTwo/>
                  </Col>
                  <Col xs={12} lg={6} xl={4} className="todays-pick-col">
                      <NFTCardTwo/>
                  </Col>
                  <Col xs={12} lg={6} xl={4} className="todays-pick-col">
                      <NFTCardTwo/>
                  </Col>
                  <Col xs={12} lg={6} xl={4} className="todays-pick-col">
                      <NFTCardTwo/>
                  </Col>
                </Row>
                <Row className="todays-pick-row">
                  <Col className="btn-col">
                    <Button className="explore-moreBtn">Explore More</Button>
                  </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TodaysPick;
