import React from "react";
import {Link} from "react-router-dom";

const Breadcrumbs = (props) => {
    return (
    <section className="head center">
        <h2 className="head__heading"> WELCOME </h2>
        <div className="breadcrumb">
            <div className="breadcrumb__box-link">
                <Link className="breadcrumb__link" to="/HOME">HOME</Link>

            </div>
            <div className="breadcrumb__box-link">
                <Link className="breadcrumb__link" to="/MEN">MEN</Link>
            </div>
            <div className="breadcrumb__box-link">
                <Link className="breadcrumb__link" to="/WOMEN">WOMEN</Link>
            </div>
            <div className="breadcrumb__box-link">
                <Link className="breadcrumb__link" to="/KIDS">KIDS</Link>
            </div>
            <div className="breadcrumb__box-link">
                <Link className="breadcrumb__link" to="/NEW_ARRIVALS">NEW ARRIVALS</Link>
            </div>
        </div>
    </section>)

}

export default Breadcrumbs;