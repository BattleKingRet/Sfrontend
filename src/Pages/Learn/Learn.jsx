import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import {Helmet} from 'react-helmet';

const Learn = ({ theme }) => {
    console.log(theme);
    return (
      <>
      <Helmet>
        <title>StockMonkey | Learn</title>
      </Helmet>
        <CardGroup>
            <Card>
                <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDcbYnaoMoOjZID3zkyo63Z6GHsU8dhGYiyJ1hpQs6hx9XrrAf8D-w41GxoANWbgA-tFg&usqp=CAU"
                />
                <Card.Body>
                    <br></br>
                    <br></br>
                    <Card.Title>Zerodha Varsity</Card.Title>
                    <Card.Text>
                        Varsity is an extensive and in-depth collection of stock
                        market and financial lessons created by Karthik Rangappa
                        at Zerodha. It is openly accessible to everyone and is
                        one of the largest financial education resources on the
                        web.
                    </Card.Text>
                </Card.Body>
                <a href="https://zerodha.com/varsity">
                    <Card.Footer>
                        <small className="text-muted">Visit now</small>
                    </Card.Footer>
                </a>
            </Card>
            <Card>
                <Card.Img
                    variant="top"
                    src="https://lh3.googleusercontent.com/sgqBYBm3liT8-hNPCeil0IZ1qZNwOR_vMCshYAonSaZb0xeOhT_YkfltTgH4aWVW2sQ9B80xyG2EI77b_ilHgeEYkdHjLPBGneq5RG7Z5LmriXSmA9aq5Ai6JyzvEk-lLglgjSCG"
                />
                <Card.Body>
                    <br></br>
                    <Card.Title>Groww</Card.Title>
                    <Card.Text>
                        Join millions of users on Groww and start investing in
                        mutual funds, Stock trading, ETFs, IPO and Trade F&O.
                        Check live share prices of NSE Nifty 50 and BSE sensex
                        along with stock technical charts and Indicators, open
                        your free Demat account & start trading in the stock
                        market.{" "}
                    </Card.Text>
                </Card.Body>
                <a href="https://groww.in/">
                    <Card.Footer>
                        <small className="text-muted">Visit now</small>
                    </Card.Footer>
                </a>
            </Card>
            <Card>
                <Card.Img
                    variant="top"
                    src="https://www.thebeststockbroker.com/wp-content/uploads/2020/05/IMG-20200519-WA0026.jpg"
                />
                <Card.Body>
                    <Card.Title>5paisa</Card.Title>
                    <Card.Text>
                        With this, you can now get live updates from NSE, BSE
                        and MCX markets, access world-class charting tools with
                        advance studies, analyse stock market trends, and trade
                        on-the-go. If you are new to trading, learn everything
                        about investing in the share market through our learning
                        videos.
                    </Card.Text>
                </Card.Body>
                <a href="https://www.5paisa.com/">
                    <Card.Footer>
                        <small className="text-muted">Visit now</small>
                    </Card.Footer>
                </a>
            </Card>
        </CardGroup>
        </>
    );
};
export default Learn;
