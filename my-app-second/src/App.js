import React from "react";
import ReactDOM from "react-dom";

import NavBar from "./NavBar";
import AppSection from "./AppSection";
import CardSection from "./CardSection";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

const App = () => {
    return (
        <div>
            <NavBar/>
            <HeroSection/>
            <AppSection/>
            <CardSection/>
            <Footer/>
        </div>
    )
};

export default App;