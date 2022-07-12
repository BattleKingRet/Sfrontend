import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LineChart from "../../Components/LineChart/LineChart";
import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";

const StockPage = () => {
    const [stockData, setStockData] = useState("");
    const [actualValue,setActualValue] = useState("")
    const [predictedValue,setPredictedValue] = useState([])
    let location = useLocation();
    let { id } = useParams();
    const predictStock = async () => {
        alert("HI YOU GUYS WILL BE INTEGRATING PREDICT FUNCTION HERE)");
    };

    const getStock = async (stockName) => {
        try {
            const getData = await axios.get(
                `http://stockmonkey.ninja:8080/${stockName}`
            );
            let search = ''
            if(stockName == 'bhartiartltestprid') {
                search = 'bhartiartl'
            }
            else if (stockName == 'ciplatestprid') {
                search = 'cipla'

            }
            else if(stockName == 'indusindbktestprid') {
                search = 'indusindbk'
            }
            const getActual = await axios.get(`http://stockmonkey.ninja:8080/${stockName}`)
            console.log('getActual.data ',getActual.data)
            let pValue = []
            for(let j=0;j<getActual.data.length;j++) {
                pValue.push(getActual.data[j])
                setActualValue(getActual.data[j])
            }
            setStockData(getData.data);
            let tempArr = []

            for(let i =0;i<getData.data.length;i++) {
                tempArr.push(getData.data[i].predictedvalue)
            }
            setPredictedValue(tempArr)
        } catch (err) {
            console.log(err);
        }
    };
    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
    ];

    const data = {
        labels,
        datasets: [
            {
                label: "Predicted",
                data: predictedValue,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "Actual",
                data: actualValue,
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
        ticks: {
            min: 0,
            max: 100,
            stepSize: 5 // <----- This prop sets the stepSize
          }
    };
    useEffect(() => {
        getStock(id);
    }, [id]);
    useEffect(() => {
        getStock(id);
    }, []);

    useEffect(() => {
        console.log(stockData);
    }, [stockData]);
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
                        {/* <div className="stock-price">
                            <span>242.24 $</span>
                            <p>2.43 %</p>
                        </div> */}
                    </Col>

                    <Col xs={12}>
                        <LineChart data={data}/>
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
                        {/* <Button className="predict" onClick={predictStock}>
                            Predict
                        </Button> */}
                    </Col>
                </Row>
                {/* <Row>
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
                </Row> */}

                {/* <Row>
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
                </Row> */}
            </Container>
        </>
    );
};

export default StockPage;
