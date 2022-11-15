import React, {useEffect, useState} from "react";
import Image from "next/image";
import AppConfig from "../../config/AppConfig";

export default function Home() {
    const [dpWidth, setDpWidth] = useState(100);
    const [dpHeight, setDpHeight] = useState(100);

    const imgLoader = ({ src, width, quality }) => {
        return `${AppConfig.appUrl}/${src}?w=${width}&q=${quality || 75}`
    }

    useEffect(()=> {
        const vWidth = window.innerWidth;
        let value = vWidth * 0.32;
        setDpWidth(value);
        setDpHeight(value);
    }, []);

    return (
        <>
                <div className="gray_layer">
                </div>
                <Image className="dp" src="/images/bg.jpg" width={dpWidth} loader={imgLoader} height={dpHeight} alt="profile photo"/>
        </>
    )
}