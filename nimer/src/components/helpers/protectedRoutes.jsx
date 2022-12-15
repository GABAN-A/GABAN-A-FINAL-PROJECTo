import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth"

const ProtectedRoute = ({ children, onlyUsers = false ,OnlyWorkers=false,ADMIN=false}) => {
  const { user } = useAuth();
  console.log(user.name)
 if(!user ||(((onlyUsers && user.worker) || (OnlyWorkers  && !user.worker ) || (!(user.name=="admin")&&ADMIN)))) {
    return <Navigate to="/login" />;
  }
  return children;
};



export default ProtectedRoute;
