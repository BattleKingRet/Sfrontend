import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import NFTCard from "../NFTCard/NFTCard";

const LiveAuctions = () => {
    return (
        <div className="live-auctions-section">
            <Container className="live-auctions-container">
                <Row>
                    <Col className="section-title">Live Auctions</Col>
                </Row>
                <Row className="live-auctions-cards">
                  <Col xs={12} lg={6} xl={4} className="live-auctions-col">
                    <NFTCard/>
                  </Col>
                  <Col xs={12} lg={6} xl={4} className="live-auctions-col">
                    <NFTCard/>
                  </Col>
                  <Col xs={12} lg={6} xl={4} className="live-auctions-col">
                    <NFTCard/>
                  </Col>
                </Row>
                <Row className="view-more-btn">
                  <div className="view">View More</div>
                </Row>
            </Container>
        </div>
    );
};

export default LiveAuctions;
