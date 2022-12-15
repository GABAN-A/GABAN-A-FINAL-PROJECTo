import { Link } from "react-router-dom";
import logo from "../../images/logo.png"
const Order = ({
  order: { _id, name, address, phone, order },
}) => {
  return (
    <div className="card m-2 p-2" style={{ width: "18rem" }}>
              <img src={logo} className="card-img-top" alt="order" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{order}</p>

        <ul className="list-group list-group-flush">
          <div className="list-group-item">{address}</div>
          <div className="list-group-item">{phone}</div>
        </ul>
        <Link to={`/my-orders/delete/${_id}`} className="card-link">
          deletee
        </Link>
      </div>
    </div>
  );
};

export default Order;
