import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import { Error } from "../pages";
import { Login, Register } from "../../login/pages";
import PrivateRoute from "../../login/routes/PrivateRoute";
import MainLayout from "../../shpn/mi/layout/MainLayout";
import { About, Home, Landing } from "../../shpn/mi/pages";
import { Cart, MyOrdrList } from "../../shpn/my/pages";
import { OrdrPmaInfo } from "../../shpn/od/pages";
import { Products, SingleProduct } from "../../shpn/pd/pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/shpn/mi/home" replace />,
        errorElement: <Error />, // 에러 발생 시 Error 컴포넌트를 렌더링
    },
    {
        // 알 수 없는 경로("*")는 "/"로 리다이렉션
        path: "*",
        element: <Navigate to="/" replace />,
        errorElement: <Error />,
    },
    {
        // 로그인 페이지
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
    },
    {
        // 회원가입 페이지
        path: "/register",
        element: <Register />,
        errorElement: <Error />,
    },
    // ========== Start /shpn/mi ==========
    {
        // /shpn/mi 경로에 중첩 라우트 사용
        path: "/shpn/mi",
        element: (
            // PrivateRoute: 인증된 유저만 가능
            <PrivateRoute>
                <MainLayout />
            </PrivateRoute>
        ), // 레이아웃을 렌더링
        errorElement: <Error />,
        children: [
            {
                path: "home", // /shpn/mi/home
                element: <Home />,
                errorElement: <Error />,
            },
            {
                path: "landing", // /shpn/mi/landing
                element: <Landing />,
                errorElement: <Error />,
            },
            {
                path: "about", // /shpn/mi/about
                element: <About />,
                errorElement: <Error />,
            },
        ],
    },
    // ========== End /shpn/mi ==========
    // ========== Start /shpn/my ==========
    {
        // 장바구니 페이지
        path: "/shpn/my/cart",
        element: <Cart />,
        errorElement: <Error />,
    },
    {
        // 주문 목록 페이지
        path: "/shpn/my/myOrdrList",
        element: <MyOrdrList />,
        errorElement: <Error />,
    },
    // ========== End /shpn/my ==========
    // ========== Start /shpn/od ==========
    {
        // 주문결제 페이지
        path: "/shpn/od/ordrPmaInfo",
        element: <OrdrPmaInfo />,
        errorElement: <Error />,
    },
    // ========== End /shpn/od ==========
    // ========== Start /shpn/pd ==========
    {
        // 상품 목록 페이지
        path: "/shpn/pd/products",
        element: <Products />,
        errorElement: <Error />,
    },
    {
        // 단일 상품 페이지
        path: "/shpn/pd/products/:id",
        element: <SingleProduct />,
        errorElement: <Error />,
    },
    // ========== End /shpn/pd ==========
]);

const RootRoutes = () => {
    return (
        <RouterProvider
            router={router}
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        />
    );
};

export default RootRoutes;
