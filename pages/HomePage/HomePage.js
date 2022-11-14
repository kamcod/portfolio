import React from "react";
import Image from "next/image";
import classes from "./homepage.module.css";

export default function HomePage() {
    return (
        <>
            <div class={classes.gray_layer}>
            </div>
            <Image class={classes.dp} src="/images/bg.jpg" width={500} height={500} alt="profile photo"/>
        </>
    )
}
