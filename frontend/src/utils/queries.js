import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiService } from "./apiService";

// Query keys for consistent cache management
export const queryKeys = {
    brand: ["brand"],
    articles: ["articles"],
    article: (id) => ["article", id],
};

// Brand data hook
export const useBrandData = () => {
    return useQuery({
        queryKey: queryKeys.brand,
        queryFn: apiService.fetchBrandData,
        select: (data) => data?.data || data, // Handle Strapi response structure
    });
};

// Articles hooks
export const useArticles = (params = {}) => {
    return useQuery({
        queryKey: [...queryKeys.articles, params],
        queryFn: () => apiService.fetchArticles(params),
        select: (data) => data?.data || data,
    });
};

export const useArticle = (id) => {
    return useQuery({
        queryKey: queryKeys.article(id),
        queryFn: () => apiService.fetchArticleById(id),
        select: (data) => data?.data || data,
        enabled: !!id, // Only run query if id is provided
    });
};

// Generic hooks for CRUD operations
export const useCreateMutation = (endpoint, onSuccessCallback) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => apiService.post(endpoint, data),
        onSuccess: (data) => {
            // Invalidate relevant queries
            queryClient.invalidateQueries();
            if (onSuccessCallback) onSuccessCallback(data);
        },
    });
};

export const useUpdateMutation = (endpoint, onSuccessCallback) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data) => apiService.put(endpoint, data),
        onSuccess: (data) => {
            // Invalidate relevant queries
            queryClient.invalidateQueries();
            if (onSuccessCallback) onSuccessCallback(data);
        },
    });
};

export const useDeleteMutation = (endpoint, onSuccessCallback) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: () => apiService.delete(endpoint),
        onSuccess: (data) => {
            // Invalidate relevant queries
            queryClient.invalidateQueries();
            if (onSuccessCallback) onSuccessCallback(data);
        },
    });
};
