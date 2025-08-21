import Carousel from "../../../shared/Components/UIElements/Carousel";
import AnimatedComponent from "../../../shared/Components/Animation/AnimatedComponent";

const BrandSection = ({ brand }) => {
    return (
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
    );
};

export default BrandSection;
