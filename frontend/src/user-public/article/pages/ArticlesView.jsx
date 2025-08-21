import LoadingCircle from "../../../shared/Components/UIElements/LoadingCircle";
import ErrorCard from "../../../shared/Components/UIElements/ErrorCard";

const ArticlesView = () => {
    // Example of how to use React Query for fetching articles
    // Uncomment and use this if you want to fetch real articles from the API

    if (isLoading) {
        return (
            <main className="main">
                <div className="flex justify-center items-center min-h-screen">
                    <LoadingCircle />
                </div>
            </main>
        );
    }

    if (isError) {
        return (
            <main className="main">
                <div className="flex justify-center items-center min-h-screen p-4">
                    <ErrorCard
                        error={error}
                        onRetry={refetch}
                        message="Failed to load articles."
                    />
                </div>
            </main>
        );
    }

    return (
        <main className="main">
            <div className="max-w-6xl mt-6 mx-auto flex flex-col gap-4">
                {/* Display real articles if available, otherwise show placeholder content */}
                {articles && articles.length > 0 ? (
                    articles.map((article, index) => (
                        <section
                            key={article.documentId || index}
                            className="card-basic"
                        >
                            <h2 className="text-2xl font-semibold mb-4">
                                {article.title || `Article ${index + 1}`}
                            </h2>
                            <p className="">
                                {article.content ||
                                    article.description ||
                                    "No content available"}
                            </p>
                        </section>
                    ))
                ) : (
                    // Fallback content when no articles are available
                    <>
                        <section className="card-basic">
                            <h2 className="text-2xl font-semibold mb-4">
                                Section 1
                            </h2>
                            <p className="">
                                This content appears above the background images
                                thanks to z-index positioning. The white
                                background has partial opacity and blur effect
                                for better readability.
                            </p>
                        </section>

                        <section className="card-basic">
                            <h2 className="text-2xl font-semibold mb-4">
                                Section 2
                            </h2>
                            <p className="">
                                Each section maintains its own background with
                                backdrop blur, creating a frosted glass effect
                                over the stacked background images.
                            </p>
                        </section>

                        <section className="card-basic">
                            <h2 className="text-2xl font-semibold mb-4">
                                Section 3
                            </h2>
                            <p className="">
                                The background images are stacked with
                                decreasing opacity, creating depth while
                                maintaining content legibility.
                            </p>
                        </section>
                    </>
                )}
            </div>
        </main>
    );
};

export default ArticlesView;
