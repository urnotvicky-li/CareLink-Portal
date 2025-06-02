import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import CareLink from "./components/Landing";
import DoctorPortal from "./DoctorPortal";
import PatientPortal from "./PatientPortal";
import { UserProvider, useUser } from "./UserContext";

function AppWrapper() {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSignIn = (user) => {
    setUser(user); // 👈 Save user in context

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
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AppWrapper />} />
          <Route path="/doctor/*" element={<DoctorPortal />} />
          <Route path="/patient/*" element={<PatientPortal />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
