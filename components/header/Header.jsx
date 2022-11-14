import React from 'react';
import classes from './header.module.css';
import Link from "next/link";

export default function Header({selected}) {
    return(
        <>
            <nav className={classes.header_nav}>
                <div className={classes.logo}>
                    logo
                </div>
                <ul>
                    <li className={selected == 'home' ? classes.active : ""}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={selected == 'about' ? classes.active : ""}>
                        <Link href="/">About</Link>
                    </li>
                    <li className={selected == 'experience' ? classes.active : ""}>
                        <Link href="/">Experience</Link>
                    </li>
                    <li className={selected == 'portfolio' ? classes.active : ""}>
                        <Link href="/">Portfolio</Link>
                    </li>
                    <li className={selected == 'contact' ? classes.active : ""}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
