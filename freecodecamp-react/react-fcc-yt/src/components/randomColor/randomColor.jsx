import React, { useEffect, useState } from "react";
import styles from "./RandomColor.module.css";

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length);
    };

    const handleCreateRandomHexColor = () => {
        //ex #948364
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }

        setColor(hexColor);
    };

    const handleCreateRandomRgbColor = () => {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r}, ${g}, ${b})`);
    };

    useEffect(() => {
        if (typeOfColor === "hex") handleCreateRandomHexColor();
        else handleCreateRandomRgbColor();
    }, [typeOfColor]);

    return (
        <>
            <h1>Random Color</h1>
            <div
                className="random-color-container"
                style={{
                    width: "100%",
                    height: "500px",
                    background: color,
                }}
            >
                <button
                    onClick={() => setTypeOfColor("hex")}
                    className={
                        typeOfColor === "hex"
                            ? `${styles.active} ${styles.btn} `
                            : styles.btn
                    }
                >
                    Create HEX Color
                </button>
                <button
                    onClick={() => setTypeOfColor("rgb")}
                    className={
                        typeOfColor === "rgb"
                            ? `${styles.active} ${styles.btn} `
                            : styles.btn
                    }
                >
                    Create RGB Color
                </button>
                <button
                    onClick={
                        typeOfColor === "hex"
                            ? handleCreateRandomHexColor
                            : handleCreateRandomRgbColor
                    }
                    className={styles.btn}
                >
                    Generate RandomColor
                </button>
                <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
                <h2>{color}</h2>
            </div>
        </>
    );
};

export default RandomColor;
