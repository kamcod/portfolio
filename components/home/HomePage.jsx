import React, {useState, useEffect} from "react";
import classes from './homepage.module.css';

export default function HomePage() {

    const [inProp, setInProp] = useState(false);

    useEffect(()=>{
        setInProp(true);
    }, []);
    return (
        <>
            <span>
                Hello, my name is
            </span>
            <div className={classes.title_block}>
                <p className={classes.profile_name}>
                    Mudummyt Knamen
                </p>
                <p className={classes.tagline}>
                    Web Developer
                </p>
            </div>
            <br />
            web developer <br />
            contact <br />
            9348504839084

        </>
    )
}
