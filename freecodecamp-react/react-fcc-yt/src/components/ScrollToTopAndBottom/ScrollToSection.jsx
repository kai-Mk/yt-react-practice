import React, { useRef } from "react";

const ScrollToSection = () => {
    const ref = useRef();
    const data = [
        {
            label: "First Card",
            style: {
                width: "100%",
                height: "600px",
                background: "red",
            },
        },
        {
            label: "Second Card",
            style: {
                width: "100%",
                height: "600px",
                background: "yellow",
            },
        },
        {
            label: "Third Card",
            style: {
                width: "100%",
                height: "600px",
                background: "blue",
            },
        },
        {
            label: "Forth Card",
            style: {
                width: "100%",
                height: "600px",
                background: "green",
            },
        },
        {
            label: "Fifth Card",
            style: {
                width: "100%",
                height: "600px",
                background: "gray",
            },
        },
    ];

    const handleScrollToSection = () => {
        let pos = ref.current.getBoundingClientRect().top;

        window.scrollTo({
            top: pos,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <h1>Scroll To a particular section</h1>
            <button onClick={handleScrollToSection}>Click To Scroll</button>
            {data.map((dataItem, index) => (
                <div ref={index === 3 ? ref : null} style={dataItem.style}>
                    <h3>{dataItem.label}</h3>
                </div>
            ))}
        </div>
    );
};

export default ScrollToSection;
