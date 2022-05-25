import React from "react";
import {Button} from 'react-bootstrap';
import nftImage from "../../assets/images/nftDummy.png";
import crown from "../../assets/images/icons/Crown.svg";
import reload from "../../assets/images/icons/reload.svg";
import verify from "../../assets/images/icons/verify.svg";


const NFTCardTwo = () => {
  return (
    <div className="nft-card">
            <img className="nft-image" src={nftImage} alt="nft-image" />
            <div className="nftBack"></div>
            <div className="nft-card-detail">
                <h3>MetaSkull<img src={verify} alt="verify" /></h3>
                <p className="nft-card-description">
                    These ancient beings have been around since the dawn of
                    time...
                </p>
                <div className="nft-card-price">
                    <p className="nft-price">9861 ETH</p>
                    <p className="price-increase">+136,54%</p>
                </div>
                <div className="nft-card-btn-container">
                    {/* <Button type="button" className="btn-secondary btn_grey btn_padding">
                        <img
                            className="nft-card-icon"
                            src={reload}
                            alt="reload"
                        />
                        View History
                    </Button> */}
                    <Button type="button" className="w-100 btn-primary btn_green btn_padding">
                        <img
                            className="nft-card-icon"
                            src={crown}
                            alt="crown"
                        />
                        Place Bid
                    </Button>
                </div>
            </div>
        </div>
  )
}

export default NFTCardTwo