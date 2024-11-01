import React, { useState } from "react";
import styles from "./QRCodeGenerator.module.css";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");

    const handleGenerateQrCode = () => {
        setQrCode(input);
        setInput("");
    };
    return (
        <>
            <h1>QR Code Generator</h1>
            <div>
                <input
                    type="text"
                    name="qr-code"
                    value={input}
                    placeholder="Enter your value here"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    disabled={input && input.trim() !== "" ? false : true}
                    onClick={handleGenerateQrCode}
                >
                    Generate
                </button>
            </div>
            <div>
                <QRCode
                    id="qr-code-value"
                    value={qrCode}
                    size={400}
                    bgColor="#FFF"
                />
            </div>
        </>
    );
};

export default QRCodeGenerator;
