import { useSelector } from "react-redux";
import Carousel from "../../shared/Components/UIElements/Carousel";
import AnimatedComponent from "../../shared/Components/Animation/AnimatedComponent";

const HomePageView = () => {
    const { brand, cards } = useSelector((state) => state.homepage);

    return (
        <main id="landing-page" className="main pt-0">
            <div id="brand" className="w-full min-h-[768px] md:min-h-[1024px]">
                <div className="pt-6 md:pt-24">
                    <AnimatedComponent>
                        <Carousel showDots={true} />
                    </AnimatedComponent>
                    <div className="my-12 p-4 flex flex-col items-center text-center md:text-start md:flex-row md:justify-center md:items-start gap-8">
                        <AnimatedComponent animationType="slideInLeft">
                            <div className="">
                                <img
                                    src={brand?.logo}
                                    alt=""
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
