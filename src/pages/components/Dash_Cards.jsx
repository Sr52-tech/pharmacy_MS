import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function Dash_Cards({ title, text, imageUrl, path }) {
    
    return (
        <div className="col-lg-7 col-md-9">
        {/* do not forget to add the path later */}
        <Link to={path} style={{ textDecoration: 'none' }}>
            <div className="card mb-3">
                {/* you can fix the size of the img through the height */}
                <img src={imageUrl} className="card-img-top" alt="..." style={{maxWidth: "100%", height: "auto"}} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </Link> 
        </div>
    );
}
export default Dash_Cards;