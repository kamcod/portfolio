import React from "react";
import Header from "../components/header/Header.jsx";
import ProfilePic from '../components/layout/ProfilePic';

export default function Home() {
  return (
    <>
        <Header selected="home"/>
        <ProfilePic />
        Home Page
    </>
  )
}
