import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LineChart from "../../Components/LineChart/LineChart";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const StockPage = () => {
    let location = useLocation();
    let { id } = useParams();
    const predictStock = async () => {
        alert("HI YOU GUYS WILL BE INTEGRATING PREDICT FUNCTION HERE)");
    };
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>StockName | StockMonkey</title>
            </Helmet>
            <Container className="stockpage-section-container">
                <Row className="stockpage-row">
                    <Col xs={12} className="stock-price-heading">
                        <div>
                            <h2>{id}</h2>
                        </div>
                        <div className="stock-price">
                            <span>242.24 $</span>
                            <p>2.43 %</p>
                        </div>
                    </Col>

                    <Col xs={12}>
                        <LineChart />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h2 className="stockPage-sectionHeading">
                            Predict Stock Price
                        </h2>
                    </Col>
                    <Col xs={12}>
                        <p className="predictionModel">
                            Predict Stock for next 10 days using machine
                            learning model:{" "}
                        </p>
                        <Button className="predict" onClick={predictStock}>
                            Predict
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h2 className="stockPage-sectionHeading">
                            Fundamentals
                        </h2>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="stockAttributes">
                            <p>Market Cap</p>
                            <span>1221</span>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="stockAttributes">
                            <p>Market Cap</p>
                            <span>1221</span>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="stockAttributes">
                            <p>Market Cap</p>
                            <span>1221</span>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="stockAttributes">
                            <p>Market Cap</p>
                            <span>1221</span>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="stockAttributes">
                            <p>Market Cap</p>
                            <span>1221</span>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="stockAttributes">
                            <p>Market Cap</p>
                            <span>1221</span>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="stockAttributes">
                            <p>Market Cap</p>
                            <span>1221</span>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="stockAttributes">
                            <p>Market Cap</p>
                            <span>1221</span>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <h2 className="stockPage-sectionHeading">
                            About Company
                        </h2>
                    </Col>
                    <Col xs={12}>
                        <p className="stockAttributes">
                            Kotak Mahindra Bank Limited is a bank. The Bank's
                            segments include Treasury, BMU and Corporate centre,
                            which includes dealing in debt, equity, money
                            market, forex market, derivatives and investments
                            and primary dealership of Government securities and
                            Balance Sheet Management unit (BMU); Retail Banking,
                            which includes lending and credit cards;
                            Corporate/Wholesale Banking, which includes
                            wholesale borrowings and lending, and other related
                            services; Vehicle Financing, which includes retail
                            vehicle finance and wholesale trade finance; Other
                            Lending Activities, which includes financing against
                            securities and other loans; Broking, which is
                            engaged in market transactions done on behalf of
                            clients; Advisory and Transactional Services, which
                            provide financial advisory and transactional
                            services; Asset Management, which manages
                            investments on behalf of clients and funds, and
                            Insurance, which provides life insurance and general
                            insurance.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default StockPage;
