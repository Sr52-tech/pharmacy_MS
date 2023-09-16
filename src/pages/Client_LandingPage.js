import React from "react";
import Navbar from "./components/Navbar.jsx";
import Carousel from "./components/Landing_Carousel.jsx";
//we need a products card here
import Footer from "./components/Footer.jsx"
import { BrowserRouter as Router} from "react-router-dom";

function LandingPage() {
    return (
        <Router>
            <>
        <Navbar />
            <br />
            <br />
            <Carousel />
            <h2>Products</h2>

            <br />
            <br />
        
        <Footer />
            </>

        </Router>
    );
}

export default LandingPage;
