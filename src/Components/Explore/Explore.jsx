import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import walletExplore from "../../assets/images/walletExplore.svg";
import collectionExplore from "../../assets/images/collectionExplore.svg";
import nftExplore from "../../assets/images/nftExplore.svg";
import saleExplore from "../../assets/images/saleExplore.svg";

const Explore = () => {
    return (
        <div className="explore-section">
            <Container>
                <Row>
                    <Col className="section-title">Explore</Col>
                </Row>
                <Row className="explore-row-2"> 
                    <Col xs={12} lg={6} xl={4} xxl={3} className="explore-col">
                      <div className="explore-tile">
                        <img src={walletExplore} alt="wallet"/>
                        <h3>Set up your Wallet</h3>
                        <p>Once you’ve set up your wallet of choice, connect it to OpenSeaby clicking the NFT Marketplacein the top right corner.</p>
                      </div>
                    </Col>
                    <Col xs={12} lg={6} xl={4} xxl={3} className="explore-col">
                      <div className="explore-tile">
                        <img src={collectionExplore} alt="wallet"/>
                        <h3>Create your Collection</h3>
                        <p>Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.</p>
                      </div>
                    </Col>
                    <Col xs={12} lg={6} xl={4} xxl={3} className="explore-col">
                      <div className="explore-tile">
                        <img src={nftExplore} alt="wallet"/>
                        <h3>Add your NFTs</h3>
                        <p>Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats</p>
                      </div>
                    </Col>
                    <Col xs={12} lg={6} xl={4} xxl={3} className="explore-col">
                      <div className="explore-tile">
                        <img src={saleExplore} alt="wallet"/>
                        <h3>List them for Sale</h3>
                        <p>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!</p>
                      </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Explore;
