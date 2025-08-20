import { useBrandData } from "../hooks/useBrandData";

const TestBrandData = () => {
    const {
        brandData: brand,
        isLoading,
        isError,
        error,
        refetch,
        hasApiData,
    } = useBrandData();

    return (
        <div
            style={{
                padding: "20px",
                backgroundColor: "white",
                color: "black",
            }}
        >
            <h2>Brand Data Test (React Query)</h2>

            <h3>Loading State:</h3>
            <p>{isLoading ? "Loading..." : "Not Loading"}</p>

            <h3>Error State:</h3>
            <p>
                {isError
                    ? `Error: ${error?.message || "Unknown error"}`
                    : "No Error"}
            </p>

            <h3>Data Source:</h3>
            <p>
                {hasApiData && "Using API data"}
                {isLoading && "Loading from API..."}
                {!hasApiData && !isLoading && "No API data available"}
            </p>

            <h3>Actions:</h3>
            <button
                onClick={() => refetch()}
                style={{
                    padding: "8px 16px",
                    margin: "4px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Refetch Data
            </button>

            <h3>Brand Data:</h3>
            <pre style={{ backgroundColor: "#f5f5f5", padding: "10px" }}>
                {JSON.stringify(brand, null, 2)}
            </pre>

            <h3>Logo Preview:</h3>
            {brand?.logo && (
                <img
                    src={brand.logo}
                    alt="Brand Logo"
                    style={{ maxWidth: "200px", height: "auto" }}
                />
            )}
        </div>
    );
};

export default TestBrandData;
