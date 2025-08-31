
import React, { useState } from "react";
import Login from "./login/login";
import Link from "next/link";
import classes from './navbar.module.css';

function Navbar() {
    const [isNavbarMobile, setIsNavbarMobile] = useState(false);
    const [isMenu, setIsMenu] = useState(true);

    function toggleMenu() {
        setIsNavbarMobile(!isNavbarMobile);
        setIsMenu(!isMenu);
    }

    function cancelNavBarMobile() {
        setIsNavbarMobile(false);
        setIsMenu(true);
    }
    function handleChange(event) {

        if (event.target.value === "Our Story") {
            goToAboutUsPage();
        }

        if (event.target.value === "Why Aerobuddies") {
            goToWhyAeroBPage();
        }

        if (event.target.value === "Meet The Team") {
            goToMeetTheTeam();
        }
        
    }
    function goToWhyAeroBPage() {
        window.location.href = './whyAerobuddiesPage';
    }
    function goToAboutUsPage() {
        window.location.href = './about-us';
    }

    function goToMeetTheTeam() {
        window.location.href = './meetTheTeam';
    }
    
    return (
        <>
            <nav className={classes.navContainer}>
                <div className={classes.navDiv}>
                    <div className={classes.logoDiv}>
                        <Link href='/' className={classes.links}>
                            <img src="./images/AeroBLogo.png" alt="Aerobuddies logo" />
                        </Link>
                    </div>

                    <div className={classes.linkDiv}>
                        <div className={classes.selectContainer}>
                            <select className={classes.aboutUs} onChange={handleChange}>
                                <option>About us</option>
                                <option>Our Story</option>
                                <option>Why Aerobuddies</option>
                                <option>Meet The Team</option>
                            </select>
                            
                        </div>

                        <Link href='/programs' className={classes.links}>Programs</Link>
                        <Link href='/events' className={classes.links}>Events</Link>
                        <Link href='/schools' className={classes.links}>Schools</Link>
                        <Link href='/locations' className={classes.links}>Locations</Link>
                        <Link href='/newsroom' className={classes.links}>Newsroom</Link>
                        <Link href='/contactUs' className={classes.links}>Contact</Link>

                        <div className={classes.navLogin}>
                            <Login />
                        </div>
                    </div>

                    {isMenu && (
                        <div className={classes.menu} onClick={toggleMenu}>
                            <div className={classes.line}></div>
                            <div className={classes.line}></div>
                            <div className={classes.line}></div>
                        </div>
                    )}

                    {isNavbarMobile  && (
                        <div className={classes.linkDivMobile}>
                            <select onChange={handleChange}>
                                <option>About Us</option>
                                <option>Our Story</option>
                                <option>Why Aerobuddies</option>
                                
                            </select>
                            <div className={classes.mobileDiv}>
                                <Link href='/programs' className={classes.links}>Programs</Link>
                                
                                <Link href='/events' className={classes.links}>Events</Link>
                                <Link href='/schools' className={classes.links}>Schools</Link>
                                <Link href='/locations' className={classes.links}>Locations</Link>
                                <Link href='/newsroom' className={classes.links}>Newsroom</Link>
                                <Link href='/contactUs' className={classes.links}>Contact</Link>
                                
                                <Login />
                                
                            </div>
                            <button className={classes.cancelBtn} onClick={cancelNavBarMobile}>Cancel</button>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
