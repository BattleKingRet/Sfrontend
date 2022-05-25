import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import imageOne from "../../assets/images/homeBottom.svg";

const HomeBottomInfo = () => {
    return (
        <div className="home-bottom-info">
            <Container className="home-bottom-container">
                <Row className="home-bottom-row">
                    <Col xs={12} sm={12} lg={6} className="home-bottom-col-1">
                        <img src={imageOne} alt="home"/>
                    </Col>
                    <Col xs={12} sm={12} lg={6} className="home-bottom-col-2">
                        <div className="home-bottom-top">Create and sell your NFTs</div>
                        <div className="home-bottom-mid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</div>
                        <Button className="btn-primary btn_green btn-signUp">Sign Up Now</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeBottomInfo;
