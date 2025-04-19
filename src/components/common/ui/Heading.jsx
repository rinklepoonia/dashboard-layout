import React from "react";

const Heading = ({
    variant = "default",
    className = "",
    children,
}) => {
    const variants = {
        default: "",
        primary:
            "text-custom-3xl md:text-custom-4xl lg:text-custom-7xl font-bold !leading-100",
        secondary: "text-lg md:text-xl lg:text-custom-3xl font-bold !leading-166",
        Tertiary: "text-base md:text-base lg:text-xl font-semibold !leading-100",
        Quaternary: "text-sm md:text-base font-medium !leading-100",
        small: "text-xs md:text-sm font-normal leading-170",
    };

    return (
        <h2 className={`text-off-black  ${variants[variant]} ${className}`}>
            {children}
        </h2>
    );
};

export default Heading;
