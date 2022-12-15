import { useState } from "react";
import { useEffect,useRef } from "react";
import { Link } from "react-router-dom";
import Order from "../userorder/order";
import User from "../admin/users"

import OrderServices from "../../services/orderServices";
const AdminPage = () => {
  const [toggle, setToggle] = useState(false)
    const [orders, setOrder] = useState([]);
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] =useState("");
    const [searchResults, setSearchResults] =useState([]);
    const [workers, setworkers] =useState([]);
    const handleChange = e => {
     return setSearchTerm(e.target.value);
    };
    useEffect(() => {
      async function getOrders() {
        const { data } = await OrderServices.getAllOrders();
        setOrder(data);
      }
      getOrders();
    }, []);
    useEffect(() => {
        async function getUsers() {
          const { data } = await OrderServices.getAllUsers();
          setUsers(data);
        }
        getUsers();
      }, []);
      function handleClick() {
        setworkers(users.filter(obj => obj.worker === true ))
        }
        useEffect(() => {
          if(searchTerm=="")
          {
            setSearchResults([]);
          }
          else{
            const filtered = users.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(searchTerm)));
            setSearchResults(filtered);
          }
        }, [searchTerm]);
        
  return (
    <>
            <div className="text-center container border border-3 p-3 " >
      <div className="btn btn-primary mt-2"> Name,Email,or Worker-Status חיפוש משתמש לפי</div>
      <input className="input-group mt-3"
        type="text"
        placeholder="Search by user Name,Email,or Worker-Status"
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="fs-5">
      {searchResults.map(function(item) {
     return    <li  key={item._id}>User-Name:{item.name} | User-Email: {item.email} | WORKER: {item.worker.toString()}</li>
})}
      </div> 
    </div>
    <div className="container d-flex flex-column justify-content-center mt-4">
    <button 
            onClick={function(event){ setToggle(!toggle); handleClick();}}
            className="btn btn-primary mb-5">
הצגת עובדים רשומים      </button>
      {toggle && (
         <div className="row bg-secondary border border-2  ">
         <div className="col d-flex justify-content-center  flex-wrap">
             {!workers.length ? (
               <p>No workers..</p>
             ) : (
               workers.map((worker) => <User key={worker._id} order={worker} />)
             )}
             </div>
              <button ></button>
           </div>
      )}
      </div>
      <div className="display-5 text-center mt-3 mb-3">All-Users</div>

    <div className="container text-center  ">
      <div className="row ">
        <div className="col d-flex justify-content-center  flex-wrap">
        {!orders.length ? (
          <p>No Users..</p>
        ) : (
          users.map((user) => <User key={user._id} order={user} />)
        )}
        </div>
      </div>
      </div>
     <div className="border border-5"></div>
     <div className="display-5 text-center">All-Orders</div>
     <div className="container text-center  ">
      <div className="h3">
        <Link to="creatorder">יצירת הזמנה חדשה</Link>
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

export default AdminPage;
