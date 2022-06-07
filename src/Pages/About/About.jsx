import React from "react";
import {Helmet} from 'react-helmet';

const About = ({theme}) => {
  console.log(theme);
  return (
    <div className="aboutgemx">
    <Helmet>
        <title>StockMonkey | About</title>
      </Helmet>
      {theme==="light" ? (
        <>
          <h1>About StockMonkey</h1>
      <div className="gemx">
       <div >
       <img
          src="https://s3-alpha-sig.figma.com/img/fc5e/fc21/f32d3c6e45510b4964901662e7626e66?Expires=1647216000&Signature=EdrMKZV5dIkaJhCIKnT5FWSpqH~itLq7rL3W8fSwZ4Jf0Ffu19SMgWFyR2cB940P-YYGhFMlkaT0HGYV4nYLoo888be~PnuUEl86hpMhTlxHhFG3C5oBBCP2QqD8tSzPaVQQ8NlhRlBnM6gzHT5lJ6KZ-OhWXJfARAHI9pN-Gd22t-PXZX4KQo8SND3RTCOaQl2XfK9FrxcGMbtwaaj41DFaBV5n2Fo0bnO5Z6eG0eXJQzcqTL2GcUpIhkZiE9g0-w-C0~62jvU7nn7ceCEixqf11j3bs95x4iAwbY4zqxBhfu2nq9mRK6TZHQvww0h07dYzTr1RL25VrdLIHsWcSw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
       </div>
      </div>

      <p className="content1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut <br />{" "}
        aliquam, purus sit amet luctus{" "}
      </p>
      <h3 className="heading1">Crypto for Creative Communities</h3>
      <p className="content2">
        NFTs—non-fungible tokens—are empowering artists, musicians, and <br />{" "}
        all kinds of genre-defying digital creators to invent a new cultural{" "}
        <br /> paradigm. How this emerging culture of digital art ownership
        looks is <br /> up to all of us.
      </p>
      <h3 className="heading2">How it work</h3>
      <div className="images">
        
          <div className="image1">
            <img
              src="https://s3-alpha-sig.figma.com/img/3d8d/8c57/760a773d843e72baa031ce746593017a?Expires=1647216000&Signature=LV~lmQkB76dLriUWQehw-qoFyPJyuVKDod-eAe9BDFaaIlso40oTrwmJsj-VKpQk9IYiEd7SYMSJhJS~Oqxl5VSF-eKoGZXA0pIyTlwNci2CTN0pCpZ-22hrUN4WrK~K8auhwLE~r8V98xiQTcTShWcETTDspSLdx2O0wQ032vAI54NPUPGf2bdm83e0YoMXpAIqv1L8hm0iL~dXdg2-PWTVDH7vtYS533HcUwQsejshbz26BWRsoFKR0h0g~CRXz3h4jsDbtj-NSmXE5toyWX7qTEC58fi~CUWg9BlVXsQIaC-mm7bJSp0xhQ2N5X6vOZMXwJ227jPdzUc~SqxmOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
            />
          <h3 > Build together</h3>
          </div>
        
        
          <div className="image2">
            <img
              src="https://s3-alpha-sig.figma.com/img/4f11/9366/3dc1f79f19d5cdec38f1730881c6c9f8?Expires=1647216000&Signature=CC3FAvxyI-GQ9pXe~Iou92wn1SPfL65ibzHuNEaLRbCgJOwBvjy5BwZwbpmBL~hQyMD6u8O1yCBHWqbH5L23-MTk6oE2x7Fo70hel61aXJFXeAkjY~wPu2H8khDIZlJELzH7pXCuhUNPhOUHl5Tm4J5UVcQhfmXc~qcyahcbCKHvnsIKN7~Y53KOjh9ZcpL2niILwPsnpcOPcfwS-u~OKV3qSvBINtQtyUbKFxQLjLjhZW8Gb7ExF~LXHD41KaqxJTQZtrqWA3Orn~EDSQeGkkdcaQj5hT1bwShycoBniuy3vbdaaBtpIl1VFFNeUWIkVeRbSMVQG4SCgFg5z94bBg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
            />
          <h3>Trust</h3>
          </div>
        </div>
      

      <div className="flexbox1">
        <div>
          <h3>For Creators</h3>
          <p>
            Creators are invited to join Foundation by members of the community.
            Once you’ve received an invite, you’ll need to set up a MetaMask
            wallet with ETH before you can create an artist profile and mint an
            NFT—which means uploading your JPG, PNG, or video file to IPFS, a
            decentralized peer-to-peer storage network. It will then be an NFT
            you can price in ETH and put up for auction on Foundation.
          </p>
        </div>
        <div>
          <h3>For Collectors</h3>
          <p>
            On Foundation, anyone can create a profile to start collecting NFTs.
            All you’ll need is a MetaMask wallet and ETH, the cryptocurrency
            used to pay for all transactions on Ethereum. Artists list NFTs for
            auction at a reserve price, and once the first bid is placed, a
            24-hour auction countdown begins. If a bid is placed within the last
            15 minutes, the auction extends for another 15 minutes.
          </p>
        </div>
      </div>
        </>
      ):(
        <>
        <h1>About StockMonkey</h1>
      <div className="gemx">
       <div >
       <img
          src="https://s3-alpha-sig.figma.com/img/fc5e/fc21/f32d3c6e45510b4964901662e7626e66?Expires=1647216000&Signature=EdrMKZV5dIkaJhCIKnT5FWSpqH~itLq7rL3W8fSwZ4Jf0Ffu19SMgWFyR2cB940P-YYGhFMlkaT0HGYV4nYLoo888be~PnuUEl86hpMhTlxHhFG3C5oBBCP2QqD8tSzPaVQQ8NlhRlBnM6gzHT5lJ6KZ-OhWXJfARAHI9pN-Gd22t-PXZX4KQo8SND3RTCOaQl2XfK9FrxcGMbtwaaj41DFaBV5n2Fo0bnO5Z6eG0eXJQzcqTL2GcUpIhkZiE9g0-w-C0~62jvU7nn7ceCEixqf11j3bs95x4iAwbY4zqxBhfu2nq9mRK6TZHQvww0h07dYzTr1RL25VrdLIHsWcSw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
       </div>
      </div>

      <p className="content3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut <br />{" "}
        aliquam, purus sit amet luctus{" "}
      </p>
      <h3 className="heading3">Crypto for Creative Communities</h3>
      <p className="content4">
        NFTs—non-fungible tokens—are empowering artists, musicians, and <br />{" "}
        all kinds of genre-defying digital creators to invent a new cultural{" "}
        <br /> paradigm. How this emerging culture of digital art ownership
        looks is <br /> up to all of us.
      </p>
      <h3 className="heading4">How it work</h3>
      <div className="images">
        
          <div className="image3">
            <img
              src="https://s3-alpha-sig.figma.com/img/3d8d/8c57/760a773d843e72baa031ce746593017a?Expires=1647216000&Signature=LV~lmQkB76dLriUWQehw-qoFyPJyuVKDod-eAe9BDFaaIlso40oTrwmJsj-VKpQk9IYiEd7SYMSJhJS~Oqxl5VSF-eKoGZXA0pIyTlwNci2CTN0pCpZ-22hrUN4WrK~K8auhwLE~r8V98xiQTcTShWcETTDspSLdx2O0wQ032vAI54NPUPGf2bdm83e0YoMXpAIqv1L8hm0iL~dXdg2-PWTVDH7vtYS533HcUwQsejshbz26BWRsoFKR0h0g~CRXz3h4jsDbtj-NSmXE5toyWX7qTEC58fi~CUWg9BlVXsQIaC-mm7bJSp0xhQ2N5X6vOZMXwJ227jPdzUc~SqxmOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
            />
          <h3 > Build together</h3>
          </div>
        
        
          <div className="image4">
            <img
              src="https://s3-alpha-sig.figma.com/img/4f11/9366/3dc1f79f19d5cdec38f1730881c6c9f8?Expires=1647216000&Signature=CC3FAvxyI-GQ9pXe~Iou92wn1SPfL65ibzHuNEaLRbCgJOwBvjy5BwZwbpmBL~hQyMD6u8O1yCBHWqbH5L23-MTk6oE2x7Fo70hel61aXJFXeAkjY~wPu2H8khDIZlJELzH7pXCuhUNPhOUHl5Tm4J5UVcQhfmXc~qcyahcbCKHvnsIKN7~Y53KOjh9ZcpL2niILwPsnpcOPcfwS-u~OKV3qSvBINtQtyUbKFxQLjLjhZW8Gb7ExF~LXHD41KaqxJTQZtrqWA3Orn~EDSQeGkkdcaQj5hT1bwShycoBniuy3vbdaaBtpIl1VFFNeUWIkVeRbSMVQG4SCgFg5z94bBg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              alt=""
            />
          <h3 >Trust</h3>
          </div>
        </div>
      

      <div className="flexbox2">
        <div>
          <h3>For Creators</h3>
          <p>
            Creators are invited to join Foundation by members of the community.
            Once you’ve received an invite, you’ll need to set up a MetaMask
            wallet with ETH before you can create an artist profile and mint an
            NFT—which means uploading your JPG, PNG, or video file to IPFS, a
            decentralized peer-to-peer storage network. It will then be an NFT
            you can price in ETH and put up for auction on Foundation.
          </p>
        </div>
        <div>
          <h3>For Collectors</h3>
          <p>
            On Foundation, anyone can create a profile to start collecting NFTs.
            All you’ll need is a MetaMask wallet and ETH, the cryptocurrency
            used to pay for all transactions on Ethereum. Artists list NFTs for
            auction at a reserve price, and once the first bid is placed, a
            24-hour auction countdown begins. If a bid is placed within the last
            15 minutes, the auction extends for another 15 minutes.
          </p>
        </div>
      </div>
        </>
      )}
    </div>
  );
};

export default About;
