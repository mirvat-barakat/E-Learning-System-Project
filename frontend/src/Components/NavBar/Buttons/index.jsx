import React from "react";
import AppButton from "../../Button";
import "./styles.css";
import { useNavigate } from "react-router-dom";


function NavButtons() {

    const navigate = useNavigate();

    const handleNavigateToLogin = () => {
        navigate("/login");
      }
    
    const handleNavigateToRegister = () => {
        navigate("/register");
      }

    const handleNavigateToEnroll = () => {
        navigate("/enroll");
      }

    const handleNavigateToDropClasses= () => {
        navigate("/drop_classes");
      }

    return(
        <div className="navButtons">
        <AppButton button_name="Login" onClick={handleNavigateToLogin}  />
        <AppButton button_name="Signup" onClick={handleNavigateToRegister}  />
        
        <AppButton button_name="Enroll"  onClick={handleNavigateToEnroll}  />
        <AppButton button_name="DropClasses" onClick={handleNavigateToDropClasses}  />
        </div>
    );
}

export default NavButtons;