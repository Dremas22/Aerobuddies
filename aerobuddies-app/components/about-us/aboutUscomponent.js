import React from "react";
import classes from "./about-us.module.css"
import Navbar from "../navbar/navbar";
import Image from "next/image";
import Footer from "../footer/footer";

function AboutUs() {
    return (
        <div className={classes.aboutUsContainer}>
            <Navbar />
            <div className={classes.aboutUsContents}>
                <div className={classes.aboutUsContents2}>
                    <h1>Our Story</h1>
                    <p>
                        We do STEM Education and Tutoring for kids in grades 1-12.
                        AeroBuddies is the go-to STEM education and tutoring company and caters for parents who want to
                        give their children an academic edge and 21st century skills for a better future. Kids
                        experience quality Maths Tutoring and STEM exploration and discover how much fun learning
                        can be at the AeroBuddies tech-based environment.
                    </p>
                    <p>
                        In 2010, entrepreneur Joe Phalwane recognized that, to truly make it in life students need to be
                        successful at school and for that they need a solid understanding of Science, Technology,
                        Engineering and Maths (STEM) education and in particular mathematics. There was a massive gap,
                        a disconnect between pupils’ learning skills and the maths curriculum they were taught in school.
                        Joe then began a mission to find a solution that could make STEM learning practical and
                        while at flight school training for a pilot license, a sight of a child who must have been 8 years
                        old walking around with his dad doing preflight checks around and inside the airplane planted a
                        seed in his mind that aviation can be used to teach STEM. AeroBuddies was born.
                    </p>
                    <p>
                        AeroBuddies started as an innovative aviation themed STEM education business which was designed
                        to fundamentally improve maths and science education in the country though teaching embedded
                        knowledge of maths and science through teaching kids to fly on flight simulators similar to how a student
                        pilot learns to fly at a pilot training school thus teaching them practical application of maths and
                        science. AeroBuddies’ solution became a response to the discouraging reports about South Africa’s
                        schoolchildren’s performance in maths and science as per the Organisation for Economic Co-operation and
                        Development OECD report ranking South Africa’s schoolchildren 75th out of 76 countries in maths and science
                        performance in 2015. In 2016, the business started as a going concern and has never looked backwards, going
                        on to win business awards.
                    </p>
                    <p>
                        To address that gap in underprivileged communities, an AeroBuddies centre was established in Soweto and
                        Bethlehem in the Freestate —a STEM Education-only learning centre committed to providing the world’s best
                        instruction. Their goal: teach children how to think, with the skills to succeed in maths and STEM in
                        general plus giving them the confidence to achieve their academic potential.
                    </p>


                </div>

            </div>
            
            <div className={classes.videoBackground}>

                <video autoPlay loop muted className={classes.video}>
                    <source src="/videos/BG1.mp4" type="video/mp4" />

                </video>
            </div>

            <Footer />

        </div>
    )
}

export default AboutUs;