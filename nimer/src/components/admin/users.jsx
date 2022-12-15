import { Link } from "react-router-dom";
import logo from "../../images/logo.png"

const User = ({
    order: { _id, name, email, phone,worker },
}) => {
    return (
        <>
      <div className="card m-2 p-2" style={{ width: "18rem" }}>
                <img src={logo} className="card-img-top" alt="order" />
        <div className="card-body">
          <h5 className="card-title">UserName: {name}</h5>
          <ul className="list-group list-group-flush">
          <div className="list-group-item">Email: {email}</div>
          <div className="list-group-;;item">Worker: {worker.toString()}</div>
            <div className="list-group-;;item">phone: {phone}</div>
          </ul>
          <Link to={`/admin/delete/${_id}`} className="card-link">
            Delete User and his Orders
          </Link>
        </div>
      </div>
      </>
    );
  };
  export default User;