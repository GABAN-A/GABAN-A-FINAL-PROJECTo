import React from 'react'
import { NavLink } from "react-router-dom";
import { useAuth } from "./context/auth"



const Sidebar2 = () => {
   

    const { user } = useAuth();
   
      
        return (
            <div className="row text-center bg-white h-100 ">
                 {((user?.worker===false)?(
            <div className="col-6 btt col-lg-12 col-md-12   btn btn-light p-1 m-0 "> <NavLink to="/creatorder">
                  <img className="h-100 ar  w-100"src={require('../images/11.png')} /></NavLink></div>):(<div className="col-6 btt col-lg-12 col-md-12   btn btn-light p-1 m-0 "> <NavLink to="/register">
                  <img className="h-100 ar  w-100"src={require('../images/11.png')} /></NavLink></div>))}
            <div className="col-6 btt col-lg-12 col-md-12  btn btn-light p-1 m-0"><NavLink to="/menu1"><img className="h-100 ar  w-100"src={require('../images/112.png')} /></NavLink></div>
            <div className="col-6 btt col-lg-12 col-md-12   btn btn-light p-1 m-0">  <a href="https://goo.gl/maps/4ciyLfuC2ZCnMaL27" target="_blank">
                       <img className="h-100 ar w-100"src={require('../images/114.png')} /></a></div> 
            <div className="col-6 btt col-lg-12 col-md-12  btn btn-light p-1 m-0"><img className="h-100  ar  w-100"src={require('../images/113.png')} /></div>
           </div>
    );
};

export default Sidebar2;