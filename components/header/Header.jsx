import React, {useEffect, useState} from 'react';
import classes from './header.module.css';
import Image from 'next/image';

export default function Header({selected, changeSelected}) {
    const [navStyle, setNavStyle] = useState({})

    const toggleMenu = () => {
        let style;
        if(navStyle.transform === 'translateX(0%)'){
            style = {display: 'flex', transform: 'translateX(+100%)', transition: 'all 0.5s ease-out'}
        } else {
            style = {display: 'flex', transform: 'translateX(0%)', transition: 'all 0.5s ease-out'}
        }
        setNavStyle(style);
    };


    return(
        <>
            <div className={classes.toggler}>
                <Image onClick={toggleMenu} src="/images/menu.svg" width={35} height={35} alt="menu icon"/>
            </div>
            <nav className={classes.header_nav} style={navStyle}>
                <div className={classes.logo}>
                    |MKamran
                </div>
                <ul>
                    <li className={selected === 'home' ? classes.active : ""} onClick={()=> changeSelected('home')}>
                        <span>Home</span>
                    </li>
                    <li className={selected === 'about' ? classes.active : ""} onClick={()=> changeSelected('about')}>
                        <span>About</span>
                    </li>
                    <li className={selected === 'experience' ? classes.active : ""} onClick={()=> changeSelected('experience')}>
                        <span>Experience</span>
                    </li>
                    <li className={selected === 'portfolio' ? classes.active : ""} onClick={()=> changeSelected('portfolio')}>
                        <span>Portfolio</span>
                    </li>
                    <li className={selected === 'contact' ? classes.active : ""} onClick={()=> changeSelected('contact')}>
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>
        </>
    );
}
