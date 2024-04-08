import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import classes from "./whyAerobuddiesComp.module.css"
import Link from "next/link";

function WhyAerobuddiesComp() {
    return (
        <div className={classes.whyContainer}>
            <Navbar />

            <h1>Why Aerobuddies?</h1>
            <div className={classes.symbolsDiv}>
                <img src="./images/science.jpg" alt="science icon" />
                <img src="./images/technology.jpg" alt="science icon" />
                <img src="./images/engineering.jpg" alt="science icon" />
                <img src="./images/maths.png" alt="science icon" />
            </div>

            <div className={classes.whyContents}>
                <p>
                    AeroBuddies is an educational that offers fun enrichment programs for kids in the areas of maths,
                    aviation and other STEM related educational interventions. Their approach is far from conventional
                    drills and replication. Instead, they engage students in imaginative problem-solving that builds
                    confidence and helps them succeed in school. Here’s why AeroBuddies stands out:
                </p>
            </div>

            <div className={classes.enrollDiv}>
                <h2>Enroll today and see AeroBuddies difference for yourself.</h2>
                <Link href='/programs'>
                    <button className={classes.enroll}>Enroll Now!</button>
                </Link>
            </div>

            <div className={classes.gridContainer}>
                <div className={classes.whyGrid}>
                    <div className={classes.whyGridContents}>
                        <h3>1.	Fun Focused:</h3>
                        <p>
                            AeroBuddies’s forward-thinking approach allows leaners to grasp fundamental concepts
                            in a way that feels like play.
                        </p>
                        <p>
                            They use game-based learning, leveraging digital platforms like MathsBuddies, EduFlight Sim to
                            teach subjects ranging from maths, physics, geography etc.
                        </p>
                        <p>
                            By capitalizing on kids’ existing love for games, AeroBuddies empoer kids with
                            problem-solving skills and boosts self-confidence.
                        </p>

                        <h3>2.	Experiential Learning:</h3>
                        <p>
                            AeroBuddies’s hands-on STEM (Science, Technology, Engineering, & Maths) enrichment programs bridge
                            the gap between theory and practice.
                        </p>
                        <p>
                            Students gain early exposure to STEM programs which ifnites passion for maths and science.
                        </p>


                    </div>

                    <div className={classes.whyGridContents}>
                        <iframe width="500" height="400" src="https://www.youtube.com/embed/-XK-1F6JMbM"
                            title="Why Is Visual Thinking  the Key to Learning Algebra | Algebra Visualized"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                    picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen>
                        </iframe></div>

                    <div className={classes.whyGridContents}>
                        <iframe width="500" height="400" src="https://www.youtube.com/embed/_YgUOsca7OU" title="How to complete 
                    the square (when solving quadratic equations)" frameborder="0" allow="accelerometer; autoplay; 
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className={classes.whyGridContents}>
                        <h3>3.	Cutting-Edge Technology:</h3>
                        <p>
                            AeroBuddies integrates technology into every course.
                        </p>
                        <p>
                            From MathsBuddies to EduFlight Sim and Coding, they stay ahead of the curve.
                        </p>
                        <p>
                            STEM education is crucial for future success, and AeroBuddies through technology ensures kids are
                            positioned to eventually pursue careers in the STEM fields.
                        </p>
                        <h3>4.	Small Class Sizes & Peer-Based Learning:</h3>
                        <p>
                            With a 10:1 student-to-instructor ratio, kids receive personalized attention in our centre based
                            programs. Inspire your child’s love of learning at AeroBuddies— where kids can do amazing
                            things!
                        </p>
                    </div>

                </div>
            </div>


            <Footer />
        </div>
    )
}

export default WhyAerobuddiesComp;