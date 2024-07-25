import { RouteObject, useRoutes } from "react-router";
import Layout from "./Layout";
import HomePage from "../pages/homePage";

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
      ],
    },
  ];
  return <>{useRoutes(routes)}</>;
};

export default Router;
