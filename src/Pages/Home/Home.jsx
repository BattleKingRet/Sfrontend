import React from 'react';
import {Helmet} from "react-helmet";

// components
import Hero from "../../Components/Hero/Hero";
import Explore from "../../Components/Explore/Explore";
import WalletSupport from "../../Components/WalletSupport/WalletSupport";
import LiveAuctions from "../../Components/LiveAuctions/LiveAuctions";
import TopCollection from "../../Components/TopCollection/TopCollection";
import PopularCollection from "../../Components/PopularCollection/PopularCollection";
import TodaysPick from "../../Components/TodaysPick/TodaysPick";
import NFTReview from "../../Components/NFTReview/NFTReview";
import HomeBottomInfo from "../../Components/HomeBottomInfo/HomeBottomInfo";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StockMonkey | Home</title>
      </Helmet>

      {/* hero section */}
      <Hero/>
      {/* explore section */}
      <Explore/>
      {/* wallet we support */}
      <WalletSupport/>
      {/* live action */}
      <LiveAuctions/>
      {/* top collection */}
      <TopCollection/>
      {/* popular collection */}
      <PopularCollection/>
      {/* Todays Pick */}
      <TodaysPick/>
      {/* NFT review */}
      <NFTReview/>
      <HomeBottomInfo/>
    </div>
  )
}

export default Home;