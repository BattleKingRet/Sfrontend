import React from "react";
import { Helmet } from "react-helmet";
import search from "../../assets/search.gif";
import predict from "../../assets/predict.png";

const About = ({ theme }) => {
    console.log(theme);
    return (
        <div className="aboutgemx">
            <Helmet>
                <title>StockMonkey | About</title>
            </Helmet>
            {theme === "light" ? (
                <>
                    <h1>About StockMonkey</h1>
                    <div className="gemx">
                        <div>
                            <img
                                src="https://miro.medium.com/max/1400/1*NG0bzk0wtQcBdMYAnXKeBQ.jpeg"
                                alt=""
                            />
                        </div>
                    </div>

                    <p className="content1">
                        A stock market is a public market where you can buy and
                        sell shares for publicly listed companies. The stocks,
                        also known as equities, represent ownership in the
                        company. The stock exchange is the mediator that allows
                        the buying and selling of shares. StockMonkey helps in
                        prediction of stock market using machine learning
                        models.
                    </p>
                    <h3 className="heading1">
                        StockMonkey for Creative Communities
                    </h3>
                    <p className="content2">
                        Stock Price Prediction using machine learning helps you
                        discover the future value of company stock and other
                        financial assets traded on an exchange. The entire idea
                        of predicting stock prices is to gain significant
                        profits. Predicting how the stock market will perform is
                        a hard task to do. There are other factors involved in
                        the prediction, such as physical and psychological
                        factors, rational and irrational behavior, and so on.
                        All these factors combine to make share prices dynamic
                        and volatile. This makes it very difficult to predict
                        stock prices with high accuracy.
                    </p>
                    <h3 className="heading2">How it work</h3>
                    <div className="images">
                        <div className="image1">
                            <img src={search} alt="" />
                            <h3>Search Stock</h3>
                        </div>

                        <div className="image2">
                            <img
                                src={predict}
                                alt=""
                            />
                            <h3>Predict</h3>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <h1>About StockMonkey</h1>
                    <div className="gemx">
                        <div>
                            <img src={predict} alt="" />
                        </div>
                    </div>

                    <p className="content3">
                        A stock market is a public market where you can buy and
                        sell shares for publicly listed companies. The stocks,
                        also known as equities, represent ownership in the
                        company. The stock exchange is the mediator that allows
                        the buying and selling of shares. StockMonkey helps in
                        prediction of stock market using machine learning
                        models.{" "}
                    </p>
                    <h3 className="heading3">
                        Crypto for Creative Communities
                    </h3>
                    <p className="content4">
                        Stock Price Prediction using machine learning helps you
                        discover the future value of company stock and other
                        financial assets traded on an exchange. The entire idea
                        of predicting stock prices is to gain significant
                        profits. Predicting how the stock market will perform is
                        a hard task to do. There are other factors involved in
                        the prediction, such as physical and psychological
                        factors, rational and irrational behavior, and so on.
                        All these factors combine to make share prices dynamic
                        and volatile. This makes it very difficult to predict
                        stock prices with high accuracy.
                    </p>
                    <h3 className="heading4">How it work</h3>
                    <div className="images">
                        <div className="image3">
                            <img src={predict} alt="" />
                            <h3>Search Stock</h3>
                        </div>

                        <div className="image4">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/4f11/9366/3dc1f79f19d5cdec38f1730881c6c9f8?Expires=1647216000&Signature=CC3FAvxyI-GQ9pXe~Iou92wn1SPfL65ibzHuNEaLRbCgJOwBvjy5BwZwbpmBL~hQyMD6u8O1yCBHWqbH5L23-MTk6oE2x7Fo70hel61aXJFXeAkjY~wPu2H8khDIZlJELzH7pXCuhUNPhOUHl5Tm4J5UVcQhfmXc~qcyahcbCKHvnsIKN7~Y53KOjh9ZcpL2niILwPsnpcOPcfwS-u~OKV3qSvBINtQtyUbKFxQLjLjhZW8Gb7ExF~LXHD41KaqxJTQZtrqWA3Orn~EDSQeGkkdcaQj5hT1bwShycoBniuy3vbdaaBtpIl1VFFNeUWIkVeRbSMVQG4SCgFg5z94bBg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                alt=""
                            />
                            <h3>Trust</h3>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default About;
