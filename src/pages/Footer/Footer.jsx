import { Link } from "react-router-dom";
import "./footer.css";
export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="rounded-3xl px-3 py-1 primaryCol secondaryCol cursor-pointer">
                REACT-BLOG
              </div>
              <div className="my-4">
                <ul className="nav justify-content-center gap-3">
                  <li className="nav-item">
                    <Link
                      to="/"
                      style={{ color: "#02646d", textDecoration: "none" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/"
                      style={{ color: "#02646d", textDecoration: "none" }}
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/"
                      style={{ color: "#02646d", textDecoration: "none" }}
                    >
                      Terms & Condintions
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/"
                      style={{ color: "#02646d", textDecoration: "none" }}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <hr />
              <small className="mb-2 mt-2 fs-6-sm" style={{ color: "#02646d" }}>
                Copyright © 2024 React-Blog | Powered by coderronnie.
              </small>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
