import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Copilot Lab</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}