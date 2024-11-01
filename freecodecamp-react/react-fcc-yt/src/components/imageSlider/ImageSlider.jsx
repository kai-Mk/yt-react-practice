import React, { useEffect, useState } from "react";
import styles from "./ImageSlider.module.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchImages = async (getUrl) => {
        try {
            setLoading(true);
            const response = await fetch(
                `${getUrl}?page=${page}&limit=${limit}`
            );
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (error) {
            setErrorMsg(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (url !== "") fetchImages(url);
    }, [url]);

    const handlePrevious = () => {
        setCurrentSlide(
            currentSlide === 0 ? images.length - 1 : currentSlide - 1
        );
    };

    const handleNext = () => {
        setCurrentSlide(
            currentSlide === images.length - 1 ? 0 : currentSlide + 1
        );
    };

    if (loading) {
        return (
            <>
                <h1>Image Slider</h1>
                <div>Loading data ! Please wait</div>
            </>
        );
    }

    if (errorMsg !== null) {
        return <div>Error occurred ! {errorMsg}</div>;
    }

    return (
        <>
            <h1>Image Slider</h1>
            <div className={styles.sliderContainer}>
                <BsArrowLeftCircleFill
                    className={`${styles.arrow} ${styles.arrowLeft}`}
                    onClick={handlePrevious}
                />
                {images && images.length
                    ? images.map((imageItem, index) => (
                          <img
                              key={imageItem.id}
                              alt={imageItem.download_url}
                              src={imageItem.download_url}
                              className={
                                  currentSlide === index
                                      ? `${styles.currentImage}`
                                      : `${styles.currentImage} ${styles.hideCurrentImage}`
                              }
                          />
                      ))
                    : null}
                <BsArrowRightCircleFill
                    className={`${styles.arrow} ${styles.arrowRight}`}
                    onClick={handleNext}
                />
                <span className={styles.circleIndicators}>
                    {images && images.length
                        ? images.map((_, index) => (
                              <button
                                  key={index}
                                  className={
                                      currentSlide === index
                                          ? `${styles.currentIndicator}`
                                          : `${styles.currentIndicator} ${styles.inActive}`
                                  }
                                  onClick={() => setCurrentSlide(index)}
                              ></button>
                          ))
                        : null}
                </span>
            </div>
        </>
    );
};

export default ImageSlider;
