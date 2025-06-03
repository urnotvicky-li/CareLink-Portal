import { useNavigate } from "react-router-dom";
import "./HealthcareProgramSelector.css";

const HealthcareProgramSelector = () => {
  const navigate = useNavigate();
  // Healthcare Programs Available in CareLink
  const healthcarePrograms = [
    {
      id: "acl-therapy",
      title: "ACL Therapy Exercise",
      description:
        "General exercise program for ACL recovery with basic rehabilitation training",
      url: "#acl-therapy",
      icon: "🏃‍♂️",
      color: "#2196F3",
      features: [
        "Basic Exercise Training",
        "Recovery Plan Guidance",
        "Progress Tracking",
      ],
    },
    {
      id: "acl-rehab",
      title: "ACL Rehabilitation Monitor",
      description:
        "Real-time knee angle monitoring with AI guidance for professional rehabilitation",
      url: "internal-acl",
      icon: "🦵",
      color: "#4CAF50",
      features: [
        "Real-time Angle Monitoring",
        "AI Smart Guidance",
        "Personalized Rehabilitation Plans",
      ],
    },
    {
      id: "hypertension",
      title: "Hypertension Monitoring",
      description:
        "Blood pressure tracking and medication alerts for hypertension management",
      url: "hypertension",
      icon: "❤️",
      color: "#FF9800",
      features: [
        "Real-time BP Tracking",
        "Medication Reminders",
        "Health Data Analytics",
      ],
    },
  ];

  const handleProgramSelect = (url, title) => {
    console.log(url);
    if (url === "internal-acl") {
      // 如果提供了导航函数，使用它；否则回退到外部URL
      window.open("https://preeminent-bubblegum-262a7d.netlify.app/", "_self");
    } else if (url === "hypertension") {
      navigate("/home");
    } else if (url.startsWith("http")) {
      // 外部链接，新窗口打开
      window.open(url, "_self");
    } else {
      // 内部链接或占位符
      if (url.startsWith("#")) {
        alert(
          `${title} is currently under development. Please check back later.`
        );
      } else {
        window.location.href = url;
      }
    }
  };

  return (
    <div className="healthcare-selector">
      {/* Header */}
      <div className="hp-header">
        <div className="container">
          <div className="logo">
            <span className="logo-t">T</span>
            <span className="logo-text">CareLink</span>
          </div>
          <div className="tagline">Choose Your Healthcare Program</div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="container">
          <h1 className="hero-title">
            Welcome to <span className="highlight">T-Mobile CareLink</span>
          </h1>
          <p className="hero-subtitle">
            Select the healthcare program that fits your needs and start your
            health management journey
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="programs-section">
        <div className="container">
          <div className="section-title">
            <h2>Available Healthcare Programs</h2>
            <p>We provide the following professional healthcare services</p>
          </div>
          <div className="programs-grid">
            {healthcarePrograms.map((program) => (
              <div
                key={program.id}
                className="program-card"
                onClick={() => handleProgramSelect(program.url, program.title)}
                style={{ "--card-color": program.color }}
              >
                <div className="program-icon" style={{ color: program.color }}>
                  {program.icon}
                </div>
                <h3 className="program-title">{program.title}</h3>
                <p className="program-description">{program.description}</p>
                <ul className="program-features">
                  {program.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div
                  className="program-button"
                  style={{ background: program.color }}
                >
                  Get Started
                  <span className="arrow">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="container">
          <p>&copy; 2024 T-Mobile CareLink. All rights reserved.</p>
          <p>Powered by T-Mobile Healthcare Technology</p>
        </div>
      </div>
    </div>
  );
};

export default HealthcareProgramSelector;
