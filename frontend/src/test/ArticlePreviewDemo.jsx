import React, { useState } from "react";
import {
    MagazineHeroSection,
    DiagonalTimelineSection,
    HexagonalGridSection,
    FloatingBubblesSection,
    Carousel3DSection,
    InfiniteScrollSection,
} from "../user-public/homepage/components/ArticlePreviewSections";

// Mock article data for demonstration
const mockArticles = [
    {
        id: 1,
        title: "Revolutionary Teaching Methods in Modern Education",
        description:
            "Exploring innovative approaches to education that are transforming how students learn and engage with curriculum in the digital age.",
        text: "Exploring innovative approaches to education that are transforming how students learn and engage with curriculum in the digital age.",
        publishedAt: "2024-08-15T10:00:00Z",
        author: { fullName: "Dr. Sarah Johnson" },
        coverImage: {
            formats: {
                thumbnail: {
                    url: "/uploads/medium_ppgcikampek_ori_e636ea4959.png",
                },
            },
        },
    },
    {
        id: 2,
        title: "Digital Transformation in Higher Education",
        description:
            "How universities are adapting to the digital age and implementing technology to enhance learning experiences.",
        text: "How universities are adapting to the digital age and implementing technology to enhance learning experiences.",
        publishedAt: "2024-08-14T15:30:00Z",
        author: { fullName: "Prof. Michael Chen" },
        coverImage: {
            formats: {
                thumbnail: { url: "/uploads/medium_DSC_8758_846065c235.jpg" },
            },
        },
    },
    {
        id: 3,
        title: "Student Success Stories: Overcoming Challenges",
        description:
            "Inspiring stories of students who have overcome significant obstacles to achieve their academic goals.",
        text: "Inspiring stories of students who have overcome significant obstacles to achieve their academic goals.",
        publishedAt: "2024-08-13T09:15:00Z",
        author: { fullName: "Dr. Emily Rodriguez" },
        coverImage: {
            formats: {
                thumbnail: {
                    url: "/uploads/medium_ppgcikampek_ori_e636ea4959.png",
                },
            },
        },
    },
    {
        id: 4,
        title: "The Future of Curriculum Development",
        description:
            "Examining emerging trends in curriculum design and how educators are preparing students for tomorrow's challenges.",
        text: "Examining emerging trends in curriculum design and how educators are preparing students for tomorrow's challenges.",
        publishedAt: "2024-08-12T14:20:00Z",
        author: { fullName: "Dr. James Wilson" },
        coverImage: {
            formats: {
                thumbnail: { url: "/uploads/medium_DSC_8758_846065c235.jpg" },
            },
        },
    },
    {
        id: 5,
        title: "Building Inclusive Learning Environments",
        description:
            "Strategies for creating educational spaces that welcome and support students from all backgrounds.",
        text: "Strategies for creating educational spaces that welcome and support students from all backgrounds.",
        publishedAt: "2024-08-11T11:45:00Z",
        author: { fullName: "Dr. Amanda Thompson" },
        coverImage: {
            formats: {
                thumbnail: {
                    url: "/uploads/medium_ppgcikampek_ori_e636ea4959.png",
                },
            },
        },
    },
    {
        id: 6,
        title: "Research Methodologies in Educational Studies",
        description:
            "A comprehensive guide to modern research approaches that are shaping educational policy and practice.",
        text: "A comprehensive guide to modern research approaches that are shaping educational policy and practice.",
        publishedAt: "2024-08-10T16:00:00Z",
        author: { fullName: "Prof. Robert Kim" },
        coverImage: {
            formats: {
                thumbnail: { url: "/uploads/medium_DSC_8758_846065c235.jpg" },
            },
        },
    },
];

const ArticlePreviewDemo = () => {
    const [selectedDesign, setSelectedDesign] = useState("magazine");

    const designs = [
        {
            id: "magazine",
            name: "Magazine Hero",
            description: "Featured article with sidebar previews",
            component: <MagazineHeroSection articles={mockArticles} />,
        },
        {
            id: "timeline",
            name: "Diagonal Timeline",
            description: "Articles in a flowing diagonal pattern",
            component: <DiagonalTimelineSection articles={mockArticles} />,
        },
        {
            id: "hexagon",
            name: "Hexagonal Grid",
            description: "Honeycomb-inspired layout",
            component: <HexagonalGridSection articles={mockArticles} />,
        },
        {
            id: "bubbles",
            name: "Floating Bubbles",
            description: "Organic circular layout with animation",
            component: <FloatingBubblesSection articles={mockArticles} />,
        },
        {
            id: "carousel3d",
            name: "3D Carousel",
            description: "Rotating 3D perspective showcase",
            component: <Carousel3DSection articles={mockArticles} />,
        },
        {
            id: "infinite",
            name: "Infinite Scroll",
            description: "Continuously scrolling horizontal layout",
            component: <InfiniteScrollSection articles={mockArticles} />,
        },
    ];

    const currentDesign = designs.find((d) => d.id === selectedDesign);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Design Selector */}
            <div className="bg-white shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Article Preview Design Showcase
                    </h1>
                    <div className="flex flex-wrap gap-2">
                        {designs.map((design) => (
                            <button
                                key={design.id}
                                onClick={() => setSelectedDesign(design.id)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                    selectedDesign === design.id
                                        ? "bg-primary text-white shadow-md"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                            >
                                {design.name}
                            </button>
                        ))}
                    </div>
                    <p className="text-gray-600 text-sm mt-2">
                        Current:{" "}
                        <span className="font-semibold">
                            {currentDesign?.name}
                        </span>{" "}
                        - {currentDesign?.description}
                    </p>
                </div>
            </div>

            {/* Design Preview */}
            <div className="transition-all duration-500">
                {currentDesign?.component}
            </div>

            {/* Design Information */}
            <div className="bg-white border-t">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                        Design Details
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {designs.map((design) => (
                            <div
                                key={design.id}
                                className={`p-4 rounded-md border-2 transition-all duration-200 cursor-pointer ${
                                    selectedDesign === design.id
                                        ? "border-primary bg-primary/5"
                                        : "border-gray-200 hover:border-gray-300"
                                }`}
                                onClick={() => setSelectedDesign(design.id)}
                            >
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    {design.name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {design.description}
                                </p>

                                {/* Design characteristics */}
                                <div className="mt-3">
                                    <div className="flex flex-wrap gap-1">
                                        {design.id === "magazine" && (
                                            <>
                                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                                    Hero Layout
                                                </span>
                                                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                                    Editorial
                                                </span>
                                            </>
                                        )}
                                        {design.id === "timeline" && (
                                            <>
                                                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                                                    Diagonal Flow
                                                </span>
                                                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                                                    Sequential
                                                </span>
                                            </>
                                        )}
                                        {design.id === "hexagon" && (
                                            <>
                                                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                                                    Geometric
                                                </span>
                                                <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                                                    Unique
                                                </span>
                                            </>
                                        )}
                                        {design.id === "bubbles" && (
                                            <>
                                                <span className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded">
                                                    Organic
                                                </span>
                                                <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded">
                                                    Animated
                                                </span>
                                            </>
                                        )}
                                        {design.id === "carousel3d" && (
                                            <>
                                                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                                                    3D Effect
                                                </span>
                                                <span className="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded">
                                                    Interactive
                                                </span>
                                            </>
                                        )}
                                        {design.id === "infinite" && (
                                            <>
                                                <span className="text-xs bg-lime-100 text-lime-800 px-2 py-1 rounded">
                                                    Continuous
                                                </span>
                                                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
                                                    Dynamic
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlePreviewDemo;
