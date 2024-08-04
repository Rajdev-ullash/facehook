import React from "react";
import LogOut from "../../assets/icons/logout.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const handleLogout = () => {
    setAuth({});
    navigate("/login");
  };
  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={LogOut} alt="Logout" />
    </button>
  );
}

export default Logout;
