import { Location, Outlet, useLocation } from "react-router";
import Header from "../commons/header/header";

const Layout: React.FC = () => {
  const location: Location = useLocation();
  const hideHeaderOnPath: string[] = ["/"];

  const hideHeader: boolean = hideHeaderOnPath.includes(location.pathname);

  return (
    <>
      {!hideHeader && <Header />}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
