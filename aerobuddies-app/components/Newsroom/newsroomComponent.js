import React from "react";
import classes from "./newsroomComponent.module.css"
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Link from "next/link";
import Carousel from 'react-bootstrap/Carousel';


function NewsroomComp() {
    return (
        <>
        <Navbar />
        <div className={classes.newsroom}>

            <h1>Newsroom Articles</h1>
            <div className={classes.newsroomContainer}>

                <div className={classes.contents1}>
                    <Carousel data-bs-theme="dark" className={classes.carouselContainer}>

                        <Carousel.Item className={classes.itemContainer}>

                            <div className={classes.articlesContainer}>
                                <div className={classes.articleDiv}>
                                    <img
                                        className="d-block w-100"
                                        src="./images/article1Image.jpg"
                                        alt="First slide"
                                    />
                                </div>
                                <div className={classes.articleDiv}>
                                    <Link href="https://bit.ly/43VB8yQ">
                                        <h4>Making Aviation accessible for towns</h4>
                                    </Link>
                                </div>
                            </div>

                            {/* <Carousel.Caption>
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}

                        </Carousel.Item>

                        <Carousel.Item className={classes.itemContainer}>

                            <div className={classes.articlesContainer}>
                                <div className={classes.articleDiv}>
                                    {/* <img
                                        className="d-block w-100"
                                        src="./images/kidsLearning.png"
                                        alt="First slide"
                                    /> */}

                                    <iframe width="622" height="360" src="https://www.youtube.com/embed/vvHUYGYN9ro" title="This entrepreneur 
                                    is out to change SA’s low maths &amp; science marks" frameborder="0" allow="accelerometer; autoplay; 
                                    clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                                    </iframe>

                                </div>
                                <div className={classes.articleDiv}>
                                    <Link href="https://bit.ly/49vIxq6">
                                        <h4>Change SA’s low maths & science marks</h4>
                                    </Link>
                                </div>
                            </div>

                            {/* <Carousel.Caption>
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption> */}

                        </Carousel.Item>

                        <Carousel.Item className={classes.itemContainer}>

                            <div className={classes.articlesContainer}>
                                <div className={classes.articleDiv}>
                                    <img
                                        className="d-block w-100"
                                        src="./images/kidsLearning.png"
                                        alt="First slide"
                                    />
                                </div>
                                <div className={classes.articleDiv}>
                                    <Link href="https://bit.ly/3xsRnYm">
                                        <h4>Designed to improve Maths & Sicence marks</h4>
                                    </Link>
                                </div>
                            </div>

                            {/* <Carousel.Caption>
                                <h5>Third slide label</h5>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption> */}

                        </Carousel.Item>

                    </Carousel>



                </div>

            </div>
            <Footer />
        </div>
        </>
    )
}

export default NewsroomComp;