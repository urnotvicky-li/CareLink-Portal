import { useState } from "react";

import { Landing } from "./Landing";
import { ProgramSelection } from "./ProgramSelection";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { healthcarePrograms, colors } from "./constants.ts";
import { auth } from "../../firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const containerStyle = {
  background: "linear-gradient(135deg, #E20074 0%, #B8005A 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
  overflowY: "auto",
};

const CareLink = ({ onSignIn }) => {
  const [currentStep, setCurrentStep] = useState("landing");
  const [userType, setUserType] = useState("patient");

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    selectedProgram: "",
  });

  const [errors, setErrors] = useState({
    signIn: "",
    signUp: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const resetState = () => {
    setCredentials({ username: "", password: "", showPassword: false });
    setSignUpData({
      username: "",
      password: "",
      confirmPassword: "",
      age: "",
      gender: "",
      selectedProgram: "",
    });
    setErrors({ signIn: "", signUp: "" });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors((prev) => ({ ...prev, signIn: "" }));

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credentials.username,
        credentials.password
      );
      const user = userCredential.user;
      console.log("User signed in:", user);
      onSignIn(user, userType); // pass user object from Firebase
    } catch (error) {
      console.error(error);
      setErrors((prev) => ({
        ...prev,
        signIn: "Invalid email or password",
      }));
    }

    setIsLoading(false);
  };

  const handleSignUp = async () => {
    const { username, password, confirmPassword } = signUpData;
    if (password !== confirmPassword) {
      setErrors((prev) => ({ ...prev, signUp: "Passwords do not match" }));
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        username,
        password
      );
      const user = userCredential.user;
      onSignIn(user, userType); // auto-login
    } catch (error) {
      console.error(error);
      setErrors((prev) => ({ ...prev, signUp: error.message }));
    }
  };

  const handleProgramSelection = (programId) => {
    setSignUpData((prev) => ({ ...prev, selectedProgram: programId }));
    setCurrentStep("signup");
  };

  const returnToLanding = () => {
    resetState();
    setCurrentStep("landing");
  };

  const renderContent = () => {
    switch (currentStep) {
      case "landing":
        return (
          <div style={containerStyle}>
            <Landing
              resetState={resetState}
              setCurrentStep={setCurrentStep}
              setUserType={setUserType}
              switchUserType={setUserType}
            />
          </div>
        );

      case "program-selection":
        return (
          <div style={containerStyle}>
            <ProgramSelection
              returnToLanding={returnToLanding}
              handleProgramSelection={handleProgramSelection}
            />
          </div>
        );

      case "signin":
        return (
          <div style={containerStyle}>
            <SignIn
              userType={userType}
              handleSignIn={handleSignIn}
              username={credentials.username}
              setUsername={(val) =>
                setCredentials((prev) => ({ ...prev, username: val }))
              }
              password={credentials.password}
              setPassword={(val) =>
                setCredentials((prev) => ({ ...prev, password: val }))
              }
              showPassword={credentials.showPassword}
              setShowPassword={(val) =>
                setCredentials((prev) => ({ ...prev, showPassword: val }))
              }
              error={errors.signIn}
              isLoading={isLoading}
              returnToLanding={returnToLanding}
            />
          </div>
        );

      case "signup":
        return (
          <div style={containerStyle}>
            <SignUp
              signUpData={signUpData}
              setSignUpData={setSignUpData}
              showPassword={credentials.showPassword}
              setShowPassword={(val) =>
                setCredentials((prev) => ({ ...prev, showPassword: val }))
              }
              setSignUpError={(msg) =>
                setErrors((prev) => ({ ...prev, signUp: msg }))
              }
              signUpError={errors.signUp}
              setCurrentStep={setCurrentStep}
              onSignUp={handleSignUp}
            />
          </div>
        );

      default:
        return (
          <div>
            <h2>Healthcare Programs</h2>
            <ul>
              {Object.values(healthcarePrograms).map((program) => (
                <li
                  key={program.id}
                  style={{ color: program.color, marginBottom: 12 }}
                >
                  <span style={{ fontSize: 24 }}>{program.icon}</span>
                  <strong style={{ marginLeft: 8 }}>{program.name}</strong>
                  <div style={{ fontSize: 14 }}>{program.description}</div>
                  {program.isOurProduct && (
                    <span style={{ color: colors.magenta, marginLeft: 8 }}>
                      (Our Product)
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
    }
  };

  return renderContent();
};

export default CareLink;
