import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios'
const BrowseStock = () => {
    let navigate = useNavigate();
    const [stock, setStock] = useState(0);
    const [stockData,setStockData] = useState('');

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>StockName | StockMonkey</title>
            </Helmet>
            <Container className="search-container">
                <Row>
                    <Col className="search-column">
                        {/* <input
                            placeholder="Enter Stock Name"
                            type="text"
                            onChange={(e) => setStock(e.target.value)}
                        /> */}
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={stock}
                            label="Stock"
                            onChange={(e) => setStock(e.target.value)}
                            className="w-1/2"
                        >
                            <MenuItem default value={'bhartiartltestprid'}>Bharti Airtel</MenuItem>
                            <MenuItem value={'ciplatestprid'}>Cipla</MenuItem>
                            <MenuItem value={'indusindbktestprid'}>Indusind Bank</MenuItem>
                        </Select>
                        <Button
                            className="predict mt-4"
                            onClick={() => {
                                navigate(`/stock/${stock}`);
                            }}
                        >
                            Predict
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BrowseStock;
