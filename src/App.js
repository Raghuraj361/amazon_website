import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Checkout from "./component/Checkout/Checkout";
import Payment from "./component/Payment/Payment";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div id="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
