import React, { useState, useRef, useEffect } from "react";
import { formatDateIndo } from "../../utils/date";
import {
    FiChevronLeft,
    FiChevronRight,
    FiClock,
    FiUser,
    FiBookOpen,
    FiTrendingUp,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import placeholderImg from "../../../assets/images/img1.jpg";

/**
 * Design 1: Magazine-style Hero with Side Articles
 * Features a large featured article with smaller articles on the side
 */
export const MagazineHeroSection = ({ articles = [] }) => {
    const navigate = useNavigate();

    if (!articles || articles.length === 0) return null;

    const featuredArticle = articles[0];
    const sideArticles = articles.slice(1, 4);

    const getCoverSrc = (article) => {
        return article?.coverImage?.formats?.thumbnail.url ||
            article?.image?.url
            ? `${import.meta.env.VITE_API_BASE_URL}${
                  article?.coverImage?.formats?.thumbnail.url ||
                  article?.image?.url
              }`
            : placeholderImg;
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Latest Stories
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-96">
                {/* Featured Article */}
                <div
                    className="lg:col-span-2 relative group cursor-pointer overflow-hidden  shadow-2xl"
                    onClick={() =>
                        navigate(`/articles/${featuredArticle?.documentId}`)
                    }
                >
                    <img
                        src={getCoverSrc(featuredArticle)}
                        alt={featuredArticle?.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <span className="inline-block px-3 py-1 bg-primary text-xs font-semibold rounded-full mb-4">
                            FEATURED
                        </span>
                        <h3 className="text-3xl font-bold mb-3 leading-tight">
                            {featuredArticle?.title}
                        </h3>
                        <p className="text-gray-200 text-lg line-clamp-2 mb-4">
                            {featuredArticle?.description ||
                                featuredArticle?.text}
                        </p>
                        <div className="flex items-center text-sm text-gray-300">
                            <FiUser className="mr-2" />
                            <span className="mr-4">
                                {featuredArticle?.author?.fullName || "Unknown"}
                            </span>
                            <FiClock className="mr-2" />
                            <span>
                                {formatDateIndo(featuredArticle?.publishedAt)}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Side Articles */}
                <div className="space-y-4">
                    {sideArticles.map((article, index) => (
                        <div
                            key={article?.id || index}
                            className="group cursor-pointer bg-white  shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                            onClick={() => navigate(`/articles/${article?.id}`)}
                        >
                            <div className="flex">
                                <div className="w-24 h-24 flex-shrink-0">
                                    <img
                                        src={getCoverSrc(article)}
                                        alt={article?.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="flex-1 p-4">
                                    <h4 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
                                        {article?.title}
                                    </h4>
                                    <p className="text-xs text-gray-500 mt-2">
                                        {formatDateIndo(article?.publishedAt)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/**
 * Design 2: Diagonal Timeline Layout
 * Articles arranged in a diagonal pattern with connecting lines
 */
export const DiagonalTimelineSection = ({ articles = [] }) => {
    const navigate = useNavigate();

    if (!articles || articles.length === 0) return null;

    const getCoverSrc = (article) => {
        return article?.coverImage?.formats?.thumbnail.url ||
            article?.image?.url
            ? `${import.meta.env.VITE_API_BASE_URL}${
                  article?.coverImage?.formats?.thumbnail.url ||
                  article?.image?.url
              }`
            : placeholderImg;
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-16 relative">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Article Timeline
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Follow our latest articles through this visual journey
                </p>
            </div>

            <div className="relative">
                {/* Diagonal connecting line */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 1200 800">
                        <path
                            d="M 100 100 Q 600 400 1100 700"
                            stroke="url(#gradient)"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray="10,5"
                        />
                        <defs>
                            <linearGradient
                                id="gradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="#008ee6"
                                    stopOpacity="0.8"
                                />
                                <stop
                                    offset="100%"
                                    stopColor="#facc15"
                                    stopOpacity="0.4"
                                />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {articles.slice(0, 6).map((article, index) => (
                        <div
                            key={article?.id || index}
                            className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                                index % 2 === 0
                                    ? "md:translate-y-0"
                                    : "md:translate-y-8"
                            }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                            onClick={() => navigate(`/articles/${article?.id}`)}
                        >
                            <div className="bg-white  shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={getCoverSrc(article)}
                                        alt={article?.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-sm text-primary font-bold px-3 py-1 rounded-full text-sm">
                                            #{index + 1}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                        {article?.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                                        {article?.description || article?.text}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span>
                                            {formatDateIndo(
                                                article?.publishedAt
                                            )}
                                        </span>
                                        <FiBookOpen className="text-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/**
 * Design 3: Hexagonal Grid Pattern
 * Articles arranged in a honeycomb-like hexagonal pattern
 */
export const HexagonalGridSection = ({ articles = [] }) => {
    const navigate = useNavigate();

    if (!articles || articles.length === 0) return null;

    const getCoverSrc = (article) => {
        return article?.coverImage?.formats?.thumbnail.url ||
            article?.image?.url
            ? `${import.meta.env.VITE_API_BASE_URL}${
                  article?.coverImage?.formats?.thumbnail.url ||
                  article?.image?.url
              }`
            : placeholderImg;
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Discover Articles
                </h2>
                <p className="text-gray-600">
                    Explore our content in this unique hexagonal layout
                </p>
            </div>

            <div className="relative">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {articles.slice(0, 7).map((article, index) => (
                        <div
                            key={article?.id || index}
                            className={`relative group cursor-pointer transition-all duration-300 hover:z-10 ${
                                index === 0 ? "col-span-2 row-span-2" : ""
                            } ${index % 3 === 1 ? "md:translate-y-8" : ""}`}
                            onClick={() => navigate(`/articles/${article?.id}`)}
                        >
                            <div className="hexagon-container relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                                <div
                                    className={`hexagon bg-gradient-to-br from-primary/20 to-secondary/20 ${
                                        index === 0
                                            ? "hexagon-large"
                                            : "hexagon-small"
                                    }`}
                                    style={{
                                        backgroundImage: `url(${getCoverSrc(
                                            article
                                        )})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center p-4">
                                        <div className="text-center text-white">
                                            <h3
                                                className={`font-bold leading-tight line-clamp-3 ${
                                                    index === 0
                                                        ? "text-lg"
                                                        : "text-sm"
                                                }`}
                                            >
                                                {article?.title}
                                            </h3>
                                            {index === 0 && (
                                                <p className="text-xs text-gray-200 mt-2 line-clamp-2">
                                                    {article?.description ||
                                                        article?.text}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .hexagon {
                    position: relative;
                    width: 100%;
                    height: 0;
                    padding-bottom: 86.6%; /* sqrt(3)/2 * 100% for equilateral hexagon */
                    margin: 0 auto;
                    transform: rotate(30deg);
                }

                .hexagon-small {
                    clip-path: polygon(
                        50% 0%,
                        100% 25%,
                        100% 75%,
                        50% 100%,
                        0% 75%,
                        0% 25%
                    );
                }

                .hexagon-large {
                    clip-path: polygon(
                        50% 0%,
                        100% 25%,
                        100% 75%,
                        50% 100%,
                        0% 75%,
                        0% 25%
                    );
                }

                .hexagon-container {
                    transform: rotate(-30deg);
                }
            `}</style>
        </section>
    );
};

/**
 * Design 4: Floating Bubble Layout
 * Articles in floating circular bubbles with organic movement
 */
export const FloatingBubblesSection = ({ articles = [] }) => {
    const navigate = useNavigate();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    if (!articles || articles.length === 0) return null;

    const getCoverSrc = (article) => {
        return article?.coverImage?.formats?.thumbnail.url ||
            article?.image?.url
            ? `${import.meta.env.VITE_API_BASE_URL}${
                  article?.coverImage?.formats?.thumbnail.url ||
                  article?.image?.url
              }`
            : placeholderImg;
    };

    const bubbleSizes = [
        "w-32 h-32",
        "w-40 h-40",
        "w-36 h-36",
        "w-44 h-44",
        "w-28 h-28",
        "w-52 h-52",
    ];
    const bubblePositions = [
        "top-20 left-20",
        "top-32 right-32",
        "top-60 left-1/3",
        "bottom-40 left-16",
        "bottom-60 right-20",
        "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-16 relative min-h-screen">
            <div className="text-center mb-16 relative z-20">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Floating Stories
                </h2>
                <p className="text-gray-600">
                    Discover articles in this organic, bubble-inspired layout
                </p>
            </div>

            <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 opacity-10">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-primary animate-pulse"
                            style={{
                                width: Math.random() * 20 + 10 + "px",
                                height: Math.random() * 20 + 10 + "px",
                                left: Math.random() * 100 + "%",
                                top: Math.random() * 100 + "%",
                                animationDelay: Math.random() * 3 + "s",
                                animationDuration: Math.random() * 3 + 2 + "s",
                            }}
                        />
                    ))}
                </div>

                {articles.slice(0, 6).map((article, index) => (
                    <div
                        key={article?.id || index}
                        className={`absolute group cursor-pointer transition-all duration-500 ${bubbleSizes[index]} ${bubblePositions[index]}`}
                        style={{
                            animation: `float-${index} ${
                                6 + Math.random() * 4
                            }s ease-in-out infinite`,
                            animationDelay: `${index * 0.5}s`,
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => navigate(`/articles/${article?.id}`)}
                    >
                        <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl group-hover:shadow-3xl transition-shadow duration-300 border-4 border-white">
                            <img
                                src={getCoverSrc(article)}
                                alt={article?.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Content overlay */}
                            <div className="absolute inset-0 flex items-end p-4">
                                <div className="text-white text-center w-full">
                                    <h3 className="font-bold text-xs md:text-sm line-clamp-2 mb-1">
                                        {article?.title}
                                    </h3>
                                    <div className="text-xs opacity-80">
                                        <FiTrendingUp className="inline mr-1" />
                                        {formatDateIndo(article?.publishedAt)}
                                    </div>
                                </div>
                            </div>

                            {/* Hover overlay with full content */}
                            {hoveredIndex === index && (
                                <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
                                    <div className="text-white text-center">
                                        <h3 className="font-bold text-sm mb-2 line-clamp-3">
                                            {article?.title}
                                        </h3>
                                        <p className="text-xs opacity-90 line-clamp-3">
                                            {article?.description ||
                                                article?.text}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes float-0 {
                    0%,
                    100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(180deg);
                    }
                }
                @keyframes float-1 {
                    0%,
                    100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-30px) rotate(-180deg);
                    }
                }
                @keyframes float-2 {
                    0%,
                    100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-25px) rotate(90deg);
                    }
                }
                @keyframes float-3 {
                    0%,
                    100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-35px) rotate(-90deg);
                    }
                }
                @keyframes float-4 {
                    0%,
                    100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-15px) rotate(270deg);
                    }
                }
                @keyframes float-5 {
                    0%,
                    100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-40px) rotate(-270deg);
                    }
                }
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-in-out;
                }
            `}</style>
        </section>
    );
};

/**
 * Design 5: 3D Carousel with Perspective
 * A rotating 3D carousel showcasing articles
 */
export const Carousel3DSection = ({ articles = [] }) => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoRotating, setIsAutoRotating] = useState(true);

    if (!articles || articles.length === 0) return null;

    const getCoverSrc = (article) => {
        return article?.coverImage?.formats?.thumbnail.url ||
            article?.image?.url
            ? `${import.meta.env.VITE_API_BASE_URL}${
                  article?.coverImage?.formats?.thumbnail.url ||
                  article?.image?.url
              }`
            : placeholderImg;
    };

    useEffect(() => {
        if (!isAutoRotating) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % articles.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [articles.length, isAutoRotating]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % articles.length);
        setIsAutoRotating(false);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + articles.length) % articles.length
        );
        setIsAutoRotating(false);
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Article Showcase
                </h2>
                <p className="text-gray-600">
                    Experience articles in 3D perspective
                </p>
            </div>

            <div className="relative h-96 md:h-[500px] perspective-1000">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="relative preserve-3d transition-transform duration-1000 ease-in-out"
                        style={{
                            transform: `rotateY(${
                                currentIndex * -(360 / articles.length)
                            }deg)`,
                        }}
                    >
                        {articles
                            .slice(0, Math.min(articles.length, 8))
                            .map((article, index) => {
                                const angle = (360 / articles.length) * index;
                                const isActive = index === currentIndex;

                                return (
                                    <div
                                        key={article?.id || index}
                                        className="absolute w-64 h-80 cursor-pointer group"
                                        style={{
                                            transform: `rotateY(${angle}deg) translateZ(300px) ${
                                                isActive
                                                    ? "scale(1.1)"
                                                    : "scale(0.9)"
                                            }`,
                                            transition:
                                                "transform 0.5s ease-in-out",
                                        }}
                                        onClick={() =>
                                            navigate(`/articles/${article?.id}`)
                                        }
                                    >
                                        <div className="w-full h-full bg-white  shadow-2xl overflow-hidden transform-gpu backface-hidden">
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={getCoverSrc(article)}
                                                    alt={article?.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                {isActive && (
                                                    <div className="absolute top-4 right-4">
                                                        <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                            FEATURED
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-6">
                                                <h3
                                                    className={`font-bold text-gray-900 mb-3 line-clamp-2 transition-colors ${
                                                        isActive
                                                            ? "text-primary text-lg"
                                                            : "text-base"
                                                    }`}
                                                >
                                                    {article?.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                                    {article?.description ||
                                                        article?.text}
                                                </p>
                                                <div className="flex items-center justify-between text-xs text-gray-500">
                                                    <span>
                                                        {formatDateIndo(
                                                            article?.publishedAt
                                                        )}
                                                    </span>
                                                    <FiBookOpen className="text-primary" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                {/* Navigation controls */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 z-10"
                >
                    <FiChevronLeft className="text-gray-700 text-xl" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 z-10"
                >
                    <FiChevronRight className="text-gray-700 text-xl" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {articles
                        .slice(0, Math.min(articles.length, 8))
                        .map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setIsAutoRotating(false);
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? "bg-primary scale-125"
                                        : "bg-gray-300"
                                }`}
                            />
                        ))}
                </div>
            </div>

            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
                .transform-gpu {
                    transform: translateZ(0);
                }
            `}</style>
        </section>
    );
};

/**
 * Design 6: Infinite Horizontal Scroll with Parallax
 * Continuously scrolling articles with parallax effect
 */
export const InfiniteScrollSection = ({ articles = [] }) => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    if (!articles || articles.length === 0) return null;

    const getCoverSrc = (article) => {
        return article?.coverImage?.formats?.thumbnail.url ||
            article?.image?.url
            ? `${import.meta.env.VITE_API_BASE_URL}${
                  article?.coverImage?.formats?.thumbnail.url ||
                  article?.image?.url
              }`
            : placeholderImg;
    };

    // Duplicate articles for infinite scroll effect
    const duplicatedArticles = [...articles, ...articles, ...articles];

    return (
        <section className="w-full py-16 overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Endless Exploration
                </h2>
                <p className="text-gray-600">
                    Scroll through our infinite stream of articles
                </p>
            </div>

            <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    ref={scrollRef}
                    className={`flex space-x-6 ${
                        isHovered ? "animate-pause" : "animate-scroll"
                    }`}
                    style={{ width: `${duplicatedArticles.length * 320}px` }}
                >
                    {duplicatedArticles.map((article, index) => (
                        <div
                            key={`${article?.id || "article"}-${index}`}
                            className="flex-shrink-0 w-80 group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                            onClick={() => navigate(`/articles/${article?.id}`)}
                        >
                            <div className="bg-white  shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={getCoverSrc(article)}
                                        alt={article?.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="inline-block bg-white/90 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                                            Read More
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                        {article?.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                        {article?.description || article?.text}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-xs text-gray-500">
                                            <FiUser className="mr-2" />
                                            <span>
                                                {article?.author?.fullName ||
                                                    "Unknown"}
                                            </span>
                                        </div>
                                        <div className="flex items-center text-xs text-gray-500">
                                            <FiClock className="mr-2" />
                                            <span>
                                                {formatDateIndo(
                                                    article?.publishedAt
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gradient overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-10" />
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-${articles.length * 320}px);
                    }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                .animate-pause {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};
