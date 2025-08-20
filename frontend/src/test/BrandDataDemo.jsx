import { useBrandData } from "../hooks/useBrandData";

const BrandDataDemo = () => {
    const {
        brandData: data,
        isLoading,
        isError,
        error,
        refetch,
    } = useBrandData();

    if (isLoading) {
        return <div>Loading brand data...</div>;
    }

    if (isError) {
        return (
            <div>
                <p>Error loading brand data: {error.message}</p>
                <button onClick={() => refetch()}>Retry</button>
            </div>
        );
    }

    // Extract data from Strapi response
    const brand = data?.data || data;

    return (
        <div
            style={{
                padding: "20px",
                border: "1px solid #ccc",
                margin: "20px",
            }}
        >
            <h2>React Query Brand Data (Pure)</h2>
            <button onClick={() => refetch()}>Refresh Data</button>

            <div style={{ marginTop: "20px" }}>
                <h3>Title: {brand?.title}</h3>
                <p>
                    <strong>Description:</strong> {brand?.desc}
                </p>
                {brand?.visions && (
                    <div>
                        <p>
                            <strong>Visions:</strong>
                        </p>
                        <ul>
                            {brand.visions.map((vision, index) => (
                                <li key={index}>{vision}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {brand?.logo && (
                    <div>
                        <p>
                            <strong>Logo:</strong>
                        </p>
                        <img
                            src={`http://localhost:1337${brand.logo.url}`}
                            alt="Brand Logo"
                            style={{ maxWidth: "200px", height: "auto" }}
                        />
                    </div>
                )}

                <details style={{ marginTop: "20px" }}>
                    <summary>Raw API Response</summary>
                    <pre
                        style={{ backgroundColor: "#f5f5f5", padding: "10px" }}
                    >
                        {JSON.stringify(data, null, 2)}
                    </pre>
                </details>
            </div>
        </div>
    );
};

export default BrandDataDemo;
