import { useEffect, useState } from "react";

const useWindowSize = () => {

    const [size, setSize] = useState({
        width: window.innerWidth, height: window.innerHeight
    });

    useEffect(() => {

        const handleResize = () => {
            setSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener('resize', handleResize);

    }, []);

    return size;
};

export default useWindowSize;