import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layout/RootLayout";
import { Movies } from "../views/Movies/Movies";
import { MovieDetail } from "../views/MovieDetail/MovieDetail";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Movies />
			},
			{
				path: "/movie/:movieId",
				element: <MovieDetail />
			},
		]
	}
])
