import { MovieDetail } from "./views/MovieDetail/MovieDetail";
import { Movies } from "./views/Movies/Movies";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Movies />,
    },
    {
        path: "/movie/:movieId",
        element: <MovieDetail />,
    },
]);
export const ApplicationRoutes = () => <RouterProvider router={router} />;