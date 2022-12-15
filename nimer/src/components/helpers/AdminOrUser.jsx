import React from "react";
import WorkerRegister from "../workersReg";
import Login from "../login";
import { useState } from "react";

function AdminOrUser() {
  const [isShown, setIsShown] = useState(true);
  const [isShown2, setIsShown2] = useState(false);
  const handleClick = (event) => {
    setIsShown(true);
    setIsShown2(false);
  };
  const handleClick2 = (event) => {
    setIsShown2(true);
    setIsShown(false);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center ">
            <button onClick={handleClick} className="btn btn-secondary btn-block mb-4 p-2 m-2 " >התחברות לקוחות</button>
            <button type="button" onClick={handleClick2} className="btn btn-primary btn-block mb-4 p-2 m-2">הרשמת עובד</button>
          
            </div>
<div/>
<div>
{isShown && <Login redirect={"/"} />}
</div>
<div>{isShown2 && <WorkerRegister redirect={"/"}/>}</div>
            
            </div>
          </div>
      
    
    </>
  );
}

export default AdminOrUser;
