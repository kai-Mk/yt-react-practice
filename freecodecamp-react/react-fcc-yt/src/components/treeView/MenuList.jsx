import React from "react";
import styles from "./TreeView.module.css";
import MenuItem from "./menuItem";

const MenuList = ({ list = [] }) => {
    return (
        <ul className={styles.menuListContainer}>
            {list && list.length
                ? list.map((listItem) => (
                      <MenuItem item={listItem} key={listItem.label} />
                  ))
                : null}
        </ul>
    );
};

export default MenuList;
