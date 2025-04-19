import React from "react";

const Paragraph = ({
    variant = "default",
    className = "",
    children,
}) => {
    const variants = {
        default: "",
        primary: "text-sm md:text-base font-normal !leading-100",
        secondary: "text-xs md:text-sm font-normal !leading-166",
        small: "text-xs font-normal leading-166",
    };

    return <p className={`text-light-grey-300 ${variants[variant]} ${className}`}>{children}</p>;
};

export default Paragraph;
