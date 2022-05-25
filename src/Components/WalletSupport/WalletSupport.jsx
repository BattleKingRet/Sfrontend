import React from 'react';
import {Container,Row,Col} from "react-bootstrap";

import polygon from "../../assets/images/polygon.svg";
import coinbase from "../../assets/images/coinbase.svg";
import metamask from "../../assets/images/metamask.svg";
import binance from "../../assets/images/binance.svg";
import ethereum from "../../assets/images/ethereum.svg";

const WalletSupport = () => {
  return (
    <div className="wallet-support">
      <Container className="wallet-support-container">
        <Row><div className="section-heading-2">Wallet We Support</div></Row>
        <Row className="wallet-support-row">
          <Col xs={6} md={3} xl={2} className="wallet-support-col">
            <div className="wallet-app">
              <img src={polygon} alt="polygon"/>
            </div>
          </Col>
          <Col xs={6} md={3} xl={2} className="wallet-support-col">
            <div className="wallet-app">
              <img src={coinbase} alt="coinbase"/>
            </div>
          </Col>
          <Col xs={6} md={3} xl={2} className="wallet-support-col">
            <div className="wallet-app">
              <img src={metamask} alt="metamask"/>
            </div>
          </Col>
          <Col xs={6} md={3} xl={2} className="wallet-support-col">
            <div className="wallet-app">
              <img src={binance} alt="binance"/>
            </div>
          </Col>
          <Col xs={6} md={3} xl={2} className="wallet-support-col">
            <div className="wallet-app">
              <img src={ethereum} alt="ethereum"/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WalletSupport