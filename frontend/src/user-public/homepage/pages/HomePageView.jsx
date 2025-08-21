import BrandSection from "../components/BrandSection";
import LoadingCircle from "../../../shared/Components/UIElements/LoadingCircle";
import ErrorCard from "../../../shared/Components/UIElements/ErrorCard";
import { useArticlesQuery, useBrandQuery } from "../../../services/queries";
import { MagazineHeroSection } from "@/user-public/homepage/components/ArticlePreviewSections";

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

    console.log(articles);

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
            <BrandSection brand={brand} />
            <div className="max-w-6xl w-full mx-auto mt-6 grid gap-4 grid-cols-1 px-4">
                <MagazineHeroSection articles={articles} />
            </div>
        </main>
    );
};

export default HomePageView;
