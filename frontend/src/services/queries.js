import { useQuery } from "@tanstack/react-query";
import api from "./api";

// Query hook for brand data
export const useBrandQuery = () => {
    return useQuery({
        queryKey: ["brand"],
        queryFn: async () => {
            const response = await api.get("/api/brand?populate=logo");
            return response.data.data;
        },
        // staleTime: 5 * 60 * 1000, // 5 minutes
        // refetchOnWindowFocus: true,
        // retry: 3,
    });
};

// Query hook for articles data
export const useArticlesQuery = () => {
    return useQuery({
        queryKey: ["articles"],
        queryFn: async () => {
            const response = await api.get(
                "/api/articles?sort[0]=publishedAt:desc&populate[coverImage][fields][0]=formats&populate[author][fields][0]=fullName&fields[0]=title&fields[1]=description&fields[2]=publishedAt&pagination[pageSize]=5&pagination[page]=1&filters[publishedAt][$notNull]=true"
            );
            return response.data.data;
        },
    });
};

// Query hook for a single article by id or documentId
export const useArticleQuery = (documentId) => {
    return useQuery({
        queryKey: ["article", documentId],
        enabled: !!documentId,
        queryFn: async () => {
            const endpoint = `/api/articles/${documentId}?populate=*`;
            const response = await api.get(endpoint);
            // Strapi-like responses return data as an array for list endpoints; return first item
            const data = response.data.data;
            return Array.isArray(data) ? data[0] : data;
        },
    });
};
