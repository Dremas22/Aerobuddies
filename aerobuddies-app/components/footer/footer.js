import Link from "next/link";
import React from "react";
import classes from "./footer.module.css"

function Footer() {
    return (
        <div className={classes.footer}>

            <div className={classes.footerLogo}>
                <Link href='/' className={classes.link}>
                <img src="./images/AeroBLogo.png" alt="Aerobuddies logo" />
                </Link>
            </div>

            <div className={classes.footer2}>
                <h3>More Information</h3>
                <br />
                <Link href='/aboutAerobuddies' className={classes.link} >About Aerobuddies
                </Link>
                <Link href='/allCampuses' className={classes.link} >All Campuses</Link>
                <Link href='/trademarks' className={classes.link} >Trademarks and Brand Use</Link>
                <Link href='/termsConditions' className={classes.link} >Terms and Conditions</Link>
            </div>
            <div className={classes.footer2}>
                <h3>Site Navigation</h3>
                <br />
                <Link href='/programs' className={classes.link} >Programs</Link>
                <Link href='/campus' className={classes.link} >Campus</Link>
                <Link href='/events' className={classes.link} >Events</Link>
                <Link href='/schools' className={classes.link} >For Schools</Link>
            </div>
            <div className={classes.footer3}>
                <h3>Social Media</h3>
                <br />
                <Link href='https://www.facebook.com'>
                    <img src="./images/facebook.png" alt="facebook logo" />
                </Link>
                <Link href='https://www.linkedin.com'>
                    <img src="./images/linkedin.png" alt="facebook logo" />
                </Link>
                <Link href='https://www.twitter.com'>
                    <img src="./images/twitter.png" alt="facebook logo" />
                </Link>
            </div>

        </div>
    )
}

export default Footer;