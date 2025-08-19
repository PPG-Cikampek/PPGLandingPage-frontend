import Carousel from "../../shared/Components/UIElements/Carousel";
import AnimatedComponent from "../../shared/Components/Animation/AnimatedComponent";
import logo from "../../assets/logos/ppg.png";

const HomePageView = () => {
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
                                    src={logo}
                                    alt=""
                                    className="w-64 h-auto"
                                />
                            </div>
                        </AnimatedComponent>
                        <div className="flex flex-col gap-4 text-white ">
                            <AnimatedComponent animationType="slideInRight">
                                <h1 className="">PPG Cikampek</h1>
                            </AnimatedComponent>
                            <AnimatedComponent animationType="slideInRight">
                                <p className="max-w-96">
                                    PPG, singkatan dari Penggerak Pembina
                                    Generus, merupakan tim bertugas
                                    menggerakkan, mensupervisi, dan mendukung
                                    pelaksanaan pembinaan generus.{" "}
                                </p>
                            </AnimatedComponent>
                            <AnimatedComponent animationType="slideInRight">
                                <h2 className="">Visi</h2>
                            </AnimatedComponent>
                            <AnimatedComponent>
                                <ul>
                                    <li>Visi 1</li>
                                    <li>Visi 2</li>
                                    <li>Visi 3</li>
                                </ul>
                            </AnimatedComponent>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mt-6 mx-auto flex flex-col gap-4">
                <AnimatedComponent animationType="zoomIn">
                    <section className="card-basic">
                        <h2 className="">Judul 1</h2>
                        <p className="">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Possimus, assumenda. Numquam ut itaque
                            assumenda autem incidunt quos ad reiciendis rem
                            nihil? Ex facilis neque architecto quas? Iusto
                            explicabo veniam totam?
                        </p>
                    </section>
                </AnimatedComponent>

                <AnimatedComponent>
                    <section className="card-basic">
                        <h2 className="">Section 2</h2>
                        <p className="">
                            Each section maintains its own background with
                            backdrop blur, creating a frosted glass effect over
                            the stacked background images.
                        </p>
                    </section>
                </AnimatedComponent>

                <AnimatedComponent>
                    <section className="card-basic">
                        <h2 className="">Section 3</h2>
                        <p className="">
                            The background images are stacked with decreasing
                            opacity, creating depth while maintaining content
                            legibility.
                        </p>
                    </section>
                </AnimatedComponent>
            </div>
        </main>
    );
};

export default HomePageView;
