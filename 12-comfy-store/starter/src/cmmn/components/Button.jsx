import { useState } from "react";

const Button = ({ className, text, onClick, isLoading, disabled }) => {
    const [isTheLoading, setIsTheLoading] = useState(false);

    const handleClick = async () => {
        if (isLoading) {
            setIsTheLoading(true);
        }
        if (onClick) {
            await onClick();
        }
        if (isLoading) {
            setTimeout(() => {
                setIsTheLoading(false);
            }, 500);
        }
    };
    return (
        <button
            type="button"
            className={`btn ${className}`}
            onClick={handleClick}
            disabled={isTheLoading || disabled}
        >
            {isTheLoading ? (
                <span className="loading loading-spinner"></span>
            ) : (
                text
            )}
        </button>
    );
};
export default Button;
