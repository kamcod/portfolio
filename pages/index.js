import React, {useState} from "react";
import Header from "../components/header/Header.jsx";
import ProfilePic from '../components/layout/ProfilePic';
import Content from "../components/layout/Content";
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
        <Content>
            <h2 className="page_title">{selected !== 'home' && selected}</h2>
            {selected === 'home' && <HomePage gotoContact={changeSelected}/>}
            {selected === 'about' && <About  gotoContact={changeSelected}/>}
            {selected === 'experience' && <Experience />}
            {selected === 'portfolio' && <Portfolio />}
            {selected === 'contact' && <Contact />}
        </Content>
    </>
  )
}
