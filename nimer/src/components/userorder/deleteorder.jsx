import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import orderServices from "../../services/orderServices";

const DeleteCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    async function deleteCard() {
      await orderServices.deleteOrder(id);
      navigate("/myorders");
    }

    deleteCard();
  });

  return null;
};

export default DeleteCard;
