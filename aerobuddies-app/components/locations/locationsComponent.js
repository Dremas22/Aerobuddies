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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57444.602140468836!2d28.034624177313837!3d-25.860009021680877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957b0df5954b27%3A0x474f6dba7062227f!2sCenturion!5e0!3m2!1sen!2sza!4v1717516846758!5m2!1sen!2sza"
                        width="500"
                        height="400"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                <div className={classes.addressDetails}>
                    
                    <h5>Centurion</h5>
                    <div  className={classes.liner}></div>
        
                    <h6>Address </h6>
                    <div  className={classes.liner}></div>
                    
                    <p>000 Centurion</p>
                </div>

            </div>

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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13221.995764302574!2d24.89915994578098!3d-34.0567219566546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7a55fe316c8f35%3A0xd73923e546801f08!2sJeffreys%20Bay!5e0!3m2!1sen!2sza!4v1717517405884!5m2!1sen!2sza"
                        width="500"
                        height="400"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                <div className={classes.addressDetails}>
                    
                    <h5>Jefferey's Bay</h5>
                    <div  className={classes.liner}></div>
        
                    <h6>Address </h6>
                    <div  className={classes.liner}></div>
                    
                    <p>000 </p>
                </div>

            </div>

            <div className={classes.addressContainer}>
                <div className={classes.addressPlace}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63423.935502613!2d3.326167359857128!3d6.522190416994074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sza!4v1717517538338!5m2!1sen!2sza"
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
        
                    <h6>Lagos </h6>
                    <div  className={classes.liner}></div>
                    
                    <p>23401 </p>
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

