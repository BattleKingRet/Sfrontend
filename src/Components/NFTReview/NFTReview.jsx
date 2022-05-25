import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import quotes from "../../assets/icons/quotes.svg";
import star from "../../assets/icons/star.svg";
import dummyImage from "../../assets/icons/dummyImage.svg"


const carouselResponsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 794, min: 0 },
        items: 1,
    },
};

const NFTReview = () => {
    return (
        <div className="nft-reviews-section">
            <Container className="nft-reviews-container">
                <Row className="nft-reviews-row">
                    <Col className="nft-reviews-col">
                        <h2>NFT Trust and Safety</h2>
                    </Col>
                </Row>
                <Row className="nft-reviews-row">
                    <Carousel
                        responsive={carouselResponsive}
                        infinite={true}
                        autoPlay={false}
                    >
                        <Col
                            xs={12}
                            lg={6}
                            xl={4}
                            xxl={3}
                            className="nft-reviews-col"
                        >
                            <div className="nft-reviews-box">
                                <div className="reviews-top">
                                    <img src={quotes} alt="quotes" />
                                    <div>
                                        <img src={star} alt="star" />
                                        <img src={star} alt="star" />
                                        <img src={star} alt="star" />
                                    </div>
                                </div>
                                <div className="reviews-mid">
                                    <p>
                                        sdafklsd jfljs dlfk dsjkl fjdlk sfj
                                        sddjj fkdslj flds jflkds jlfjd slkf
                                        jdslkf jkls djfl kdsjkfl jdskl fjkld
                                        jgklfjdkl gj df kljglkdf jkglkf djgklf
                                        jdg kljd fgl kj
                                    </p>
                                </div>
                                <div className="reviews-bot">
                                        <img src={dummyImage} alt="a" />
                                        <div>
                                            <h3>Metaverse</h3>
                                            <p>
                                                Created by <span>User</span>
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </Col>
                        <Col
                            xs={12}
                            lg={6}
                            xl={4}
                            xxl={3}
                            className="nft-reviews-col"
                        >
                            <div className="nft-reviews-box">
                                <div className="reviews-top">
                                    <img src={quotes} alt="quotes" />
                                    <div>
                                        <img src={star} alt="star" />
                                        <img src={star} alt="star" />
                                        <img src={star} alt="star" />
                                    </div>
                                </div>
                                <div className="reviews-mid">
                                    <p>
                                        sdafklsd jfljs dlfk dsjkl fjdlk sfj
                                        sddjj fkdslj flds jflkds jlfjd slkf
                                        jdslkf jkls djfl kdsjkfl jdskl fjkld
                                        jgklfjdkl gj df kljglkdf jkglkf djgklf
                                        jdg kljd fgl kj
                                    </p>
                                </div>
                                <div className="reviews-bot">
                                        <img src={dummyImage} alt="a" />
                                        <div>
                                            <h3>Metaverse</h3>
                                            <p>
                                                Created by <span>User</span>
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </Col>
                        <Col
                            xs={12}
                            lg={6}
                            xl={4}
                            xxl={3}
                            className="nft-reviews-col"
                        >
                            <div className="nft-reviews-box">
                                <div className="reviews-top">
                                    <img src={quotes} alt="quotes" />
                                    <div>
                                        <img src={star} alt="star" />
                                        <img src={star} alt="star" />
                                        <img src={star} alt="star" />
                                    </div>
                                </div>
                                <div className="reviews-mid">
                                    <p>
                                        sdafklsd jfljs dlfk dsjkl fjdlk sfj
                                        sddjj fkdslj flds jflkds jlfjd slkf
                                        jdslkf jkls djfl kdsjkfl jdskl fjkld
                                        jgklfjdkl gj df kljglkdf jkglkf djgklf
                                        jdg kljd fgl kj
                                    </p>
                                </div>
                                <div className="reviews-bot">
                                        <img src={dummyImage} alt="a" />
                                        <div>
                                            <h3>Metaverse</h3>
                                            <p>
                                                Created by <span>User</span>
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </Col>
                        <Col
                            xs={12}
                            lg={6}
                            xl={4}
                            xxl={3}
                            className="nft-reviews-col"
                        >
                            <div className="nft-reviews-box">
                                <div className="reviews-top">
                                    <img src={quotes} alt="quotes" />
                                    <div>
                                        <img src={star} alt="star" />
                                        <img src={star} alt="star" />
                                        <img src={star} alt="star" />
                                    </div>
                                </div>
                                <div className="reviews-mid">
                                    <p>
                                        sdafklsd jfljs dlfk dsjkl fjdlk sfj
                                        sddjj fkdslj flds jflkds jlfjd slkf
                                        jdslkf jkls djfl kdsjkfl jdskl fjkld
                                        jgklfjdkl gj df kljglkdf jkglkf djgklf
                                        jdg kljd fgl kj
                                    </p>
                                </div>
                                <div className="reviews-bot">
                                        <img src={dummyImage} alt="a" />
                                        <div>
                                            <h3>Metaverse</h3>
                                            <p>
                                                Created by <span>User</span>
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </Col>
                        <Col
                            xs={12}
                            lg={6}
                            xl={4}
                            xxl={3}
                            className="nft-reviews-col"
                        >
                            <div className="nft-reviews-box">
                                <div className="reviews-top">
                                    <img src={quotes} alt="quotes" />
                                    <div>
                                        <img src={star} alt="star" />
                                        <img src={star} alt="star" />
                                        <img src={star} alt="star" />
                                    </div>
                                </div>
                                <div className="reviews-mid">
                                    <p>
                                        sdafklsd jfljs dlfk dsjkl fjdlk sfj
                                        sddjj fkdslj flds jflkds jlfjd slkf
                                        jdslkf jkls djfl kdsjkfl jdskl fjkld
                                        jgklfjdkl gj df kljglkdf jkglkf djgklf
                                        jdg kljd fgl kj
                                    </p>
                                </div>
                                <div className="reviews-bot">
                                        <img src={dummyImage} alt="a" />
                                        <div>
                                            <h3>Metaverse</h3>
                                            <p>
                                                Created by <span>User</span>
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </Col>
                    </Carousel>
                </Row>
            </Container>
        </div>
    );
};

export default NFTReview;
