import {useEffect, useState} from 'react';

const useWindowSizing = () => {
    const [windowSizing, setWindowSizing] = useState({
        width: null,
        height: null
    })

    useEffect(() => {
        const handleResizing = () => {
            setWindowSizing({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        handleResizing();

        window.addEventListener("resize", handleResizing);

        return () => window.removeEventListener('resize', handleResizing);
    }, [])

    return windowSizing;
}


export default useWindowSizing;
