import React from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx"
import ICards from "./components/Small_Cards.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function AdminEmpList() {
    return (
        <Router>
            <>
                <Navbar />
                <br />
                <br />
                <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                    <ICards imgsrc="/public/project_pics/ragoo.jpg" title="Name1" text="Info1"/>
                    <ICards imgsrc="/public/project_pics/ragoo.jpg" title="Name2" text="Info2"/>
                    <ICards imgsrc="/public/project_pics/ragoo.jpg" title="Name2" text="Info2"/>
                    <ICards imgsrc="/public/project_pics/ragoo.jpg" title="Name2" text="Info2"/>
                    <ICards imgsrc="/public/project_pics/ragoo.jpg" title="Name2" text="Info2"/>
                    <ICards imgsrc="/public/project_pics/ragoo.jpg" title="Name2" text="Info2"/>
                    {/* Add more cards as needed */}
                </div>
                <br />
                <br />
        
        <Footer />
            </>

        </Router>
    );
}

export default AdminEmpList;
