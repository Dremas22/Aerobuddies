import React from "react";
import classes from "./schoolsComponent.module.css"
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function SchoolsComponent() {
    return (
        <>
        <Navbar />

        <div className={classes.schoolsContainer}>
            <div className={classes.schoolsContainer1}>

                <h1>Bring AeroBuddies to your school</h1>
                <div className={classes.schoolsContainer2}>
                    <div className={classes.schoolsContents}>
                           <h3>AeroBuddies</h3>
                           <p>Aerobuddies is dedicated to empowering schools with innovative STEM products and 
                            solutions that prepare learners for the future. Among its impactful offerings is the Elohdoc App — 
                            a groundbreaking digital health platform designed specifically for schools.</p>
                        
                    </div>
                    <div className={classes.schoolsContents}>
                        <p className={classes.elohdoc}>Bring affordable Health care to schools</p>
                        <img src="./images/elohdoc.png" alt="elohdoc image" />
                    </div>
                </div>

                <h1 className={classes.products}>Products</h1>
                <div className={classes.productsContainer}>

                    <div className={classes.productsMiniContainer}>

                        <div className={classes.productImg}>
                            <img src="./images/science.jpg" alt="science image" />
                        </div>
                        <div className={classes.productDetails}>
                            <h3>Science</h3>
                            <p></p>
                        </div>

                    </div>

                    <div className={classes.productsMiniContainer}>
                        <div className={classes.productImg}>
                            <img src="./images/technology.jpg" alt="science image" />
                        </div>
                        <div className={classes.productDetails}>
                            <h3>Technology</h3>
                            <p></p>
                        </div>
                    </div>

                    <div className={classes.productsMiniContainer}>
                        <div className={classes.productImg}>
                            <img src="./images/engineering.jpg" alt="science image" />
                        </div>
                        <div className={classes.productDetails}>
                            <h3>Engineering</h3>
                            <p></p>
                        </div>
                    </div>

                    <div className={classes.productsMiniContainer}>
                        <div className={classes.productImg}>
                            <img src="./images/maths.png" alt="science image" />
                        </div>
                        <div className={classes.productDetails}>
                            <h3>Maths</h3>
                            <p></p>
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </div>
        </>
    )
}

export default SchoolsComponent;