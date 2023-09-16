import React from "react";
import Navbar from "./components/Navbar.jsx";
import DashCards from "./components/Dash_Cards.jsx";
import Footer from "./components/Footer.jsx"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Admin_Dash() {
    return (
        <Router>
            <>
                <Navbar />
                <br />
                <br />

        <div className="container">
            <div className="row justify-content-center">
                <DashCards
                    title="Card 1" 
                    text="This is the first card." 
                    imageUrl="public\project_pics\Emplyees.png"
                    // path = 
                />
                {<DashCards
                    title="Card 2" 
                    text="This is the second card." 
                    imageUrl="../public/project_pics/Meds.png" 
                    // path = 
                />}
                {<DashCards
                    title="Card 3" 
                    text="This is the third card." 
                    imageUrl="../public/project_pics/Request.png" 
                    // path = 
                />}
            </div>
        </div>

        <br />
        <br />
        
        <Footer />
            </>

        </Router>
    );
}

export default Admin_Dash;
