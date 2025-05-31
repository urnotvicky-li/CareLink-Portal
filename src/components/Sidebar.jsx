// src/components/Sidebar.jsx

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* T-Mobile Logo */}
      <div className="logo-section">
        <div className="tmobile-logo">
          <span className="t-logo">T</span>
          <span className="mobile-text">Mobile</span>
        </div>
      </div>

      {/* Doctor Info Section */}
      <div className="doctor-info">
        <h3 className="doctor-name">Dr. Phillips</h3>
        <p className="doctor-email">Phillips@hospital.com</p>
      </div>

      {/* Divider Line */}
      <hr className="divider" />

      {/* Navigation Menu */}
      <nav className="nav-menu">
        <ul className="nav-links">
          <li className="nav-item">
            <button className="nav-button active">Patient List</button>
          </li>
          <li className="nav-item">
            <button className="nav-button">Analytics</button>
          </li>
          <li className="nav-item">
            <button className="nav-button">Reports</button>
          </li>
          <li className="nav-item">
            <button className="nav-button">Messages</button>
          </li>
          <li className="nav-item">
            <button className="nav-button">Medicine Management</button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}