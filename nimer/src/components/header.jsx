import React from "react";
import { useAuth } from "./context/auth";
import logo from "../images/logo.png";
import "../App.css";
import { NavLink, Link } from "react-router-dom";
const PageHeader = () => {
  const { user } = useAuth();

  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar navbar-bg navstyle"
        aria-label="Third navbar example"
      >
        <div className="container">
      <a  href="./" className="logo" style={{
              width: "38%",}}><img
            style={{
              "width":"100%",
              "max-width": "240px",
              backgroundColor: "white",
            }}
            src={logo}
            alt=""
          > 
</img></a>
          <h1
            className="text-center  Nimer-Time mt-3 fw-bold"
            style={{ width: "40%" }}
          >
            It's Nimr Time
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse fs-5" id="navbarsExample03">
           

            <ul className="navbar-nav ms-auto mb-2 mb-sm-0 text-end">
              {(user?.worker && (!(user?.name=="kitchen")))&& (
                <li className="nav-item nav-hover">
                  <NavLink to="MENIUSIDBAR" className="nav-link">
                    הזמנות
                  </NavLink>
                </li>
              )}
                {(user?.worker && ((user?.name=="kitchen")))&& (
                <li className="nav-item nav-hover">
                  <NavLink to="reciveorder" className="nav-link">
                    הזמנות
                  </NavLink>
                </li>
              )}
                 {(user?.worker && ((user?.name=="admin")))&& (<li>
                        <NavLink to="/all" className="nav-link">
                         הגדרות
                        </NavLink>
                      </li>
                      )}
              {user?.worker === false && (
                <>
                  <li className="nav-item nav-hover">
                    <NavLink to="myorders" className="nav-link">
                      הזמנות לשי
                    </NavLink>
                  </li>
                  <li className="nav-item nav-hover">
                    <NavLink to="creatorder" className="nav-link">
                      יצירת הזמנה
                    </NavLink>
                  </li>
                </>
              )}
              {user ? (
                <li className="nav-item nav-hover">
                  <li className="nav-item nav-hover dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {user.name}
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        {" "}
                        <NavLink to="logout" className="nav-link">
                          התנתקות
                        </NavLink>
                      </li>
                      {(user?.worker && ((user?.name=="admin")))&& (<li>
                        <NavLink to="/all" className="nav-link">
                         הגדרות
                        </NavLink>
                      </li>
                      )}
                    </ul>
                  </li>
                </li>
              ) : (
                <>
                <li className="nav-item nav-hover">
                    <NavLink to="/about" className="nav-link">
                     אודות
                    </NavLink>
                  </li>
                  <li className="nav-item nav-hover">
                    <NavLink to="login" className="nav-link">
                      התחברות
                    </NavLink>
                  </li>
                
                  <li className="nav-item nav-hover">
                    <NavLink to="register" className="nav-link">
                      הרשמה
                    </NavLink>
                  </li>
                  
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default PageHeader;
