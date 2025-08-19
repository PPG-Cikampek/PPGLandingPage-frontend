const NewsView = () => {
    return (
        <main className="main">
            <div className="max-w-6xl mt-6 mx-auto flex flex-col gap-4">
                <section className="card-basic">
                    <h2 className="text-2xl font-semibold mb-4">Section 1</h2>
                    <p className="">
                        This content appears above the background images thanks
                        to z-index positioning. The white background has partial
                        opacity and blur effect for better readability.
                    </p>
                </section>

                <section className="card-basic">
                    <h2 className="text-2xl font-semibold mb-4">Section 2</h2>
                    <p className="">
                        Each section maintains its own background with backdrop
                        blur, creating a frosted glass effect over the stacked
                        background images.
                    </p>
                </section>

                <section className="card-basic">
                    <h2 className="text-2xl font-semibold mb-4">Section 3</h2>
                    <p className="">
                        The background images are stacked with decreasing
                        opacity, creating depth while maintaining content
                        legibility.
                    </p>
                </section>
            </div>
        </main>
    );
};

export default NewsView;
