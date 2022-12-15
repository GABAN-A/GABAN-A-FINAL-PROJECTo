import React from 'react'
import { NavLink, Link } from "react-router-dom";
function PageNotFound() {
  
  return (
    <>
    
    <h1 className="text-center m-4 p-4">404. That’s an error.</h1>
    <h3 className="text-center">The requested URL /LI was not found on this server. That’s all we know.</h3>
    <p className="text-center">  <Link className="button fs-4 text-danger" to="/">
          GO TO HOMEPAGE<i className="bi bi-geo-fill"></i>
        </Link></p>
    </>
  )
}

export default PageNotFound;