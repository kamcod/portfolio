import React, {useState} from "react";
import Header from "../components/header/Header.jsx";
import ProfilePic from '../components/layout/ProfilePic';
import HomePage from "../components/home/HomePage";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";


export default function Home() {
    const [selected, setSelected] = useState('home');

    const changeSelected = (value) => {
        setSelected(value);
    }

  return (
    <>
        <Header selected={selected} changeSelected={changeSelected}/>
        <ProfilePic />
        <div className="content">
                {selected === 'home' && <HomePage />}
                {selected === 'about' && <About />}
                {selected === 'experience' && <Experience />}
                {selected === 'portfolio' && <Portfolio />}
                {selected === 'contact' && <Contact />}

        </div>
    </>
  )
}
