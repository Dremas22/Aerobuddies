import React from "react";
import classes from './programsComp.module.css'
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function Programs() {
    return (


        <div className={classes.programsContainer}>
            <Navbar />
            <div className={classes.contents}>
                <h1 className={classes.heading}>Programs</h1>

                <div className={classes.info}>
                    <p>
                    We built Aerobuddies to engage K-8 students around the world in supplemental science, 
                    technology, engineering, art and math education – giving them the skills and motivation 
                    they need to create a better future. Our interactive programs spark kids’ curiosity as 
                    they have fun solving problems with friends. All of our curriculum-based STEAM programs 
                    foster academic enrichment and boost confidence. We are accustomed to helping your student 
                    excel in school -- because that's what we do! Ignite your child’s love of learning at Aerobuddies!
                    </p>
                </div>

                <div className={classes.programsContainer2}>

                    <div className={classes.learningPrograms}>
                        <img src="./images/smile.png" alt="maths icon" />
                        <h1>Maths Buddies</h1>
                    </div>
                    <div className={classes.learningPrograms}>
                        <img src="./images/smile.png" alt="maths icon" />
                        <h1>Coding</h1>
                    </div>
                    <div className={classes.learningPrograms}>
                        <img src="./images/smile.png" alt="maths icon" />
                        <h1>Robotics</h1>
                    </div>
                    <div className={classes.learningPrograms}>
                        <img src="./images/smile.png" alt="maths icon" />
                        <h1>Aviation</h1>
                    </div>

                    <div className={classes.learningPrograms}>
                        <img src="./images/smile.png" alt="maths icon" />
                        <h1>Dronolody</h1>
                    </div>
                    {/* <div className={classes.learningPrograms}>
                        <img src="./images/smile.png" alt="maths icon" />
                        <h1>Game based Learning</h1>
                    </div>

                    <div className={classes.learningPrograms}>
                        <img src="./images/smile.png" alt="maths icon" />
                        <h1>Science</h1>
                    </div> */}
                    <div className={classes.learningPrograms}>
                        <img src="./images/smile.png" alt="maths icon" />
                        <h1>Home Work Center</h1>
                    </div>
                    
                    <div className={classes.learningPrograms}>
                        <img src="./images/smile.png" alt="maths icon" />
                        <h1>Out Reach Programs</h1>
                    </div>

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Programs;