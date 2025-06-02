import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import CareLink from "./components/Landing";
import DoctorPortal from "./DoctorPortal";
import PatientPortal from "./PatientPortal";

// Wrapper to use hooks like useNavigate
function AppWrapper() {
  const navigate = useNavigate();

  const handleSignIn = (user) => {
    if (user.userType === "doctor") {
      navigate("/doctor");
    } else if (user.userType === "patient") {
      navigate("/patient");
    }
  };

  return <CareLink onSignIn={handleSignIn} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppWrapper />} />
        <Route path="/doctor/*" element={<DoctorPortal />} />
        <Route path="/patient/*" element={<PatientPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
