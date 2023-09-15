import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function iCards(props) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-4">
                    <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="card" style={{width: '15rem', height: '24rem', margin: '1rem'}}>
                            <img src={props.imgsrc} className="card-img-top" alt="..." style={{maxHeight: '10rem'}}/>
                            <div className="card-body" style={{height: '200px'}}>
                                <h5 className="card-title">{props.emp_name}</h5>
                                <p className="card-text">{props.info}</p>
                                <button className="btn btn-primary">more info</button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default iCards;
