import { AdminRoute } from "./Admin";
import { FrontendRoute } from "./Frontend";

const { createBrowserRouter } = require("react-router-dom");

export const Router = createBrowserRouter([...FrontendRoute,...AdminRoute])