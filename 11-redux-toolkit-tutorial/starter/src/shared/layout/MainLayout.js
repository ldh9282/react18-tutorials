import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ConfirmModal from "../modal/components/ConfirmModal";

const MainLayout = ({ children }) => {
    const { isOpen } = useSelector((state) => state.confirmModal);
    return (
        <main>
            <Navbar />
            {children}
            {isOpen && <ConfirmModal />}
        </main>
    );
};
export default MainLayout;
