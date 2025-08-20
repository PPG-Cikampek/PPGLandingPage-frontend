import { useSelector } from "react-redux";
import Carousel from "../../../shared/Components/UIElements/Carousel";
import AnimatedComponent from "../../../shared/Components/Animation/AnimatedComponent";
import { useBrandDataWithRedux } from "../../../hooks/useBrandDataWithRedux";
import LoadingCircle from "../../../shared/Components/UIElements/LoadingCircle";
import ErrorCard from "../../../shared/Components/UIElements/ErrorCard";

const HomePageView = () => {
    const { cards } = useSelector((state) => state.homepage);
    const {
        brandData: brand,
        isLoading,
        isError,
        error,
        refetch,
        isUsingFallback,
    } = useBrandDataWithRedux();

    // Show loading state
    if (isLoading) {
        return (
            <main id="landing-page" className="main pt-0">
                <div className="flex justify-center items-center min-h-screen">
                    <LoadingCircle />
                </div>
            </main>
        );
    }

    // Show error state with fallback option
    if (isError) {
        return (
            <main id="landing-page" className="main pt-0">
                <div className="flex justify-center items-center min-h-screen p-4">
                    <ErrorCard
                        error={error}
                        onRetry={refetch}
                        message="Failed to load brand data. Using default content."
                    />
                </div>
            </main>
        );
    }

    return (
        <main id="landing-page" className="main pt-0">
            {isUsingFallback && (
                <div className="bg-yellow-100 text-yellow-800 p-2 text-center text-sm">
                    Using default content - API data unavailable
                </div>
            )}
            <div id="brand" className="w-full min-h-[768px] md:min-h-[1024px]">
                <div className="pt-16 md:pt-24">
                    <AnimatedComponent>
                        <Carousel showDots={true} />
                    </AnimatedComponent>
                    <div className="my-12 p-4 flex flex-col items-center text-center md:text-start md:flex-row md:justify-center md:items-start gap-8">
                        <AnimatedComponent animationType="slideInLeft">
                            <div className="">
                                <img
                                    src={brand?.logo}
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
                                <h2 className="">{brand?.visionTitle}</h2>
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
            <div className="max-w-6xl mt-6 mx-auto flex flex-col gap-4">
                {cards?.map((card, idx) => (
                    <AnimatedComponent
                        key={idx}
                        animationType={idx === 0 ? "zoomIn" : undefined}
                    >
                        <section className="card-basic">
                            <h2 className="">{card.title}</h2>
                            <p className="">{card.text}</p>
                        </section>
                    </AnimatedComponent>
                ))}
            </div>
        </main>
    );
};

export default HomePageView;
