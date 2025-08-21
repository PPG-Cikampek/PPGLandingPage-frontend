import { useNavigate } from "react-router-dom";

const BackButton = ({ onClick, children = "Kembali", className = "" }) => {
    const navigate = useNavigate();
    const handleClick = onClick ?? (() => navigate(-1));

    return (
        <button
            className={
                "group text-sm px-4 py-2 mb-4 border rounded-sm text-gray-500 border-gray-500 hover:text-primary hover:border-primary hover:cursor-pointer transition-all duration-200 " +
                className
            }
            onClick={handleClick}
        >
            <div className="w-5 group-hover:w-6 inline-block text-start transition-all duration-200">
                &larr;
            </div>
            {children}
        </button>
    );
};

export default BackButton;
