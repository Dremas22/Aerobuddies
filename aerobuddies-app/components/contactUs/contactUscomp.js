import React from "react";
import classes from './contactUs.module.css'
import ContactFooter from "../contactFooter/contactFooter";



function ContactUsComp() {
    return (
        <div className={classes.contactUs}>
            <div className={classes.contactUsContents}>
                <div className={classes.imageContact}>
                    <img src='./images/userEmail.jpeg' alt='user image'
                    className={classes.userPic}
                     />
                </div>
                <div className={classes.formContact}>
                    <h1>CONTACT US TODAY</h1>
                    <div className={classes.contactLocations}>
                        CENTURION | DIEPKLOOF | JEFFREYS BAY | LAGOS | ABUJA
                    </div>
                    <div className={classes.formDiv}>
                        <form className={classes.formC}>
                            <div className={classes.icons}>
                                <img src="./images/user.png" alt="user icon" 
                                className={classes.icon1} 
                                />
                                <input type="text"
                                    placeholder="Your Fullnames"
                                    className={classes.inputContact}
                                />
                            </div>
                            <div>
                            <img src="./images/email.png" alt="email icon" 
                                className={classes.email} 
                                />
                                <input type="email"
                                    placeholder="Your Email"
                                    className={classes.inputContact}
                                />
                            </div>
                            <div>
                            <img src="./images/call.png" alt="call icon" 
                                className={classes.call} 
                                />
                                <input type="number"
                                    placeholder="Your Phone Number"
                                    className={classes.inputContact}
                                />
                            </div>
                            <button type="submit" className={classes.submit}>Submit</button>

                        </form>
                    </div>

                </div>

            </div>
            <ContactFooter />

        </div>
    )
}

export default ContactUsComp;