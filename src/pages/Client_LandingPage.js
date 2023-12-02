import React from "react";
import Navbar from "./components/Navbar.jsx";
import Carousel from "./components/Landing_Carousel.jsx";
import ProductCards from "./components/ProductCards.jsx"
import Footer from "./components/Footer.jsx"
import { BrowserRouter as Router} from "react-router-dom";

// imgUrl, path, proTitle, dicrib, price

function LandingPage() {
    return (
        <Router>
            <>
        <Navbar />
            <br />
            <br />
            <Carousel />
            <h2 style={{ textAlign: 'center' }}>Products</h2>
            <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                    <ProductCards imgUrl="/public/project_pics/ragoo.jpg" proTitle="Name1" dicrib="discribtion of the product here" price="5"/>
                    <ProductCards imgUrl="/public/project_pics/ragoo.jpg" proTitle="Name2" dicrib="discribtion of the product here" price="5"/>
                    <ProductCards imgUrl="/public/project_pics/ragoo.jpg" proTitle="Name2" dicrib="discribtion of the product here" price="5"/>
                    <ProductCards imgUrl="/public/project_pics/ragoo.jpg" proTitle="Name2" dicrib="discribtion of the product here" price="5"/>
                    <ProductCards imgUrl="/public/project_pics/ragoo.jpg" proTitle="Name2" dicrib="discribtion of the product here" price="5"/>
                    <ProductCards imgUrl="/public/project_pics/ragoo.jpg" proTitle="Name2" dicrib="discribtion of the product here" price="5"/>
                    {/* Add more cards as needed */}
                </div>
            <br />
            <br />
        
        <Footer />
            </>

        </Router>
    );
}

export default LandingPage;
