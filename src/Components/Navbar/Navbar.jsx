import React, { useState, useEffect } from "react";
import LOGO from "../../assets/icons/logo.svg";
import accountLogo from "../../assets/images/accountLogo.svg";
import accountDark from "../../assets/images/accountDark.svg";
import searchLogo from "../../assets/images/searchLogo.svg";
import Grid from "@mui/material/Grid";
import { NavLink, Link } from "react-router-dom";
import { Container, Row, Col,Button } from "react-bootstrap";


const Navbar = ({ changeTheme, theme }) => {
    const [mobileMenu, setMobileMenu] = useState(false);
    // sticky nav
    const [stickyClass, setStickyClass] = useState("relative");

    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);

        return () => {
            window.removeEventListener("scroll", stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 100
                ? setStickyClass("stickyNavClass")
                : setStickyClass("relative");
        }
    };
    const closeNav = () => {
        setMobileMenu(false);
    };
    const openNav = () => {
        setMobileMenu(true);
    };
    return (
        <nav className="navbar">
            <Container fluid >
                <Row>
                
                    <div className={`navbar-desktop ${stickyClass}`}>
                        <Link to="/" className="logo">
                            <img src={LOGO} alt="stockmonkey Logo" />
                        </Link>

                        <div className="right-menu">
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/browse">Browse</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/learn">Learn</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-search-bar">
                            {/* search icon */}
                            <img src={searchLogo} alt="search" />
                            <input type="search" placeholder="Search" />
                        </div>
                        <div className="right-menu">
                            
                            <div className="account-btn">
                            <NavLink to="/browse">
                                <button className="create">Predict</button>
                                </NavLink>
                                <img
                                    src={accountLogo}
                                    className="account"
                                    onClick={changeTheme}
                                />

                                {/* change theme */}
                                {theme === "light" ? (
                                    <div
                                        onClick={changeTheme}
                                        className="colorMode"
                                    >
                                        <svg
                                            width="38"
                                            height="38"
                                            viewBox="0 0 38 38"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                width="38"
                                                height="38"
                                                rx="19"
                                                fill="white"
                                            />
                                            <path
                                                d="M18 5H20V10H18V5ZM24.688 11.9L28.194 8.394L29.608 9.808L26.102 13.314L24.688 11.9ZM28 18H33V20H28V18ZM24.688 26.1L26.102 24.687L29.608 28.193L28.194 29.607L24.688 26.1ZM18 28H20V33H18V28ZM8.394 28.192L11.9 24.686L13.314 26.1L9.809 29.606L8.394 28.192ZM5 18H10V20H5V18ZM8.395 9.808L9.809 8.394L13.315 11.9L11.9 13.314L8.395 9.808ZM19 15C19.7911 15 20.5645 15.2346 21.2223 15.6741C21.8801 16.1136 22.3928 16.7384 22.6955 17.4693C22.9983 18.2002 23.0775 19.0044 22.9231 19.7804C22.7688 20.5563 22.3878 21.269 21.8284 21.8284C21.269 22.3878 20.5563 22.7688 19.7804 22.9231C19.0044 23.0775 18.2002 22.9983 17.4693 22.6955C16.7384 22.3928 16.1136 21.8801 15.6741 21.2223C15.2346 20.5645 15 19.7911 15 19C15.0013 17.9395 15.4232 16.9229 16.173 16.173C16.9229 15.4232 17.9395 15.0013 19 15ZM19 13C17.8133 13 16.6533 13.3519 15.6666 14.0112C14.6799 14.6705 13.9108 15.6075 13.4567 16.7039C13.0026 17.8003 12.8838 19.0067 13.1153 20.1705C13.3468 21.3344 13.9182 22.4035 14.7574 23.2426C15.5965 24.0818 16.6656 24.6532 17.8295 24.8847C18.9933 25.1162 20.1997 24.9974 21.2961 24.5433C22.3925 24.0892 23.3295 23.3201 23.9888 22.3334C24.6481 21.3467 25 20.1867 25 19C25 17.4087 24.3679 15.8826 23.2426 14.7574C22.1174 13.6321 20.5913 13 19 13Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </div>
                                ) : (
                                    <div
                                        onClick={changeTheme}
                                        className="colorMode"
                                    >
                                        <img src={accountDark} alt="account" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                
                </Row>
            </Container>
            {/* </Grid>
    </Grid> */}

            {/* mobile nav */}
            <div className="navbar-mobile">
                <h2>StockMonkey</h2>
                {mobileMenu && (
                    <div className="overlay-container">
                        <div id="myNav" className="overlay">
                            {/* <!-- Button to close the overlay navigation --> */}
                            <div
                                // href="javascript:void(0)"
                                className="closebtn"
                                onClick={closeNav}
                            >
                                <i class="fa-solid fa-x"></i>
                            </div>

                            {/* <!-- Overlay content --> */}
                            <div className="overlay-content">
                                <a href="#">About StockMonkey</a>
                                <a href="#">Predict</a>
                                <a href="#">Home</a>
                            </div>
                        </div>
                        <svg
                            className="mobile-searchLogo"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11 20.4844C15.9706 20.4844 20 16.4549 20 11.4844C20 6.51381 15.9706 2.48438 11 2.48438C6.02944 2.48438 2 6.51381 2 11.4844C2 16.4549 6.02944 20.4844 11 20.4844Z"
                                stroke="#222222"
                                strokeWidth="2"
                            />
                            <path
                                d="M22 22.4844L18 18.4844"
                                stroke="#222222"
                                strokeWidth="2"
                            />
                        </svg>

                    </div>
                )}

                {!mobileMenu && (
                    <span onClick={openNav}>
                        {/* <i class="fa-solid fa-bars"></i> */}
                        <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.38477 12.3081H22.0349"
                                stroke="#222222"
                                strokeWidth="2"
                            />
                            <path
                                d="M2.38477 4.28418H22.0349"
                                stroke="#222222"
                                strokeWidth="2"
                            />
                            <path
                                d="M2.38477 20.332H22.0349"
                                stroke="#222222"
                                strokeWidth="2"
                            />
                        </svg>
                    </span>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
