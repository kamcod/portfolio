import React, {useState, useEffect} from "react";

export default function HomePage() {

    const [inProp, setInProp] = useState(false);

    useEffect(()=>{
        setInProp(true);
    }, []);
    return (
        <>

            Home Page <br />
            hello, my name is
            <br />
            alex james
            <br />
            web developer <br />
            contact <br />
            9348504839084

        </>
    )
}
