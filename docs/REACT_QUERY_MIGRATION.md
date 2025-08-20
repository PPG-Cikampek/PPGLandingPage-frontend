# React Query Migration Guide

This project has been migrated from axios to React Query for better data fetching, caching, and state management.

## Key Files

### React Query Setup

-   `src/utils/queryClient.js` - QueryClient configuration
-   `src/utils/apiService.js` - API service using fetch instead of axios
-   `src/utils/queries.js` - React Query hooks for different endpoints
-   `src/hooks/useBrandDataWithRedux.js` - Custom hook that bridges React Query with Redux

### Updated Components

-   `src/main.jsx` - Updated with QueryClientProvider
-   `src/user-public/homepage/pages/HomePageView.jsx` - Uses new React Query hook
-   `src/test/TestBrandData.jsx` - Test component for React Query integration
-   `src/test/BrandDataDemo.jsx` - Pure React Query demo component

## Usage Examples

### Basic React Query Hook

```jsx
import { useBrandData } from "../utils/queries";

function MyComponent() {
    const { data, isLoading, isError, error, refetch } = useBrandData();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    const brand = data?.data; // Strapi returns data in data field
    return <div>{brand?.title}</div>;
}
```

### React Query + Redux Integration

```jsx
import { useBrandDataWithRedux } from "../hooks/useBrandDataWithRedux";

function MyComponent() {
    const {
        brandData,
        isLoading,
        isError,
        refetch,
        hasApiData,
        isUsingFallback,
    } = useBrandDataWithRedux();

    return (
        <div>
            <h1>{brandData.title}</h1>
            <p>{brandData.description}</p>
            {isUsingFallback && <p>Using fallback data</p>}
        </div>
    );
}
```

### Generic API Calls

```jsx
import { apiService } from "../utils/apiService";
import { useQuery } from "@tanstack/react-query";

function CustomComponent() {
    const { data } = useQuery({
        queryKey: ["custom-endpoint"],
        queryFn: () => apiService.get("/custom-endpoint"),
    });

    return <div>{/* render data */}</div>;
}
```

## API Endpoints

### Brand Data

-   **Endpoint**: `http://localhost:1337/api/brand?populate=*`
-   **Hook**: `useBrandData()`
-   **Response Structure**:

```json
{
    "data": {
        "id": 2,
        "title": "PPG Cikampek",
        "desc": "Description text...",
        "visions": ["Visi 1", "Visi 2", "Visi 3"],
        "logo": {
            "url": "/uploads/logo.png"
        }
    }
}
```

## Benefits of React Query

1. **Automatic Caching**: Data is cached automatically with configurable cache times
2. **Background Refetching**: Data stays fresh with automatic background updates
3. **Error Handling**: Built-in error states and retry logic
4. **Loading States**: Consistent loading state management
5. **Optimistic Updates**: Support for optimistic UI updates
6. **DevTools**: React Query DevTools for debugging (enabled in development)

## Configuration

The QueryClient is configured with:

-   **Retry**: 3 attempts with exponential backoff
-   **Stale Time**: 5 minutes
-   **Cache Time**: 10 minutes
-   **Refetch on Window Focus**: Disabled
-   **Refetch on Reconnect**: Enabled

## Migration Notes

-   `axios` is being phased out in favor of native `fetch` API
-   Old `src/utils/api.js` is kept for reference but marked as deprecated
-   Redux store still manages local state, React Query handles server state
-   Error handling includes automatic token cleanup for 401 responses
-   Logo URLs are automatically prefixed with the base URL

## Testing

Use the test components to verify the setup:

-   `/test/brand-data` - Test React Query + Redux integration
-   `BrandDataDemo` component - Test pure React Query functionality

## Development Tools

React Query DevTools are enabled in development mode. Open the floating DevTools button to inspect:

-   Query states
-   Cache contents
-   Network requests
-   Background refetches
