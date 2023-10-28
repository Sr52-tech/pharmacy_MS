import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function ProductCards({ imgUrl, path, proTitle, dicrib, price}) {

    return (
    <div className="col-lg-3 col-md-4 col-sm-6" style={{margin:'1rem'}}>
            <div class="card" style={{width: '18rem;'}}>
            <img src={imgUrl} class="card-img-top" alt="Product Image"/>
            <div class="card-body">
            <h5 class="card-title">{proTitle}</h5>
            <p class="card-text">{dicrib}</p>
            <h5 class="card-price">{price} BD</h5>
            <div class="d-flex justify-content-center">
            <a href={path} class="btn btn-primary" style={{width: "12rem"}}>Buy Now</a>
            </div>
            </div>
        </div>
    </div>

    );
}

export default ProductCards;
