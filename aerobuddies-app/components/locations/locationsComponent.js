import React from "react";
import classes from "./locationsComponent.module.css"
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function Locations() {
    return (
        <div className={classes.locationsContainer}>
            <Navbar />
            <h1>AeroBuddies Location</h1>
            <Footer />
        </div>
    )
}

export default Locations;