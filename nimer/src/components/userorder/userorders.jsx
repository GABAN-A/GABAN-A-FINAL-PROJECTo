import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Order from "./order";
import OrderServices from "../../services/orderServices";
const UserOrders = () => {
    const [orders, setOrder] = useState([]);
  
    useEffect(() => {
      async function getOrders() {
        const { data } = await OrderServices.getAll();
  
        setOrder(data);
      }
  
      getOrders();
    }, []);

  return (
    <>
<div className="container text-center  ">
<div className="h3">
        <Link to="/creatorder">יצירת הזמנה חדשה</Link>
      </div>

      <div className="row ">
        <div className="col d-flex justify-content-center  flex-wrap">
        {!orders.length ? (
          <p>No Orders..</p>
        ) : (
          orders.map((order) => <Order key={order._id} order={order} />)
        )}
        </div>
      </div>
      </div>
    </>
  );
};

export default UserOrders;
