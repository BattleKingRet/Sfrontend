import React, {useState} from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const BrowseStock = () => {
  let navigate = useNavigate();
  const [stock,setStock] = useState(0);
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>StockName | StockMonkey</title>
            </Helmet>
            <Container className="search-container">
              <Row>
                <Col className="search-column">
                    <input placeholder="Enter Stock Name" type="text" onChange={(e) => setStock(e.target.value) }/>
                    <Button className="predict" onClick={() => { navigate(`/stock/${stock}`)}}>
                            Predict
                        </Button>
                </Col>
              </Row>
            </Container>
        </div>
    );
};

export default BrowseStock;
