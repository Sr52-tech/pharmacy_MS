import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx"
import AddItemForm from "./components/AddingForm.jsx";

import { BrowserRouter as Router } from "react-router-dom";

function AdminAddProduct() {
    const [product, setEmployee] = useState({ name: '', id: '', info: '' });

    const handleProductSubmit = (e) => {
        e.preventDefault();
        console.log(product);
    };

    return (
        <Router>
            <>
                <Navbar />
                <br />
                <br />
                <AddItemForm item={product} setItem={setEmployee} handleSubmit={handleProductSubmit} />
                <br />
                <br />
                <Footer />
            </>
        </Router>
    );
}

export default AdminAddProduct;
