// src/components/Sidebar.jsx

export default function Sidebar() {
    return (
      <aside className="sidebar">
        <h1 className="logo">T-Mobile</h1>
        <ul className="nav-links">
          <li className="active">Patient List</li>
          <li>Analytics</li>
          <li>Reports</li>
          <li>Messages</li>
          <li>Medication Management</li>
        </ul>
      </aside>
    );
  }