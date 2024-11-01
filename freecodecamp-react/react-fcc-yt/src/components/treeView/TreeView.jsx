import React from "react";
import styles from "./TreeView.module.css";
import MenuList from "./MenuList";

const TreeView = ({ menus = [] }) => {
    return (
        <>
            <h1>Tree View</h1>
            <div className={styles.treeViewContainer}>
                <MenuList list={menus} />
            </div>
        </>
    );
};

export default TreeView;
