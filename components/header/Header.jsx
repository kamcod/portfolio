import React from 'react';
import classes from './header.module.css';

export default function Header({selected, changeSelected}) {
    return(
        <>
            <nav className={classes.header_nav}>
                <div className={classes.logo}>
                    logo
                </div>
                <ul>
                    <li className={selected == 'home' ? classes.active : ""} onClick={()=> changeSelected('home')}>
                        <span>Home</span>
                    </li>
                    <li className={selected == 'about' ? classes.active : ""} onClick={()=> changeSelected('about')}>
                        <span>About</span>
                    </li>
                    <li className={selected == 'experience' ? classes.active : ""} onClick={()=> changeSelected('experience')}>
                        <span>Experience</span>
                    </li>
                    <li className={selected == 'portfolio' ? classes.active : ""} onClick={()=> changeSelected('portfolio')}>
                        <span>Portfolio</span>
                    </li>
                    <li className={selected == 'contact' ? classes.active : ""} onClick={()=> changeSelected('contact')}>
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>
        </>
    );
}
