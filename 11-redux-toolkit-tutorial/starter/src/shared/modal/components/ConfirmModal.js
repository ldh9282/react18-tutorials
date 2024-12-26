import { useDispatch, useSelector } from "react-redux";
import { closeConfirmModal } from "../redux/confirmModalSlice";

const ConfirmModal = () => {
    const { message, confirmCb, cancleCb } = useSelector(
        (state) => state.confirmModal
    );
    const dispatch = useDispatch();
    return (
        <aside className="modal-container">
            <div className="modal">
                <h4>{message}</h4>
                <div className="btn-container">
                    <button
                        className="btn confirm-btn"
                        onClick={() => {
                            if (confirmCb) {
                                confirmCb();
                            }
                            dispatch(closeConfirmModal());
                        }}
                    >
                        confirm
                    </button>
                    <button
                        className="btn clear-btn"
                        onClick={() => {
                            if (cancleCb) {
                                cancleCb();
                            }
                            dispatch(closeConfirmModal());
                        }}
                    >
                        cancel
                    </button>
                </div>
            </div>
        </aside>
    );
};
export default ConfirmModal;
