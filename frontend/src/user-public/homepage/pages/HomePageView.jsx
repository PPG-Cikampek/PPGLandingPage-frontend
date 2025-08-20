import { useEffect, useState } from "react";
import Carousel from "../../../shared/Components/UIElements/Carousel";
import AnimatedComponent from "../../../shared/Components/Animation/AnimatedComponent";
import LoadingCircle from "../../../shared/Components/UIElements/LoadingCircle";
import ErrorCard from "../../../shared/Components/UIElements/ErrorCard";
import { latestNews } from "../../../data/latestNews";

const HomePageView = () => {
    const [brand, setBrand] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBrandData = async () => {
            setIsLoading(true);
            setIsError(false);
            setError(null);
            try {
                const url = `${
                    import.meta.env.VITE_API_BASE_URL
                }/api/brand?populate=logo`;
                console.log("Fetching brand data from:", url);
                const response = await fetch(url);
                const data = await response.json();
                console.log("Brand data fetched:", data);
                setBrand(data.data);
            } catch (err) {
                console.error("Error fetching brand data:", err);
                setIsError(true);
                // setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBrandData();
    }, []);

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
            <div className="max-w-6xl mt-6 mx-auto flex flex-col gap-4">
                {latestNews?.map((card, idx) => (
                    <AnimatedComponent
                        key={idx}
                        animationType={idx === 0 ? "zoomIn" : undefined}>
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
