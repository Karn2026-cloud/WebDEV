import { Link } from "react-router-dom";

const Sidebar = () => {

  const logout = () => {

    localStorage.removeItem("token");

    window.location.href = "/";
  };

  return (
    <div className="sidebar">

      <h2>Admin Panel</h2>

      <Link to="/dashboard">
        Dashboard
      </Link>
      <Link to="/content">
Content Manager</Link>

      <Link to="/projects">
        Projects
      </Link>

      <Link to="/messages">
        Messages
      </Link>
<Link to="/pricing">
Pricing Plans
</Link>
      <Link to="/testimonials">
Testimonials
</Link>

<Link to="/settings">
Settings
</Link>

      <button onClick={logout}>
        Logout
      </button>

    </div>
  );
};

export default Sidebar;