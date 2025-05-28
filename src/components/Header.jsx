// src/components/Header.jsx

export default function Header() {
    return (
      <header className="header">
        <div className="patient-info">
          <span className="patient-name">Anna D.</span>
          <span>ID No.: 123456</span>
          <span>Contact: 1234567890</span>
          <span>Age: 76</span>
          <span>Gender: Male</span>
        </div>
        <div className="header-right">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="add-button">＋</button>
        </div>
      </header>
    );
  }