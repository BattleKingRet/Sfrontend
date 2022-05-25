import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import collectionImage from "../../assets/images/collectionImage.svg";
import dummyImage from "../../assets/icons/dummyImage.svg"

const PopularCollection = () => {
    return (
        <div className="popular-collection-section">
            <Container className="popular-collection-container">
                <Row>
                    <Col
                        className="section-title"
                        style={{ margin: "40px 0 20px 0" }}
                    >
                        Popular Collections
                    </Col>
                </Row>
                <Row className="popular-collection-row">
                    <Col className="popular-collection-col">
                        <div className="popularCollectionBox">
                            <div className="popularCollectionBoxImages">
                                <div>
                                    <img src={collectionImage} alt="" />
                                    <img src={collectionImage} alt="" />
                                </div>
                                <div>
                                    <img src={collectionImage} alt="" />
                                    <img src={collectionImage} alt="" />
                                </div>
                            </div>
                            <div className="popularCollectionBoxDetails">
                              <img src={dummyImage} alt="a" />
                              <div>
                                <h3>Metaverse</h3>
                                <p>Created by <span>User</span></p>
                              </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="popular-collection-col">
                        <div className="popularCollectionBox">
                            <div className="popularCollectionBoxImages">
                                <div>
                                    <img src={collectionImage} alt="" />
                                    <img src={collectionImage} alt="" />
                                </div>
                                <div>
                                    <img src={collectionImage} alt="" />
                                    <img src={collectionImage} alt="" />
                                </div>
                            </div>
                            <div className="popularCollectionBoxDetails">
                              <img src={dummyImage} alt="a" />
                              <div>
                                <h3>Metaverse</h3>
                                <p>Created by <span>User</span></p>
                              </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="popular-collection-col">
                        <div className="popularCollectionBox">
                            <div className="popularCollectionBoxImages">
                                <div>
                                    <img src={collectionImage} alt="" />
                                    <img src={collectionImage} alt="" />
                                </div>
                                <div>
                                    <img src={collectionImage} alt="" />
                                    <img src={collectionImage} alt="" />
                                </div>
                            </div>
                            <div className="popularCollectionBoxDetails">
                              <img src={dummyImage} alt="a" />
                              <div>
                                <h3>Metaverse</h3>
                                <p>Created by <span>User</span></p>
                              </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                  <Col className="btn-col">
                    <Button className="explore-moreBtn">Explore More</Button>
                  </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PopularCollection;
