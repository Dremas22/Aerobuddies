import React from 'react';
import { useEffect, useRef } from "react";
import Navbar from "../navbar/navbar";
import classes from './aeroBuddies.module.css';
import Link from "next/link";
import Footer from "../footer/footer";


function AeroBuddiesComp() {

    const imageRef = useRef(null);

    return (

        <>
            <Navbar />

            <div className={classes.headerContainer}>

                <div className={classes.videoBackground}>

                    <video autoPlay loop muted className={classes.video}>
                        <source src="/videos/BG1.mp4" type="video/mp4" />
                    </video>

                </div>

                <div className={classes.headerContainer2}>
                    <div className={classes.headerProgs}>
                        <div className={classes.stem}>
                            <span>S</span>cience
                        </div>
                        <div className={classes.radioDiv}></div>
                    </div>

                    <div className={classes.headerProgs}>
                        <div className={classes.stem}>
                            <span>T</span>echnology
                        </div>
                        <div className={classes.radioDiv}></div>
                    </div>


                    <div className={classes.headerProgs}>
                        <div className={classes.stem}>
                            <span>E</span>ngineering
                        </div>
                        <div className={classes.radioDiv}></div>
                    </div>


                    <div className={classes.headerProgs}>
                        <div className={classes.stem}>
                            <span>M</span>aths
                        </div>
                    </div>


                </div>

                <div className={classes.headerContainer3}>
                    <p className={classes.kidsSkills}>Kids gain an academic edge and 21st century technology skills!</p>
                </div>

            </div>

            <div className={classes.bodyContainer1}>
                <div className={classes.what}>
                    <h1>What is AeroBuddies?</h1>

                    <br />
                    <p>A Place Where Kids Do Amazing Maths, Where Curiosity, Exploration and Fun Meet Maths!</p>

                    <p>
                        AeroBuddies offers Science, Technology, Engineering, & Maths (STEM)
                        Programs and Camps for kids and leaners of all grades. Discover education that feels like play!
                        Join us for a class after-school or Saturdays, a camp during a school break, a party on your child’s
                        birthday! Give the opportunity to learn 21st century skills and boost confidence to succeed in
                        mathematics. AeroBuddies’s proven curriculum, business model and learning management system is
                        available foraspiring entrepreneurs wanting to start an STEM education and ourutoring business.
                        <br />
                        <br />
                        AeroBuddies’s proven curriculum, operating system and learning management system
                        is available for license.
                        Contact info@Aerobuddieslearning.com for additional information.
                    </p>
                </div>

                <Link href='/programs'>
                    <button className={classes.enroll}>Enroll Now!</button>
                </Link>

                <h1 className={classes.whyAerobuddies}>Why AeroBuddies?</h1>


                <div className={classes.bodyContainer2}>
                    <div className={classes.why}>
                        <img src="./images/smile.png" alt="smile image" />

                        <h3>A focus on fun</h3>

                        <div>
                            <p>
                                Our forward-thinking approach allows students to grasp concepts
                                that are fundamental to academic success in a way that feels
                                like play.
                            </p>
                        </div>
                    </div>
                    <div className={classes.why}>
                        <img src="./images/class.png" alt="smile image" />

                        <h3>Experiential Learning</h3>

                        <div>
                            <p>
                                Hands-on STEM enrichment programs engage kids in creative,
                                conceptual problem solving that bridges the gap between theory and practice.
                            </p>
                        </div>
                    </div>
                    <div className={classes.why}>
                        <img src="./images/innovation.png" alt="smile image" />

                        <h3>Cutting-Edge Technology</h3>

                        <div>
                            <p>
                                From Game-Based Learning, to LEGO robotics systems,
                                to littleBits magnetic circuitry, technology plays a key role in every course.
                            </p>
                        </div>

                    </div>
                    <div className={classes.why}>
                        <img src="./images/group1.jpg" alt="smile image" className={classes.groupImage} />

                        <h3>Small Class Sizes</h3>
                        <div>
                            <p>
                                Our low student to instructor ratio allows kids to get the attention they need,
                                while fostering collaboration and teamwork in a peer-based learning environment.
                            </p>
                        </div>
                    </div>

                </div>

                <h1>What Parents Say?</h1>

                <div className={classes.bodyContainer3}>
                    <div className={classes.whatDetails}>
                        <p>
                            “I really appreciate the time and effort that you invested in our son,
                            Sam. Not only did you provide great education to him but fantastic feedback
                            to us as parents. We, like most parents, think our children are exceptional
                            but you confirmed it for us.”
                        </p>
                        <span>- Tshidi M.</span>
                    </div>
                    <div className={classes.whatDetails}>
                        <p>
                            “I wanted to let you know that Bajian has been raving about the class;
                            how much fun she had with you and how she enjoyed learning new math skills.
                            This morning, she explained the decimal placement and brought her homework to
                            school to do during recess!!! Thank you for your help and making math fun.”
                        </p>
                        <span>- Elsie S.</span>
                    </div>
                    <div className={classes.whatDetails}>
                        <p>
                            “Grady was really nervous before his first Minecraft class, but your staff
                            was patient and kind. By the end he was totally enthralled and learned
                            how to use a mouse and keyboard and the next week he was talking about biomes. Overall he absolutely loves it and to get a nice recap after each lesson is above and beyond expectations. I hope this sets him up to learn new stuff from you guys for years to come!”
                        </p>
                        <span>- Josh M.</span>
                    </div>
                    <div className={classes.whatDetails}>
                        <p>
                            “When Marcia got her first A in math it changed her whole attitude
                            towards school, not just math. Thank You Aerobuddies!”
                        </p>
                        <span>- Thabo Z.</span>
                    </div>
                </div>

                {/* <div className={classes.hello}>
                    <h1>Hello</h1>
                    </div> */}

                <h1>As featured On</h1>
                <div className={classes.features}>
                    <img src="./images/702news.jpeg" style={{ width: '200px', height: '100px' }} alt="702 image" />
                    <img src="./images/cnbc.jpeg" alt="cnbc image" />
                    <img src="./images/thestar.jpeg" alt="africa image" />
                    <img src="./images/safm.jpeg" style={{ width: '140px', height: '100px' }} alt="cnbc image" />

                </div>

                <div className={classes.features2}>
                    <img src="./images/sowetan.jpeg" style={{ width: '140px', height: '100px' }} alt="cnbc image" />
                    <img src="./images/newsroom.jpeg" style={{ width: '140px', height: '150px' }} alt="africa image" />
                    <img src="./images/sowetoTV.jpeg" style={{ width: '140px', height: '100px' }} alt="cnbc image" />
                </div>

                <h1>Our Accolades</h1>
                <div className={classes.acolades}>
                    <img src="./images/702.jpeg" style={{ width: '160px', height: '100px' }} alt="702 image" />
                    <img src="./images/africa-ea.jpeg" alt="cnbc image" />

                    <img src="./images/caia.jpeg" style={{ width: '140px', height: '100px' }} alt="cnbc image" />

                </div>

            </div>
            <Footer />
        </>

    )
}

export default AeroBuddiesComp;