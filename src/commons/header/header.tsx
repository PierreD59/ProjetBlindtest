import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <header
        className={
          isNavExpanded ? "navigation-menu-close" : "navigation-menu-open"
        }
      >
        <div className="logoBlock">
          <div className="logo">
            <Link to={"/"}>
              <img src="img/logo.svg" alt="logo" />
              <p className="logoText">Blindtest</p>
            </Link>
          </div>
          <button
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
            className="IconOpenClose"
          >
            <img
              src={isNavExpanded ? "img/closeIcon.svg" : "img/openIcon.svg"}
              alt="logo"
            />
          </button>
        </div>
        <hr />
        <nav>
          <Link to={"/"}>
            <div>
              <img src="img/home.svg" alt="icon home" />
              <p>Accueil</p>
            </div>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
