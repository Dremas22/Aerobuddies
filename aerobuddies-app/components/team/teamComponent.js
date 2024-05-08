
import classes from "./teamComponent.module.css"
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"

function MeetTheteam() {
    return (
        <>
            <Navbar />

            <div className={classes.teamContainer}>

                <div className={classes.teamContents}>

                    <h1>Meet AeroBuddies Team</h1>

                    <div className={classes.teamMembers}>
                        <div className={classes.member}>
                            <img src="./images/tshepiso.jpeg" alt="member image" />
                        </div>
                        <div className={classes.memberInfo}>
                            <h2>Joe Phalwane</h2>
                            <h5>Chief Executive Officer</h5>
                            <p>
                                Joe Phalwane is a multiple award-winning entrepreneur with international business experience.
                                Born in Diepkloof Soweto raised in a village near Brits. He is an aviator, entrepreneur, leadership speaker,
                                and a STEM (Science, Technology, Engineering, and Mathematics) education enthusiast. Phalwane began his
                                pilot training in his mid-thirties, refusing to be denied the achievement of his dream because of his age.
                                He later founded AeroBuddies, an innovative education company aiming to make tutoring accessible to the 90% of
                                kids who don’t get high quality tutoring services in Sub–Saharan Africa. His inspiration behind founding
                                AeroBuddies was to help kids struggling with maths and science to eventually excel like those receiving premium
                                tutoring services. He believes that introducing children to STEM education at an early age opens up more
                                opportunities for them by the time they reach high school. In summary, Joe Phalwane is a passionate advocate
                                for STEM education, using innovative methods to inspire kids across Africa with STEM programs they’ve never
                                been exposed to.
                            </p>
                        </div>
                    </div>

                    <div className={classes.liner}></div>

                    <div className={classes.teamMembers}>
                        <div className={classes.member1}>
                            <img src="./images/pat.jpeg" alt="member image" />
                        </div>
                        <div className={classes.memberInfo}>
                            <h2>Pat Olonta</h2>
                            <h5>AeroBuddies Nigeria</h5>
                            <h5>Country Manager</h5>
                            <p>
                                Pat Olonta is the country manager for Aerobuddies in Nigeria. A professional pilot with
                                24 years’ experience in the commercial and corporate aviation sector. He has over 8,000 hours
                                flying aircrafts like Short 360, Dash 8, Boeing 737, Hawker 125, Hawker 4000, Gulfstream 200,
                                Challenger 650 and Falcon 7x. As an active pilot Pat Olonta applies maths and science in
                                his flying activities and is passionate about teaching embedded knowledge of maths and
                                science to students thus giving them a practical application of maths and science through
                                aviation and aeronautics sciences. His leadership and commitment to ensuring that kids get
                                access to top quality educational programs influenced him to establish and grow AeroBuddies
                                in Nigeria after seeing the quality of AeroBuddies tutoring and STEM education programs.
                                Pat has always been keenly interested in helping students of all abilities strive to reach
                                their full potential and thus enable them to eventually pursue their educational dreams. Pat
                                did his pilot training in the United States of America where he obtained his Commercial
                                Pilots Licence and Airline Transport Pilot Licence.
                            </p>
                        </div>
                    </div>

                    <div className={classes.liner2}></div>

                    <div className={classes.teamMembers}>
                        <div className={classes.member}>
                            <img src="./images/ogabo.jpeg" alt="member image" />
                        </div>
                        <div className={classes.memberInfo}>
                            <h2>Emmanuel Ogabo</h2>
                            <h5>Tittle</h5>
                            <p>
                                He is a multiple award-winning entrepreneur with international business experience.
                                
                            </p>
                        </div>
                    </div>

                    <div className={classes.liner2}></div>

                </div>
                <Footer />
            </div>
        </>
    )
}

export default MeetTheteam;