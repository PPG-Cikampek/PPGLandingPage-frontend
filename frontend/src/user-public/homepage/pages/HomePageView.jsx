import Carousel from "../../../shared/Components/UIElements/Carousel";
import AnimatedComponent from "../../../shared/Components/Animation/AnimatedComponent";
import LoadingCircle from "../../../shared/Components/UIElements/LoadingCircle";
import ErrorCard from "../../../shared/Components/UIElements/ErrorCard";
import { latestNews } from "../../../data/latestNews";
import { useArticlesQuery, useBrandQuery } from "../../../services/queries";

const HomePageView = () => {
    const {
        data: brand,
        isLoading: brandLoading,
        isError: brandError,
    } = useBrandQuery();

    const {
        data: articles,
        isLoading: articlesLoading,
        isError: articlesError,
    } = useArticlesQuery();

    // Show loading state
    if (brandLoading || articlesLoading) {
        return (
            <main id="landing-page" className="main pt-0">
                <div className="flex justify-center items-center min-h-screen">
                    <LoadingCircle />
                </div>
            </main>
        );
    }

    // Show error state with fallback option
    if (brandError || articlesError) {
        return (
            <main id="landing-page" className="main pt-0">
                <div className="flex justify-center items-center min-h-screen p-4">
                    <ErrorCard
                        error={"error"}
                        message="Failed to load brand data. Using default content."
                    />
                </div>
            </main>
        );
    }

    return (
        <main id="landing-page" className="main pt-0">
            <div id="brand" className="w-full min-h-[768px] md:min-h-[1024px]">
                <div className="pt-16 md:pt-24">
                    <AnimatedComponent>
                        <Carousel showDots={true} />
                    </AnimatedComponent>
                    <div className="my-12 p-4 flex flex-col items-center text-center md:text-start md:flex-row md:justify-center md:items-start gap-8">
                        <AnimatedComponent animationType="slideInLeft">
                            <div className="">
                                <img
                                    src={`${import.meta.env.VITE_API_BASE_URL}${
                                        brand?.logo?.url
                                    }`}
                                    alt={brand?.title || "Brand Logo"}
                                    className="w-64 h-auto"
                                />
                            </div>
                        </AnimatedComponent>
                        <div className="flex flex-col gap-4 text-white ">
                            <AnimatedComponent animationType="slideInRight">
                                <h1 className="">{brand?.title}</h1>
                            </AnimatedComponent>
                            <AnimatedComponent animationType="slideInRight">
                                <p className="max-w-96">{brand?.description}</p>
                            </AnimatedComponent>
                            <AnimatedComponent animationType="slideInRight">
                                <h2 className="">Visi</h2>
                            </AnimatedComponent>
                            <AnimatedComponent>
                                <ul>
                                    {brand?.visions?.map((v, i) => (
                                        <li key={i}>{v}</li>
                                    ))}
                                </ul>
                            </AnimatedComponent>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-6xl mt-6 mx-auto flex flex-col items-stretch gap-4">
                {articles?.map((article, idx) => (
                    // {latestNews?.map((article, idx) => (
                    <AnimatedComponent
                        key={idx}
                        animationType={idx === 0 ? "zoomIn" : undefined}
                    >
                        <div className="card-basic">
                            <h2 className="">{article.title}</h2>
                            <p className="">
                                {article.text || article.description}
                            </p>
                        </div>
                    </AnimatedComponent>
                ))}
            </div>
        </main>
    );
};

export default HomePageView;
