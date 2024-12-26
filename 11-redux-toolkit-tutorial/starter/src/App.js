import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";
import CartPage from "./features/cart/pages/CartPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CartPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}
export default App;
