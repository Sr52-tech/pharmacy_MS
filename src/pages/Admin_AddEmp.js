import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx"
import AddItemForm from "./components/AddingForm.jsx";

import { BrowserRouter as Router } from "react-router-dom";

function AddEmployee() {
    const [employee, setEmployee] = useState({ name: '', email: '', position: '' });

    const handleEmployeeSubmit = (e) => {
        e.preventDefault();
        console.log(employee);
    };

    return (
        <Router>
            <>
                <Navbar />
                <br />
                <br />
                <AddItemForm item={employee} setItem={setEmployee} handleSubmit={handleEmployeeSubmit} />
                <br />
                <br />
                <Footer />
            </>
        </Router>
    );
}

export default AddEmployee;
