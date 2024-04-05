
import classes from "./teamComponent.module.css"
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"

function MeetTheteam() {
    return (
        <div className={classes.teamContainer}>
            <Navbar />
            <div className={classes.teamContents}>

                <h1>Meet AeroBuddies Team</h1>

                <div className={classes.teamMembers}>
                    <div className={classes.member}>
                        <img src="./images/picture1.jpg" alt="member imgage" />
                    </div>
                    <div className={classes.memberInfo}>
                        <h2>Member Name</h2>
                    </div>
                </div>

                <div  className={classes.liner}></div>

            </div>
            <Footer />
        </div>
    )
}

export default MeetTheteam;