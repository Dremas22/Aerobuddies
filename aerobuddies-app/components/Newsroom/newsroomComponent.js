import React from "react";
import classes from "./newsroomComponent.module.css"
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Link from "next/link";
import Carousel from 'react-bootstrap/Carousel';


function NewsroomComp() {
    return (
        <div className={classes.newsroom}>
            <Navbar />

            <h1>Newsroom Articles</h1>
            <div className={classes.newsroomContainer}>

                <div className={classes.contents1}>
                    <Carousel data-bs-theme="dark" className={classes.carouselContainer}>

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
                                    <img
                                        className="d-block w-100"
                                        src="./images/kidsLearning.png"
                                        alt="First slide"
                                    />
                                </div>
                                <div className={classes.articleDiv}>
                                    <h3>Article 2</h3>
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
                                    <h3>Article 3</h3>
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
    )
}

export default NewsroomComp;