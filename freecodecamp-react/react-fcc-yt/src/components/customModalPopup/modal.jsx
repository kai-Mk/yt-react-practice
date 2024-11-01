import React from "react";
import styles from "./modal.module.css";

const Modal = ({ id, header, body, footer, onClose }) => {
    return (
        <div id={id || "modal"} className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <span onClick={onClose} className={styles.closeModalIcon}>
                        &times;
                    </span>
                    <h2>{header ? header : "Header"}</h2>
                </div>
                <div className={styles.modalBody}>
                    {body ? (
                        body
                    ) : (
                        <div>
                            <p>This is our Modal Body</p>
                        </div>
                    )}
                </div>
                <div className={styles.modalFooter}>
                    {footer ? footer : <h2>Footer</h2>}
                </div>
            </div>
        </div>
    );
};

export default Modal;
