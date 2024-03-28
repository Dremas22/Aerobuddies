import React, { useState } from "react";
import Login from "./login/login";
import Link from "next/link";
import classes from './navbar.module.css';


function Navbar() {

    const [isNavbarMobile, setIsNavbarMobile] = useState(false);

    function toggleLogin() {
        setIsNavbarMobile(!isNavbarMobile);
    }


    return (
        <>
            <nav className={classes.navContainer}>
                <div className={classes.navDiv}>

                    <div className={classes.logoDiv}>
                        <Link href='/' className={classes.links}>
                            <h2>Aerobuddies logo</h2>
                        </Link>
                    </div>

                    <div className={classes.linkDiv}>
                        <div className={classes.selectContainer}>
                            <select className={classes.aboutUs}>
                                <option>About Us</option>
                                <option>Our Story</option>
                                <option>why Aerobuddies</option>
                                <option>Meet The Team</option>
                            </select>
                            <img src='./images/arrowdown.png' alt='down arrow icon' />
                        </div>

                        <Link href='/programs' className={classes.links}>Programs</Link>
                        <Link href='/camps' className={classes.links}>Camps</Link>
                        <Link href='/events' className={classes.links}>Events</Link>
                        <Link href='/schools' className={classes.links}>Schools</Link>
                        <Link href='/schools' className={classes.links}>Locations</Link>
                        <Link href='/schools' className={classes.links}>Newsroom</Link>

                        <div className={classes.navLogin}>
                            <Login />
                        </div>

                    </div>
                    <div className={classes.menu} onClick={toggleLogin}>
                        <img src="./images/bars-solid.png" alt="menu image" />
                    </div>

                    {isNavbarMobile && (
                        <div className={classes.linkDivMobile}>
                            <div className={classes.selectContainerMobile}>
                                <select className={classes.aboutUsMobile}>
                                    <option>About Us</option>
                                    <option>Our Story</option>
                                    <option>why Aerobuddies</option>
                                    <option>Meet The Team</option>
                                </select>
                                <img src='./images/arrowdown.png' alt='down arrow icon' />
                            </div>

                            <Link href='/programs' className={classes.linksMobile}>Programs</Link>
                            <Link href='/camps' className={classes.linksMobile}>Camps</Link>
                            <Link href='/events' className={classes.linksMobile}>Events</Link>
                            <Link href='/schools' className={classes.linksMobile}>Schools</Link>
                            <Link href='/schools' className={classes.linksMobile}>Locations</Link>
                            <Link href='/schools' className={classes.linksMobile}>Newsroom</Link>

                            <div>
                                <Login className={classes.navLoginMobile} />
                            </div>
                        </div>
                    )}

                </div>


            </nav>

        </>

    )

}

export default Navbar;