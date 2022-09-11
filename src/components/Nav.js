import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav  mb-2  mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link " to="/">
              <strong> Home</strong>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/GroupedTeamMembers">
              <strong> Teams</strong>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
