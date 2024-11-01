import React from "react";
import UseWindowResize from "./UseWindowResize";

const UseWindowResizeTest = () => {
    const { width, height } = UseWindowResize();
    return (
        <div>
            <h1>Use Window resize Hook</h1>
            <p> width is {width}</p>
            <p>Height is {height}</p>
        </div>
    );
};

export default UseWindowResizeTest;
