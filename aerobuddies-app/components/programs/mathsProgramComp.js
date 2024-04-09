
import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import classes from "./mathsProgramComp.module.css"


function MathsProgram() {
    return (
        <div className={classes.mathsProgramContainer}>
            <Navbar />
            <div className={classes.mathsProgramContainer2}>

                <h1>MathsBuddies</h1>

                <div className={classes.mathsProgramContainer3}>

                    <div className={classes.mathsProgramContents1}>
                        <h5>UNLOCKING MATHS POTENTAIL IN EVERY CHILD!</h5>
                        
                        <p>
                            Customized maths tutoring lessons
                        </p>
                        <p>
                            Build confidence & real academic advantage using a breakthrough approach.
                        </p>
                        <p>
                            At AeroBuddies, we believe that every child can learn and become excited about maths
                            in the encouraging environment. We build up on the great work educators do in the
                            classroom to support your child where she or he needs it the most. With MathsBuddies,
                            leaners experience a world-class curriculum coordinated with what she or he is studying
                            in school. This makes it easy to extend the lessons learned at AeroBuddies to the
                            classroom. In fact, the backbone of our MathsBuddies program is a custom software that
                            allows AeroBuddies to create a program to best fit your child’s needs.
                        </p>
                        

                    </div>

                    <div className={classes.mathsProgramContents2}>

                        <img src="./images/mathsIcon.jpeg" alt="maths icon" />
                    </div>

                </div>

                <div  className={classes.linerMaths}></div>

                <div className={classes.mathsProgramList}>
                    <h5>MathsBuddies Online Features</h5>
                    <ul>
                        <li>
                            Classes meet 60 to 120 minutes once a week
                        </li>
                        <li>
                            Low ratio of students per instructor
                        </li>
                        <li>
                            Students begin with an assessment identifying concepts they already know and concepts where they
                            can improve
                        </li>
                        <li>
                            Receive a customized curriculum with  more than 1 800 lessons on it and 75 000 problem database
                            to improve maths practice outcomes
                        </li>
                        <li>
                            Each lesson ends with a milestone lesson test demonstrating lesson mastery and showing weekly
                            improvement
                        </li>
                        <li>
                            Personal progress emails every week class from your instructor
                        </li>
                        <li>
                            Peer-based instruction and a fun atmosphere — Learn with friends online
                        </li>
                        <li>
                            For grades 1 -12
                        </li>

                    </ul>
                </div>


            </div>
            <Footer />
        </div>
    )
}

export default MathsProgram;