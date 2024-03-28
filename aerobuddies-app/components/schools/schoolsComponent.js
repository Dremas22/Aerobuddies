import React from "react";
import classes from "./schoolsComponent.module.css"
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function SchoolsComponent() {
    return (
        <div className={classes.schoolsContainer}>

            <Navbar />
            <h1>Schools</h1>
            <Footer />
        </div>
    )
}

export default SchoolsComponent;