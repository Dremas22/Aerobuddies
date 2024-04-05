import React from "react";
import classes from "./locationsComponent.module.css"
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function Locations() {
    return (
        <div className={classes.locationsContainer}>
            <Navbar />

            <h1>AeroBuddies Location</h1>

            <div className={classes.addressContainer}>
                <div className={classes.addressPlace}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28668.228983180146!2d27.83963976806507!3d-26.081657391906734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e959ef2a867761b%3A0xda7a4594c4435bb6!2sRuimsig%2C%20Roodepoort%2C%201724!5e0!3m2!1sen!2sza!4v1712325180038!5m2!1sen!2sza"
                        width="500"
                        height="400"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                <div className={classes.addressDetails}>
                    <h5>Location Name</h5>
                    <div  className={classes.liner}></div>

                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Locations;

