import React from "react";
import classes from "./newsroomComponent.module.css"
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function NewsroomComp() {
    return (
        <div className={classes.camps}>
            <Navbar />
            <h1>Newsroom Articles</h1>
            <div className={classes.campsContainer}>
                <div className={classes.contents1}>
                   

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default NewsroomComp;