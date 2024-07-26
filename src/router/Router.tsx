import { RouteObject, useRoutes } from "react-router";
import Layout from "./Layout";
import HomePage from "../pages/homePage";
import BlindtestPage from "../pages/blindtestPage";

const Router: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/blindtest",
          element: <BlindtestPage />,
        },
      ],
    },
  ];
  return <>{useRoutes(routes)}</>;
};

export default Router;
