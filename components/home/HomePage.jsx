import React from "react";
import classes from './homepage.module.css';

export default function HomePage({ gotoContact }) {
    return (
        <>
            <span className={classes.firstHi}>
                <span className={classes.hello}> Hello,</span> my name is
            </span>
            <div className={classes.title_block}>
                <p className={classes.profile_name}>
                    Muhammad Kamran
                </p>
                <p className={classes.tagline}>
                    Web Developer
                </p>
            </div>
            <div className={classes.actions}>
                <button className={classes.contactBtn} onClick={()=>gotoContact('contact')}>Contact</button>
            </div>
            <div className={classes.details}>
                Here you can have detail about my <a className="links" onClick={()=>gotoContact('about')}>background and expertise</a>, <a className="links" onClick={()=>gotoContact('experience')}>experiences</a> in different field for different clients and organisations. You can have a look on my <a className="links" onClick={()=>gotoContact('portfolio')}>recent work</a> as well.
            </div>
        </>
    )
}
