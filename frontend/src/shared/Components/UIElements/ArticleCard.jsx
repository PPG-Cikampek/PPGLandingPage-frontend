import React, { useState } from "react";
import { formatDateIndo } from "../../utils/date";
import { FiExternalLink, FiShare2 } from "react-icons/fi";
import placeholderImg from "../../../assets/images/img1.jpg";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({ article, id, variant = "default" }) => {
    const [copied, setCopied] = useState(false);
    const navigate = useNavigate();

    const coverSrc =
        article?.coverImage?.formats?.thumbnail.url || article?.image?.url
            ? `${import.meta.env.VITE_API_BASE_URL}${
                  article?.coverImage?.formats?.thumbnail.url ||
                  article?.image?.url
              }`
            : placeholderImg;

    const publishedAt = article?.publishedAt
        ? formatDateIndo(article.publishedAt)
        : article?.publishedAt || "";

    const author = article?.author || article?.authorName || "Unknown";

    const handleShare = async (e) => {
        e.stopPropagation();
        const shareUrl =
            window.location.origin +
            window.location.pathname +
            `#${id || article?.documentId || "article"}`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: article?.title,
                    text: article?.description || article?.text || "",
                    url: shareUrl,
                });
                return;
            } catch (err) {
                // falling back to clipboard
            }
        }

        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch (err) {
            console.warn("Share failed", err);
        }
    };

    // VARIANT: Default (original)
    const DefaultCard = () => (
        <article
            id={id}
            className={`group relative overflow-hidden max-md:shadow-sm rounded-md bg-white/5 p-4 transition duration-300 hover:ring-2 ring-gray-200 h-full flex`}
            role="article"
        >
            <div className="flex gap-4 md:gap-6 items-start w-full">
                <div className="flex-shrink-0 w-24 md:w-40 overflow-hidden rounded-md bg-gray-200 aspect-[4/3]">
                    <img
                        src={coverSrc}
                        alt={article?.title || "article cover"}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                        <h3 className="text-lg font-semibold leading-tight">
                            {article?.title}
                        </h3>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const url =
                                        article?.url ||
                                        article?.link ||
                                        window.location.href;
                                    window.open(url, "_blank");
                                }}
                                aria-label="Open article"
                                className="p-2 rounded-md hover:bg-white hover:cursor-pointer *:transition-transform active:scale-95"
                            >
                                <FiExternalLink />
                            </button>
                            <button
                                onClick={handleShare}
                                aria-label="Share article"
                                className="p-2 rounded-md hover:bg-white hover:cursor-pointer *:transition-transform active:scale-95"
                            >
                                <FiShare2 />
                            </button>
                        </div>
                    </div>
                    <p className="mt-2 text-sm line-clamp-3">
                        {article?.text ||
                            article?.description ||
                            "No description available."}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                        <div>
                            <span>{author.fullName}</span>
                            {publishedAt ? (
                                <span className="ml-2">• {publishedAt}</span>
                            ) : null}
                        </div>
                        <div className="flex items-center gap-2">
                            {copied ? (
                                <span className="text-green-300">
                                    Link copied
                                </span>
                            ) : null}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(
                                        `/articles/${article?.documentId || id}`
                                    );
                                }}
                                className="button-secondary"
                            >
                                Baca Selengkapnya
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );

    // VARIANT: Overlay (image background, text overlay)
    const OverlayCard = () => (
        <article
            id={id}
            className="group relative rounded-xl overflow-hidden shadow-lg h-64 flex items-end bg-gray-900"
            style={{
                backgroundImage: `url(${coverSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            role="article"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative z-10 p-6 w-full">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    {article?.title}
                </h3>
                <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                    {article?.text ||
                        article?.description ||
                        "No description available."}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-300">
                    <span>
                        {author.fullName}{" "}
                        {publishedAt ? (
                            <span className="ml-2">• {publishedAt}</span>
                        ) : null}
                    </span>
                    <div className="flex gap-2">
                        <button
                            onClick={handleShare}
                            aria-label="Share article"
                            className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white"
                        >
                            <FiShare2 />
                        </button>
                        <button
                            onClick={() =>
                                navigate(
                                    `/articles/${article?.documentId || id}`
                                )
                            }
                            className="px-3 py-1 rounded-full bg-white/20 hover:bg-white/40 text-white"
                        >
                            Baca
                        </button>
                    </div>
                </div>
                {copied ? (
                    <span className="absolute top-2 right-4 text-green-300 text-xs">
                        Link copied
                    </span>
                ) : null}
            </div>
        </article>
    );

    // VARIANT: Horizontal (image left, text right, more spacing)
    const HorizontalCard = () => (
        <article
            id={id}
            className="group flex flex-row items-center gap-8 rounded-xl shadow-md bg-gradient-to-r from-white/80 to-gray-100 p-6 hover:ring-2 ring-blue-200"
            role="article"
        >
            <div className="w-48 h-36 rounded-md overflow-hidden flex-shrink-0">
                <img
                    src={coverSrc}
                    alt={article?.title || "article cover"}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold mb-2 text-blue-900">
                    {article?.title}
                </h3>
                <p className="text-gray-700 mb-3 line-clamp-2">
                    {article?.text ||
                        article?.description ||
                        "No description available."}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>
                        {author.fullName}{" "}
                        {publishedAt ? (
                            <span className="ml-2">• {publishedAt}</span>
                        ) : null}
                    </span>
                    <div className="flex gap-2">
                        <button
                            onClick={handleShare}
                            aria-label="Share article"
                            className="p-2 rounded bg-blue-100 hover:bg-blue-200"
                        >
                            <FiShare2 />
                        </button>
                        <button
                            onClick={() =>
                                navigate(
                                    `/articles/${article?.documentId || id}`
                                )
                            }
                            className="px-3 py-1 rounded bg-blue-100 hover:bg-blue-200"
                        >
                            Baca
                        </button>
                    </div>
                </div>
                {copied ? (
                    <span className="text-green-500 text-xs">Link copied</span>
                ) : null}
            </div>
        </article>
    );

    // VARIANT: Minimal (no image, compact, border)
    const MinimalCard = () => (
        <article
            id={id}
            className="border border-gray-300 rounded-md p-4 bg-white flex flex-col gap-2 shadow-sm hover:shadow-md transition"
            role="article"
        >
            <h3 className="text-base font-semibold text-gray-800 mb-1">
                {article?.title}
            </h3>
            <p className="text-xs text-gray-600 line-clamp-2">
                {article?.text ||
                    article?.description ||
                    "No description available."}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                <span>
                    {author.fullName}{" "}
                    {publishedAt ? (
                        <span className="ml-2">• {publishedAt}</span>
                    ) : null}
                </span>
                <div className="flex gap-2">
                    <button
                        onClick={handleShare}
                        aria-label="Share article"
                        className="p-1 rounded bg-gray-100 hover:bg-gray-200"
                    >
                        <FiShare2 />
                    </button>
                    <button
                        onClick={() =>
                            navigate(`/articles/${article?.documentId || id}`)
                        }
                        className="px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 text-xs"
                    >
                        Baca
                    </button>
                </div>
            </div>
            {copied ? (
                <span className="text-green-500 text-xs">Link copied</span>
            ) : null}
        </article>
    );

    // VARIANT: Floating (image floating, card overlaps image)
    const FloatingCard = () => (
        <div className="relative h-72 w-full flex items-center justify-center">
            <img
                src={coverSrc}
                alt={article?.title || "article cover"}
                className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
            />
            <article
                id={id}
                className="relative z-10 bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-xl w-3/4 mx-auto flex flex-col gap-2 border border-white/40"
                role="article"
            >
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {article?.title}
                </h3>
                <p className="text-sm text-gray-700 line-clamp-2">
                    {article?.text ||
                        article?.description ||
                        "No description available."}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                    <span>
                        {author.fullName}{" "}
                        {publishedAt ? (
                            <span className="ml-2">• {publishedAt}</span>
                        ) : null}
                    </span>
                    <div className="flex gap-2">
                        <button
                            onClick={handleShare}
                            aria-label="Share article"
                            className="p-2 rounded bg-white/70 hover:bg-white"
                        >
                            <FiShare2 />
                        </button>
                        <button
                            onClick={() =>
                                navigate(
                                    `/articles/${article?.documentId || id}`
                                )
                            }
                            className="px-3 py-1 rounded bg-white/70 hover:bg-white"
                        >
                            Baca
                        </button>
                    </div>
                </div>
                {copied ? (
                    <span className="text-green-500 text-xs">Link copied</span>
                ) : null}
            </article>
        </div>
    );

    // Choose variant
    switch (variant) {
        case "overlay":
            return <OverlayCard />;
        case "horizontal":
            return <HorizontalCard />;
        case "minimal":
            return <MinimalCard />;
        case "floating":
            return <FloatingCard />;
        default:
            return <DefaultCard />;
    }
};

export default ArticleCard;
