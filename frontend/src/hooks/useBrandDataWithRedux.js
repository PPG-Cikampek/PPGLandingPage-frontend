import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useBrandData } from "../utils/queries";
import { updateBrandData, resetBrandData } from "../store/homepageSlice";

export const useBrandDataWithRedux = () => {
    const dispatch = useDispatch();
    const brandFromRedux = useSelector((state) => state.homepage.brand);

    console.log(brandFromRedux);

    const {
        data: brandFromApi,
        isLoading,
        isError,
        error,
        refetch,
    } = useBrandData();

    // Update Redux store when API data changes
    useEffect(() => {
        if (brandFromApi?.data) {
            const apiData = brandFromApi.data;

            console.log(apiData);

            // Transform Strapi data to match your Redux structure
            const transformedBrandData = {
                title: apiData.title || null,
                description: apiData.desc || apiData.description || null,
                visionTitle: apiData.visionTitle || null,
                visions: apiData.visions || null,
                // Handle logo URL from Strapi if exists
                logo: apiData.logo?.url
                    ? `http://localhost:1337${apiData.logo.url}`
                    : null,
            };

            dispatch(updateBrandData(transformedBrandData));
        }
    }, [brandFromApi, dispatch, brandFromRedux]);

    // Reset on unmount or error
    useEffect(() => {
        return () => {
            if (isError) {
                // Clear brand data (no local fallback exists)
                dispatch(resetBrandData());
            }
        };
    }, [isError, dispatch]);

    return {
        brandData: brandFromRedux,
        isLoading,
        isError,
        error,
        refetch,
        // Utility functions
        hasApiData: !!brandFromApi?.data,
        // With local defaults removed, a missing API is no longer considered a fallback — it's an absence
        isUsingFallback: false,
    };
};
