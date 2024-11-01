import React, { useState } from "react";
import styles from "./modal.module.css";
import Modal from "./modal";

const ModalTest = () => {
    const [showModalPopup, setShowModalPopup] = useState(false);

    const handleToggleModalPopup = () => {
        setShowModalPopup(!showModalPopup);
    };

    const onClose = () => {
        setShowModalPopup(false);
    };

    return (
        <>
            <h1>Modal</h1>
            <div>
                <button
                    onClick={handleToggleModalPopup}
                    className={styles.modalButton}
                >
                    Open Modal Popup
                </button>
                {showModalPopup && (
                    <Modal
                        onClose={onClose}
                        body={<div>Customized Body</div>}
                    />
                )}
            </div>
        </>
    );
};

export default ModalTest;
