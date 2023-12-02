import React from "react";
import Navbar from "./components/Navbar.jsx";
import AddButton from "./components/Add_Button.jsx";
import EditableCard from "./components/Editing_Cards.jsx"
import Footer from "./components/Footer.jsx"
import { BrowserRouter as Router} from "react-router-dom";

// imgUrl, path, proTitle, dicrib, price
//do not forget to add the path and the delete thing
//for the employee deleting and adding should go as a request for the admin

function ProductList() {
    return (
        <Router>
            <>
        <Navbar />
            <br />
            <br />
            <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
            <AddButton />
            </div>
            <br />
            <br />
            <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                    <EditableCard imgUrl="/public/project_pics/ragoo.jpg" proTitle="Name1" dicrib="discribtion of the product here" price="5" />
                    <EditableCard imgUrl="/public/project_pics/ragoo.jpg" proTitle="Name2" dicrib="discribtion of the product here" price="5" />
                    <EditableCard imgUrl="/public/project_pics/ragoo.jpg" proTitle="Name2" dicrib="discribtion of the product here" price="5" />
                    <EditableCard imgUrl="/public/project_pics/ragoo.jpg" proTitle="Name2" dicrib="discribtion of the product here" price="5" />
                    <EditableCard imgUrl="/public/project_pics/ragoo.jpg" proTitle="Name2" dicrib="discribtion of the product here" price="5" />
                    <EditableCard imgUrl="/public/project_pics/ragoo.jpg" proTitle="Name2" dicrib="discribtion of the product here" price="5" />
                    {/* Add more cards as needed */}
            </div>
            <br />
            <br />
        <Footer />
            </>

        </Router>
    );
}

export default ProductList;
