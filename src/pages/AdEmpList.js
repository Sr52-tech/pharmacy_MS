import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx"
import ICards from "./components/iCards.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function AdEmpList() {
    return (
        <Router>
            <>
                <Navbar />
                <br />
                <br />
                <div className="row">
                    <ICards imgsrc="/public/project_pics/ragoo.jpg" emp_name="Name1" info="Info1"/>
                    <ICards imgsrc="/public/project_pics/ragoo.jpg" emp_name="Name2" info="Info2"/>
                    {/* Add more cards as needed */}
                </div>
                <br />
                <br />
        
        <Footer />
            </>

        </Router>
    );
}

export default AdEmpList;
