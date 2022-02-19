import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Template } from "./components/mainComponents";
import Header from "./components/header";
import Footer from "./components/footer";
import RouteCurriculo from './router';
import Scroll from "./components/scroll";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Template>
        <Header/>
        <Scroll/>
        <RouteCurriculo/>
        <Footer/>
      </Template>
    </BrowserRouter>
  );
}

export default App;
