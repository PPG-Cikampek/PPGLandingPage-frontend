const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
    ? `${import.meta.env.VITE_API_BASE_URL}/api`
    : "http://localhost:1337/api";

// Generic fetch function with error handling
const fetchApi = async (endpoint, options = {}) => {
    const token = localStorage.getItem("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers,
        },
        ...options,
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

    if (!response.ok) {
        if (response.status === 401) {
            // Token expired or invalid
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "/"; // Redirect to sign-in page
        }
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
};

// API service functions
export const apiService = {
    // Brand data
    fetchBrandData: () => fetchApi("/brand?populate=*"),

    // Articles
    fetchArticles: (params = {}) => {
        const searchParams = new URLSearchParams(params);
        return fetchApi(`/articles?${searchParams.toString()}`);
    },

    fetchArticleById: (id) => fetchApi(`/articles/${id}?populate=*`),

    // Generic GET request
    get: (endpoint) => fetchApi(endpoint),

    // Generic POST request
    post: (endpoint, data) =>
        fetchApi(endpoint, {
            method: "POST",
            body: JSON.stringify(data),
        }),

    // Generic PUT request
    put: (endpoint, data) =>
        fetchApi(endpoint, {
            method: "PUT",
            body: JSON.stringify(data),
        }),

    // Generic DELETE request
    delete: (endpoint) =>
        fetchApi(endpoint, {
            method: "DELETE",
        }),
};

export default apiService;
