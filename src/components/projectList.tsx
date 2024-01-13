import { Link } from "react-router-dom";

export default function ProjectList() {
  return (
    <div>
      <ul className="project-list">
        <li>
          <Link to="/Counter" className="link-text">
            {"React Counter"}
          </Link>
        </li>
      </ul>
    </div>
  );
}
