import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserServices from "../../services/UserServices";

const DeleteUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    async function deleteUser() {
      await UserServices.deleteUser(id);
      navigate("/all");
    }

    deleteUser();
  });

  return null;
};

export default DeleteUser;
