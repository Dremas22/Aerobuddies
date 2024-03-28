import React from "react";
import classes from "./camps.module.css"
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function Camps() {
    return (
        <div className={classes.camps}>
            <Navbar />
            <h1>Camps</h1>
            <div className={classes.campsContainer}>
                <div className={classes.contents1}>
                    <h2>When schools close, Aerobuddies opens!</h2>

                    <p>We’ve got you covered year-round with Fall, Winter,
                        Spring and Summer Break Camps. Plus, early release,
                        teacher work day and snow day camps!
                    </p>
                    <p>Calling all Coders, Engineers, Scientists, Explorers and Designers!</p>
                    <p>Discover how the world works! Spark your child’s curiosity in our Science, Technology,
                        Engineering, Art and Math Camps!
                    </p>
                    <p>We engage your child’s mind and hands with interactive Camps to explore, learn, research,
                        experiment and innovate. Use our cutting-edge tools to create projects and experiments
                        led by our role model instructors!
                    </p>
                    <p>Each Camp is grouped for your child’s age and grade. Our small camp sizes provide a personalized
                        and exceptional experience for every child.
                    </p>

                    <div className={classes.contents2}>
                        <div className={classes.gridContents}>
                            <h1>Summer Camps</h1>
                        </div>
                        <div className={classes.gridContents}>
                            <h1>School Break Camps</h1>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Camps;