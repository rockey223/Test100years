import React, { useState, useEffect } from "react";
import { Reviews } from "../../dummy/Reviews";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./SlideBox.css";
import img from "./pp.png";

function SlideBox() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = Reviews.length; // Assuming Reviews is the array of carousel items

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment current slide index
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }, 3000);

        return () => {
            // Clear interval on component unmount
            clearInterval(interval);
        };
    }, [totalSlides]);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="slidebox-container">
            <div className="slidebox-heading">
                <div className="slide-head">
                    <span>Hear From Our Customers</span>
                </div>
            </div>
            <div className="carousel-container">
                <Carousel
                    showThumbs={false}
                    showArrows={false}
                    showStatus={false}
                    selectedItem={currentSlide}
                    onChange={handleSlideChange}
                >
                    {Reviews?.map((item, index) => {
                        const { name, occupation, review } = item;
                        return (
                            <div className="slider-content" key={index}>
                                <div className="icon66"><svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.8939 52.88C37.8939 49.92 37.0939 47.36 35.4539 45.28C32.9739 42.16 28.1339 41.76 25.3339 42.4C24.1739 35.8 29.7739 27.4 37.0139 23.8L31.4539 16C20.5339 21.2 9.77388 33.12 11.6139 48.2C12.7739 57.72 18.2939 64 26.0939 64C29.4939 64 32.3339 63 34.5739 61C36.8139 59 37.8939 56.28 37.8939 52.88ZM70.0939 52.88C70.0939 49.92 69.2939 47.36 67.6539 45.28C65.1339 42.16 60.3339 41.76 57.5339 42.4C56.3739 35.8 61.9739 27.4 69.2139 23.8L63.6539 16C52.7339 21.2 42.0139 33.12 43.8539 48.2C45.0139 57.72 50.4939 64 58.2939 64C61.6939 64 64.5339 63 66.7739 61C69.0139 59 70.0939 56.28 70.0939 52.88Z" stroke="#01ACF1" strokeWidth="1.5" />
                                </svg> </div>
                                <div className="left-review">
                                    <div className="review">{review}</div>
                                    <div className="review-name">{name}</div>
                                    <div className="review-occupation">{occupation}</div>
                                </div>
                                <div className="right-image">
                                    <img src={img} alt="Reviewer's Image" />
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    );
}

export default SlideBox;
