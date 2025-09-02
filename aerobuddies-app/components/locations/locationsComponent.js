import React from "react";
import classes from "./locationsComponent.module.css"
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function Locations() {
    return (
        <>
        <Navbar />
        
        <div className={classes.locationsContainer}>
            <h1>AeroBuddies Location</h1>

            <div className={classes.addressContainer}>
                <div className={classes.addressPlace}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.6222024509907!2d27.945252560373422!3d-26.24146247695796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9509c00e90420b%3A0xbacf4bc58cd5c246!2sDiepkloof%20Communal%20Hall!5e0!3m2!1sen!2sza!4v1717517041830!5m2!1sen!2sza"
                        width="500"
                        height="400"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                <div className={classes.addressDetails}>
                    
                    <h5>Diepkloof</h5>
                    <div  className={classes.liner}></div>
        
                    <h6>Diepkloof Community Hall </h6>
                    <div  className={classes.liner}></div>
                    
                    <p>1864 Soweto</p>
                </div>

            </div>

            <div className={classes.addressContainer}>
                <div className={classes.addressPlace}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63042.99454996001!2d7.4142158577395!3d9.046685993377345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2sza!4v1717519157740!5m2!1sen!2sza"
                        width="500"
                        height="400"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                <div className={classes.addressDetails}>
                    
                    <h5>Nigeria</h5>
                    <div  className={classes.liner}></div>
        
                    <h6>Abuja </h6>
                    <div  className={classes.liner}></div>
                    
                    <p>900211 </p>
                </div>

            </div>

            
            <Footer />
        </div>
        </>
    )
}

export default Locations;

