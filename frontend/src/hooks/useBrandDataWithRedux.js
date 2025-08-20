import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useBrandData } from "../utils/queries";
import { updateBrandData, resetBrandData } from "../store/homepageSlice";

export const useBrandDataWithRedux = () => {
    const dispatch = useDispatch();
    const brandFromRedux = useSelector((state) => state.homepage.brand);

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

            // Transform Strapi data to match your Redux structure
            const transformedBrandData = {
                title: apiData.title || brandFromRedux.title,
                description:
                    apiData.desc ||
                    apiData.description ||
                    brandFromRedux.description,
                visionTitle: apiData.visionTitle || brandFromRedux.visionTitle,
                visions: apiData.visions || brandFromRedux.visions,
                // Handle logo URL from Strapi if exists
                logo: apiData.logo?.url
                    ? `http://localhost:1337${apiData.logo.url}`
                    : brandFromRedux.logo,
            };

            dispatch(updateBrandData(transformedBrandData));
        }
    }, [brandFromApi, dispatch, brandFromRedux]);

    // Reset on unmount or error
    useEffect(() => {
        return () => {
            if (isError) {
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
        isUsingFallback: !brandFromApi?.data && !isLoading,
    };
};
