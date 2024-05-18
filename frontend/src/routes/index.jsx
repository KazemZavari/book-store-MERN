import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ShowBook from "../pages/ShowBook";
import EditBook from "../pages/EditBook";
import CreateBook from "../pages/CreateBook";
import DeleteBook from "../pages/DeleteBook";

export const router = createBrowserRouter([
    {
        path: "/",
        element: "",
        errorElement: <h3> Page Note Found 🙄 ... </h3>,
        children: [
            {
                path: "/books",
                element: <Home />,
            },
            {
                path: "/books/details/:id",
                element: <ShowBook />,
            },
            {
                path: "/books/edit/:id",
                element: <EditBook />,
            },
            {
                path: "/books/create",
                element: <CreateBook />,
            },

            {
                path: "/books/delete/:id",
                element: <DeleteBook />,
            },

        ],
    },

]);
