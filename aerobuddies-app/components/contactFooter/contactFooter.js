import React from 'react';
import classes from './contactFooter.module.css';
import Link from 'next/link';

function ContactFooter() {
    return (
        <div className={classes.contactF}>
            <div className={classes.contactsDiv}>
                <h2>Contacts</h2>
                <ul>
                    <li> CENTURION: 000 000 0000</li>
                    <li> DIEPKLOOF: 000 000 0000</li>
                    <li>  JEFFREYS BAY: 000 000 0000</li>
                    <li>  LAGOS: 000 000 0000</li>
                    <li> ABUJA: 000 000 0000</li>
                </ul>
            </div>
            <div className={classes.socialImg}>

                <Link href='https://www.facebook.com/AeroBuddies/'>
                    <img src="./images/facebook.png" alt="facebook logo" />
                </Link>
                <div className={classes.socialDiv}>
                    MOST
                    <h2>ENGAGED</h2>
                    ACADEMIC PLATFORM

                </div>

            </div>
            <div className={classes.linksDiv}>
                <Link href='/' className={classes.link}>
                    <img src="./images/AeroBLogo.png" alt="Aerobuddies logo" />
                </Link>
                <Link href='/about-us' className={classes.link} >About Aerobuddies</Link>
                <Link href='/termsAndConditions' className={classes.link} >Terms and Conditions</Link>
                <Link href='/programs' className={classes.link} >Programs</Link>
                <Link href='/events' className={classes.link} >Events</Link>
                <Link href='/schools' className={classes.link} >For Schools</Link>
            </div>
        </div>
    )
}

export default ContactFooter;