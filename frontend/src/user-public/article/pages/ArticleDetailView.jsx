import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useArticleQuery } from "../../../services/queries";
import LoadingCircle from "../../../shared/Components/UIElements/LoadingCircle";
import ErrorCard from "../../../shared/Components/UIElements/ErrorCard";
import formatDateIndo from "@/shared/utils/date";

const ArticleDetailView = () => {
    const { documentId } = useParams();
    const navigate = useNavigate();

    // Try to use documentId if it looks like a non-numeric string
    const {
        data: article,
        isLoading,
        isError,
        error,
        refetch,
    } = useArticleQuery(documentId);

    // Scroll to top when the page mounts or when documentId / loading state changes
    useEffect(() => {
        // Wait until loading is finished to avoid jumping during load
        if (!isLoading) {
            try {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            } catch (e) {
                // fallback for environments where window may be undefined or smooth not supported
                if (typeof window !== "undefined") {
                    try {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                        });
                    } catch (_err) {
                        window.scrollTo(0, 0);
                    }
                }
            }
        }
    }, [isLoading, documentId]);

    if (isLoading) {
        return (
            <main className="main">
                <div className="flex justify-center items-center min-h-screen">
                    <LoadingCircle />
                </div>
            </main>
        );
    }

    if (isError || !article) {
        return (
            <main className="main">
                <div className="flex justify-center items-center min-h-screen p-4">
                    <ErrorCard
                        error={error}
                        onRetry={refetch}
                        message={
                            article
                                ? "Failed to load article."
                                : "Article not found."
                        }
                    />
                </div>
            </main>
        );
    }

    const coverSrc =
        article?.coverImage?.formats?.medium?.url ||
        article?.coverImage?.url ||
        article?.image?.url;
    const fullCover = coverSrc
        ? `${import.meta.env.VITE_API_BASE_URL}${coverSrc}`
        : null;

    return (
        <main className="main">
            <div className="max-w-4xl mx-auto mb-24 px-6 ">
                <button
                    className="text-sm text-primary mb-4"
                    onClick={() => navigate(-1)}
                >
                    &larr; Back
                </button>

                <article className="prose lg:prose-xl">
                    <h1>{article.title}</h1>

                    {fullCover && (
                        <img
                            src={fullCover}
                            alt={article.title}
                            className="w-full mb-6"
                        />
                    )}

                    <div className="text-sm font-semibold mb-4">
                        <span>{article.author?.fullName || "Unknown"}</span>
                        <span className="mx-2">•</span>
                        <span>
                            {formatDateIndo(new Date(article.publishedAt))}
                        </span>
                    </div>

                    <div className="text-justify max-md:text-sm text-gray-700">
                        <div
                            dangerouslySetInnerHTML={{
                                __html:
                                    article.content ||
                                    article.description ||
                                    "",
                            }}
                        />
                    </div>
                </article>
            </div>
        </main>
    );
};

export default ArticleDetailView;
