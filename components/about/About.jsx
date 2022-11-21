import React from "react";
import classes from './about.module.css'

export default function About({ gotoContact }) {
    return (
        <>
        <p className={classes.para}>
            I am a graduate in Computer Engineering from COMSATS university, Islamabad.
            I have great logical mind having great problem solving skills.
            I am self motivated and a responsible individual who is looking for a good opportunity to utilize my skills for mutual benefits.
        </p>
            <p className={classes.para}>
                I developed my expertise in web development and application security.
                I am well familiar with different programming languages like C, C++, python, html, CSS, JavaScript.
                I feel very comfortable in MERN stack web development and currently I am working in React js, Vue js, Node, Express and Mongoose.
            </p>
            <p className={classes.para}>
                You can also check my profiles on <a className="links" href="https://www.linkedin.com/in/muhammad-kamran-38667895/">linkedin</a>, <a className="links" href="https://github.com/kamcod">github</a> and <a className="links" href="https://twitter.com/_kamranmuhammad">twitter</a> or you can directly <a className="links" onClick={()=>gotoContact('contact')}>contact me</a>.
            </p>
            <p className={classes.para}>
                I always believe in strong customer-client relationship.
                It is guaranteed that you will be satisfied by quality of my work and will come again. Thanks!
            </p>
        </>
    )
}
