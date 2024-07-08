import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import classes from "./flyingClubComponent.module.css"


function FlyingClubComponent() {
    return (
        <div className={classes.flyigClubContainer}>
            <Navbar />
            <div className={classes.flyigClubContainer2}>

                <h1>Flying Club</h1>

                <div className={classes.flyigClubContainer3}>

                    <div className={classes.flyigClubContents1}>
                        <h5>Flying Club For Kids √100 STEM Principles</h5>
                        <h6>ENGAGING STUDENTS IN STEM EDUCATION LIKE NEVER BEFORE</h6>
                        <p>
                            AeroBuddies delivers an innovative learning experience to ignite early interest in classroom science,
                            technology engineering and maths through teaching kids how to fly on simulators like how a student
                            pilot learns in reality. We teach them embedded knowledge of maths and science and the moment a child
                            realises they’ve learned to fly on the simulator the fear for maths and science disappears, their
                            confidence improves as well as mastery of 21st century skills such as communication, problem solving,
                            critical thinking, team work and creativity.
                        </p>
                    </div>

                    <div className={classes.flyigClubContents2}>
                        <img src="./images/flyingClass.jpeg" alt="flying icon" />
                    </div>

                </div>

                <div className={classes.linerFlyingClub}></div>

                <div className={classes.flyigClubList}>

                    <ul>
                        <li>Engages kids with an exciting video game-like experience.</li>
                        <li>Demonstrates real-world usefulness of STEM with application to aviation.</li>
                        <li>Offers challenges with clear goals and feedback in guided missions.</li>
                        <li>Exposes students to maths and science application through flying.</li>
                        <li>Teaches soft skills such as time management, leadership, focus, attitude and many other 
                            soft skills.</li>
                    </ul>
                    <p>
                    Kids explore subjects such as algebra, trigonometry, geometry, physics, topography and history of 
                    aviation.
                    </p>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FlyingClubComponent;