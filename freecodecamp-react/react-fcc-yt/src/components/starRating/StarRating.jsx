import React, { useState } from "react";
import styles from "./StarRaiting.module.css";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 10 }) => {
    const [rating, setRating] = useState(-1);
    const [hover, setHover] = useState(0);

    const handleStarClick = (getCurrentIndex) => {
        setRating(getCurrentIndex);
    };

    const handleMouseEnter = (getCurrentIndex) => {
        setHover(getCurrentIndex);
    };

    const handleMouseLeave = (getCurrentIndex) => {
        setHover(rating);
    };
    return (
        <>
            <h1>Star Rating</h1>
            <p>starRate : {rating + 1}</p>
            <div className={styles.starRating}>
                {[...Array(noOfStars)].map((_, index) => {
                    return (
                        <FaStar
                            key={index}
                            className={
                                index <= (hover || rating) ? styles.active : ""
                            }
                            onClick={() => handleStarClick(index)}
                            onMouseMove={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            size={40}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default StarRating;
