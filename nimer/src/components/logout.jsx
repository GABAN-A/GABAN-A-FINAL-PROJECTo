import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/auth";

const Logout = ({ redirect }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();

    if (redirect) {
      navigate(redirect);
    }
  }, []);

  return null;
};

export default Logout;
