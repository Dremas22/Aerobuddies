
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
                    </div>
                </div>

                <div  className={classes.liner}></div>

                <div className={classes.teamMembers}>
                    <div className={classes.member1}>
                        <img src="./images/pat.jpeg" alt="member image" />
                    </div>
                    <div className={classes.memberInfo}>
                        <h2>Pat Olonta</h2>
                        <h5>AeroBuddies Nigeria</h5>
                        <h5>Country Manager</h5>
                    </div>
                </div>

                <div  className={classes.liner}></div>

            </div>
            <Footer />
        </div>
        </>
    )
}

export default MeetTheteam;