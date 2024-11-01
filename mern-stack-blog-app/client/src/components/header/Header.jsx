import React from "react";
import Styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={Styles.wrapper}>
            <h3>Mern Blog App</h3>
            <ul>
                <Link to={"/"}>
                    <li>Home</li>
                </Link>
                <Link to={"/add_Blog"}>
                    <li>Add Blog</li>
                </Link>
            </ul>
        </div>
    );
};

export default Header;
