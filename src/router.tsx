import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Quiz } from "./pages/Quiz";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Home />,
  },
  {
    path:"/quiz/:id",
    element: <Quiz />
  }
]);

export default router;
