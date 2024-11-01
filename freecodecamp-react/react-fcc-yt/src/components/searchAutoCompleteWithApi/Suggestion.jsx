import React from "react";
import styles from "./search.module.css";

const Suggestion = ({ data, handleClick }) => {
    return (
        <ul>
            {data && data.length
                ? data.map((item, index) => (
                      <li onClick={handleClick} key={index}>
                          {item}
                      </li>
                  ))
                : null}
        </ul>
    );
};

export default Suggestion;
