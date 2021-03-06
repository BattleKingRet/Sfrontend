import React,{useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

//pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About"
import TopNft from "./Pages/TopNft/TopNft";
import Learn from "./Pages/Learn/Learn";
import StockPage from "./Pages/StockPage/StockPage.jsx";
import BrowseStock from "./Pages/BrowseStock/BrowseStock.jsx";


const App = () => {
  // theme
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className={`App ${theme}`}>
    <BrowserRouter>
      <Navbar changeTheme={changeTheme} theme={theme}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About theme={theme}/>}  />
        <Route path='/learn' element={<Learn theme={theme}/>}  />
        <Route path="/trending-nfts" element={<TopNft/>} />
        <Route path="/stock/:id" element={<StockPage />} />
        <Route path="/browse" element={<BrowseStock />}/>
      </Routes>
      <Footer theme={theme}/>
    </BrowserRouter>
      
    </div>
  )
}

export default App;