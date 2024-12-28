import { useNavigation } from "react-router-dom";

const Submit = ({ className, text }) => {
    const navigation = useNavigation();

    const isSubmitting = navigation.state === "submitting";
    return (
        <button
            type="submit"
            className={`btn ${className}`}
            disabled={isSubmitting}
        >
            {isSubmitting ? (
                <span className="loading loading-spinner"></span>
            ) : (
                text
            )}
        </button>
    );
};
export default Submit;
