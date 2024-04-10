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
                        
                    </div>
                    <div className={classes.schoolsContents}>
                        <img src="./images/smile.png" alt="kidslearning image" />
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