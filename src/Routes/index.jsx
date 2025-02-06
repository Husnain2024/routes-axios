import { AdminRoute } from "./Admin";
import { AuthRoute } from "./Auth";
import { FrontendRoute } from "./Frontend";

const { createBrowserRouter } = require("react-router-dom");

export const Router = createBrowserRouter([...FrontendRoute,...AdminRoute,...AuthRoute])

