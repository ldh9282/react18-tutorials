import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Cocktail from "./pages/Cocktail";
import HomeLayout from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import Newsletter from "./pages/Newsletter";
import Error from "./pages/Error";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singlCocktailLoader } from "./pages/Cocktail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SinglePageError from "./pages/SinglePageError";
import { action as newsletterAction } from "./pages/Newsletter";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
        },
    },
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                loader: landingLoader,
                element: <Landing />,
                errorElement: <SinglePageError />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "cocktail/:id",
                loader: singlCocktailLoader,
                element: <Cocktail />,
                errorElement: <SinglePageError />,
            },
            {
                path: "newsletter",
                action: newsletterAction,
                element: <Newsletter />,
            },
        ],
    },
]);
const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};
export default App;
