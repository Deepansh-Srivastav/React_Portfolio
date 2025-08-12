import { useState, useEffect } from "react";
import { BREAKPOINTS } from "../utils/breakpoints";

export default function useDeviceType() {
    const getDeviceType = () => {
        const width = window.innerWidth;
        return {
            isMobile: width <= BREAKPOINTS.mobile,
            isTablet: width > BREAKPOINTS.mobile && width <= BREAKPOINTS.tablet,
            isLargeScreen: width > BREAKPOINTS.tablet,
        };
    };

    const [deviceType, setDeviceType] = useState(getDeviceType);

    useEffect(() => {
        const handleResize = () => {
            setDeviceType(getDeviceType());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return deviceType;
}
