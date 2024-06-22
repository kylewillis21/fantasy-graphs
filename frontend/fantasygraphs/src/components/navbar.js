import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
  const isDesktop = useMediaQuery({ minWidth: 800 });

  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/import">Import League</CustomLink>
        <CustomLink to="/graphs">Graphs</CustomLink>
        <CustomLink to="/stats">League Stats</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
