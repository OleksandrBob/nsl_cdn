import { useEffect } from "react";

export const Custom = () => {
    useEffect(()=>{
        setTimeout(()=> console.log("hi from custom"), 3000);
    }, []);

    return (<>custo</>);
};
