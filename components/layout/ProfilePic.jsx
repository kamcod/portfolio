import React, {useEffect, useState} from "react";
import Image from "next/image";

export default function Home() {
    const [dpWidth, setDpWidth] = useState(500);
    const [dpHeight, setDpHeight] = useState(500);
    const [profileImgSrc, setProfileImgSrc] = useState('/images/bg.jpg');


    useEffect(()=> {
        const vWidth = window.innerWidth;
        let value = vWidth * 0.32;
        setDpWidth(value);
        setDpHeight(value);
        if(document.domain === 'localhost'){
            setProfileImgSrc('/images/bg.jpg');
        } else {
            setProfileImgSrc('https://portfolio-kamcod.vercel.app/images/bg.jpg');
        }

    }, []);
    return (
        <>
                <div className="gray_layer">
                </div>
                <Image className="dp" src={profileImgSrc} width={dpWidth} height={dpHeight} alt="profile photo"/>
        </>
    )
}
