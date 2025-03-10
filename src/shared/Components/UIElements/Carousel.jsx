import React, { useState, useEffect, useCallback } from 'react';
import img4 from '../../../assets/images/img4.jpg';
import img5 from '../../../assets/images/img5.jpg';
import img6 from '../../../assets/images/img6.jpg';
import img7 from '../../../assets/images/img7.jpg';
import img8 from '../../../assets/images/img8.jpg';
import img9 from '../../../assets/images/img9.jpg';
import img10 from '../../../assets/images/img10.jpg';
import img11 from '../../../assets/images/img11.jpg';


const Carousel = ({
    items = [
        {
            title: "",
            description: "",
            image: img4,
            link: "/page3"
        },
        {
            title: "Second Slide",
            description: "Description for second slide",
            image: img5,
            link: "/page2"
        },
        {
            title: "Third Slide",
            description: "Description for third slide",
            image: img6,
            link: "/page3"
        },
        {
            title: "Fourth Slide",
            description: "Description for Fourth slide",
            image: img7,
            link: "/page3"
        },
        {
            title: "Fourth Slide",
            description: "Description for Fourth slide",
            image: img8,
            link: "/page3"
        },
        // {
        //     title: "Fourth Slide",
        //     description: "Description for Fourth slide",
        //     image: img9,
        //     link: "/page3"
        // },
        // {
        //     title: "Fourth Slide",
        //     description: "Description for Fourth slide",
        //     image: img10,
        //     link: "/page3"
        // },
        // {
        //     title: "Fourth Slide",
        //     description: "Description for Fourth slide",
        //     image: img11,
        //     link: "/page3"
        // },
    ],
    autoSlideInterval = 6000,
    showDots = true,
    showArrows = true,
    onNavigate = (link) => window.location.href = link
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = useCallback(() => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) =>
                prevIndex === items.length - 1 ? 0 : prevIndex + 1
            );
            setTimeout(() => setIsTransitioning(false), 500);
        }
    }, [items.length, isTransitioning]);

    const previousSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? items.length - 1 : prevIndex - 1
            );
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    const goToSlide = (index) => {
        if (!isTransitioning && index !== currentIndex) {
            setIsTransitioning(true);
            setCurrentIndex(index);
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    const handleSlideClick = (e, link) => {
        // Get the closest parent with data-control attribute
        const controlElement = e.target.closest('[data-control]');

        // Only navigate if the click is not on a control element
        if (!controlElement) {
            onNavigate(link);
        }
    };

    useEffect(() => {
        let intervalId;
        if (isPlaying) {
            intervalId = setInterval(nextSlide, autoSlideInterval);
        }
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isPlaying, autoSlideInterval, nextSlide]);

    return (
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden md:rounded-3xl shadow-2xl ">
            {/* Main carousel container */}
            <div className="relative h-96 md:h-[32rem]">
                <div
                    className="absolute w-full h-full flex transition-transform duration-500 ease-in-out cursor-pointer"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-full h-full relative"
                            onClick={(e) => handleSlideClick(e, item.link)}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="object-cover w-full h-full"
                            />
                            {/* Content overlay */}
                            {/* <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/85 to-transparent p-6">
                                <h3 className="text-2xl font-semibold text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="w-96 text-white/90 truncate">
                                    {item.description}
                                </p>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation arrows */}
            {showArrows && (
                <>
                    <button
                        data-control="arrow"
                        onClick={previousSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors z-10"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        data-control="arrow"
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors z-10"
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}

            {/* Play/Pause button */}
            <button
                data-control="playback"
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute bottom-4 right-4 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors z-10"
            >
                {isPlaying ? (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                )}
            </button>

            {/* Navigation dots */}
            {showDots && (
                <div
                    data-control="dots"
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10"
                >
                    {items.map((_, index) => (
                        <button
                            key={index}
                            data-control="dot"
                            onClick={() => goToSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-white w-6'
                                : 'bg-white/50 hover:bg-white/75'
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carousel;