// Import the Link component
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Mental Health
      </Link>
      <ul>
        <li className="active">
          <Link to="/SignUp">SignUp</Link>
        </li>
        <li>
          <Link to="/Quiz">Quiz</Link>
        </li>
      </ul>
    </nav>
  );
}
