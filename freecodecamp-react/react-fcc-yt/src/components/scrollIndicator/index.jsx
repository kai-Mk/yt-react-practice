import React, { useCallback, useEffect, useState } from "react";
import "./scroll.css";

const ScrollIndicator = ({ url }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const fetchData = async (url) => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();

            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setErrorMessage(error.message);
        }
    };

    useEffect(() => {
        fetchData(url);
    }, [url]);

    const handleScrollPercentage = () => {
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight
        );

        const howMuchScrolled =
            document.body.scrollTop || document.documentElement.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height) * 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage);

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    if (errorMessage) {
        return <div>Error!!:{errorMessage}</div>;
    }

    if (loading) {
        return <div>Loading data ! Please wait</div>;
    }

    return (
        <>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div
                        className="current-progress-bar"
                        style={{ width: `${scrollPercentage}%` }}
                    ></div>
                </div>
            </div>
            <div className="scroll-Indicator-container">
                {data && data.length > 0
                    ? data.map((dataItem) => (
                          <p key={dataItem.id}>{dataItem.title}</p>
                      ))
                    : null}
            </div>
        </>
    );
};

export default ScrollIndicator;
