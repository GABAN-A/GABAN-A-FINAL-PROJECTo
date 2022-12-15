import React from "react";
const Footer = () => {
    return (
      
      <p className="border-top pt-3 text-center">
        <span>
          Nimr<i className="bi bi-geo-fill"></i>RESTURANT
        </span>
        <span className="mx-1">&copy;</span>
        <span>{new Date().getFullYear()}</span>
      </p>
    );
  };
  
export default Footer;