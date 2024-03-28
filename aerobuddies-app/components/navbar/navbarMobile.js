import { useState } from "react";
import React from "react";
import Link from "next/link";
import classes from "./navbarMobile.module.css"
import Login from "./login/login";

// function NavBarMobile() {

//     const [isNavbarMobile, setIsNavbarMobile] = useState(false);

//     function toggleLogin() {

//         setIsNavbarMobile(!isNavbarMobile)

//     }

//     return (
//         <div className={classes.navMobile} onC>


//            <div className={classes.menu} >
//             <img src="./images/bars-solid.png" alt="menu image" />
//            </div>

//             <div className={classes.linkDivMobile}>
//                 <div className={classes.selectContainerMobile}>
//                     <select className={classes.aboutUsMobile}>
//                         <option>About Us</option>
//                         <option>Our Story</option>
//                         <option>why Aerobuddies</option>
//                         <option>Meet The Team</option>
//                     </select>
//                     <img src='./images/arrowdown.png' alt='down arrow icon' />
//                 </div>

//                 <Link href='/programs' className={classes.linksMobile}>Programs</Link>
//                 <Link href='/camps' className={classes.linksMobile}>Camps</Link>
//                 <Link href='/events' className={classes.linksMobile}>Events</Link>
//                 <Link href='/schools' className={classes.linksMobile}>Schools</Link>
//                 <Link href='/schools' className={classes.linksMobile}>Locations</Link>
//                 <Link href='/schools' className={classes.linksMobile}>Newsroom</Link>

//                 <div>
//                     <Login  className={classes.navLoginMobile} />
//                 </div>

//             </div>


//         </div>
//     )

// }

function NavBarMobile() {
    const [isNavbarMobile, setIsNavbarMobile] = useState(false);

    function toggleLogin() {
        setIsNavbarMobile(!isNavbarMobile);
    }

    return (
        <div className={classes.navMobile}>
            <div className={classes.menu} onClick={toggleLogin}>
                <img src="./images/bars-solid.png" alt="menu image" />
            </div>

            {isNavbarMobile && (
                <div className={classes.linksDivMobile}>
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
    );
}

export default NavBarMobile;

