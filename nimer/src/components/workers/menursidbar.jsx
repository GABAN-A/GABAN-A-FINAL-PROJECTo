import { useState,useEffect } from "react";
import FirstDish from "../MENU/FirstDish";
import MainMeal from "../MENU/Mainmeal";
import Deserts from "../MENU/Deserts";

const MenuSidbar =()=>{
    
    const [ShowContent, setContent] = useState(<FirstDish/>);

return(
    <>
    <div className="container">
<div className="row  d-flex flex-wrap min-vh-100 "> 
 <div className="col-9">
  
{ShowContent}
</div>
<div className="col-3  d-flex  flex-column  justify-content-start
">
  <div className="row p-2"> <button type="button" className="btn btn-outline-success"  onClick={() => setContent(<FirstDish/>)}  > מנה ראשונה</button></div>
  <div className="row p-2">   <button type="button" className="btn btn-outline-success" onClick={() => setContent(<MainMeal/>)}>שווארמה ועל האש</button> </div>
 <div className="row p-2"> <button type="button" className="btn btn-outline-success"  onClick={() => setContent(<Deserts/>)}  > ממתקים</button></div>
 </div>
</div>

</div> 

</>
)
}

export default MenuSidbar;