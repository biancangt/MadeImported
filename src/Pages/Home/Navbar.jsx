import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav
      className={`custom-navbar navbar navbar-expand-md navbar-dark bg-dark ${
        navActive ? "active" : ""
      }`}
      aria-label="MadeImported navigation bar"
    >
      <div className="container">
        <button
          className={`nav__hamburger ${navActive ? "active" : ""} navbar-toggler`}
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${navActive ? "show" : ""}`}
          id="navbarsMadeImported"
        >
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              {isHome ? (
                <ScrollLink
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="hero"
                  className="nav-link"
                >
                  Início
                </ScrollLink>
              ) : (
                <RouterLink to="/" className="nav-link" onClick={closeMenu}>
                  Início
                </RouterLink>
              )}
            </li>
            <li className="nav-item">
              {isHome ? (
                <ScrollLink
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="WeHelp"
                  className="nav-link"
                >
                  Quem Somos
                </ScrollLink>
              ) : (
                <RouterLink to="/" className="nav-link" onClick={closeMenu}>
                  Quem Somos
                </RouterLink>
              )}
            </li>
            <li className="nav-item">
              <RouterLink to="/shop" className="nav-link" onClick={closeMenu}>
                Produtos
              </RouterLink>
            </li>
            <li className="nav-item">
              <RouterLink to="/contato" className="nav-link" onClick={closeMenu}>
                Contato
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
