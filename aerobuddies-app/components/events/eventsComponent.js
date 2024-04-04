import React from "react";
import Navbar from "../navbar/navbar";
import classes from "./events.module.css"
import Footer from "../footer/footer";

function Events() {
    return (
        <div className={classes.events_Schools}>
            
            <Navbar />

            <h1>Events</h1>

            <div className={classes.container1}>
                <p className={classes.container1Heading}>Kids have a blast. You get a break.</p>
                <div className={classes.eventsContainer2}>
                    <div className={classes.eventsContents}>
                        <h1>Birthday Parties</h1>
                    </div>
                    <div className={classes.eventsContents}>
                        <h1>Parents' Night Out</h1>
                    </div>
                    
                    <div className={classes.eventsContents}>
                        <h1>Saturday Kids Club</h1>
                    </div>

                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Events;