import { Link } from "react-router-dom";

export default function ProjectList() {
  return (
    <div>
      <ul className="project-list">
        <li>
          <Link to="/counter" className="link-text">
            {"React Counter"}
          </Link>
        </li>
        <li>
          <Link to="/quotes" className="link-text">
            {"Kanye Quotes"}
          </Link>
        </li>
        <li>
          <Link to="/bitcoin" className="link-text">
            {"Bitcoin Price History"}
          </Link>
        </li>
      </ul>
    </div>
  );
}
