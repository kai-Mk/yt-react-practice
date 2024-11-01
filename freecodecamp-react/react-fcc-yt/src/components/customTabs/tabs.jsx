import React, { useState } from "react";
import styles from "./tabs.module.css";

const Tabs = ({ tabsContent, onChange }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const handleOnIndex = (getCurrentIndex) => {
        setCurrentTabIndex(getCurrentIndex);
        onChange(getCurrentIndex);
    };

    return (
        <div className={StyleSheet.TabsWrapper}>
            <div className={styles.header}>
                {tabsContent.map((tabItem, index) => (
                    <div
                        key={tabItem.label}
                        onClick={() => handleOnIndex(index)}
                        className={`${styles.tabItem} ${
                            currentTabIndex === index ? styles.active : ""
                        }`}
                    >
                        <span className={styles.label}>{tabItem.label}</span>
                    </div>
                ))}
            </div>
            <div className={styles.content} style={{ color: "red" }}>
                {tabsContent[currentTabIndex] &&
                    tabsContent[currentTabIndex].content}
            </div>
        </div>
    );
};

export default Tabs;
