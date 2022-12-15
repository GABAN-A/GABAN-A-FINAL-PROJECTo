import React from "react";
import io from "socket.io-client";
import { useState } from "react";
import { useAuth } from "../context/auth";
const socket = io.connect("http://localhost:3900");
const room = 1;
let Counter=0,incremntorder=0,flafl=0,gvenah=0,lafah=0,lehmGrill=0;
const FirstDish = () => {
    const { user } = useAuth();
   let sendinguser=user.name
   let Datee = new Date();
   let sentAt = Datee.toJSON().slice(0,10).replace(/-/g,'/');
	let Hours = Datee.getHours()+":"+Datee.getMinutes();
  const [Shepsstate, setSheps] = useState(0);
  const [Flafelstate, setFalfl] = useState(0);
  const [Gvenahstate, setGvenah] = useState(0);
  const [Lafahtoaststate, setLafah] = useState(0);
  const [LehmGrillstate, setLehm] = useState(0);
  
  function shebs(){
   Counter=(incremntorder);
   setSheps(incremntorder);
   console.log(Shepsstate)
  };
   function  Flafl(){
     Counter=(flafl);
    (setFalfl(flafl));
     console.log(Flafelstate)
 };
 function Gvenah(){
    Counter=(gvenah);
    setGvenah(gvenah);

};
function  LafahToast(){
    Counter=(lafah);
    setLafah(lafah);

};
function  LehmGrill(){
    Counter=(lehmGrill);
    setLehm(lehmGrill);

};

    function sendMessage (ordertybe) {
    let message = ( ordertybe) + (Counter);
    socket.emit("send_message", { sendinguser,message, room,sentAt,Hours });
  };
  return (
    <div className="container">
        <div className="row ">
            <div className="p-3 col-6 col-lg-4">
        <div
          className="card"
              style={{
            width: "auto",
          }}
        >
          <img
            src={require("../../images/fryes.jpg")}
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body text-center text-center">
            <h5 className="card-title">ציפס</h5>
            <p className="card-text"> : מספר הזמנה:{Shepsstate}</p>
            <a
              onClick={function () {
                shebs(incremntorder++);
                sendMessage("ציפס ");
              }}
              className="m-0 btn border border-2 bg-primary"
            >
תזמין
            </a>
          </div>
        </div>
        </div>
        <div className="p-3 col-6 col-lg-4">
        <div
          className="card"
              style={{
            width: "auto",
          }}
        >
          <img
            src={require("../../images/fryes.jpg")}
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body text-center">
            <h5 className="card-title">פלאלפל</h5>
            <p className="card-text"> : מספר הזמנה {Flafelstate}</p>
            <a
              onClick={ function () {
                Flafl(flafl++);
                 sendMessage("פלאפל ");
              }}
              className="m-0 btn border border-2 bg-primary"
            >
תזמין            </a>
          </div>
        </div>
        </div>
        <div className="p-3 col-6 col-lg-4 ">
        <div
          className="card"
              style={{
            width: "auto",
          }}
        >
          <img
            src={require("../../images/fryes.jpg")}
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body text-center">
            <h5 className="card-title">גבינה</h5>
            <p className="card-text"> : מספר הזמנה {Gvenahstate}</p>
            <a
              onClick={function () {
                Gvenah(gvenah++);
                sendMessage("גבינה ");
              }}
              className="m-0 btn border border-2 bg-primary"
            >
תזמין            </a>
          </div>
        </div>
        </div>
        <div className="p-3 col-6 col-lg-4 ">
        <div
          className="card"
              style={{
            width: "auto",
          }}
        >
          <img
            src={require("../../images/fryes.jpg")}
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body text-center">
            <h5 className="card-title">לפה תוסת</h5>
            <p className="card-text"> : מספר הזמנה {Lafahtoaststate}</p>
            <a
              onClick={function () {
                LafahToast(lafah++);
                sendMessage("לפה תוסט ");
              }}
              className="m-0 btn border border-2 bg-primary"
            >
תזמין            </a>
          </div>
        </div>
        </div>
        <div className="p-3 col-6 col-lg-4 ">
        <div
          className="card"
              style={{
            width: "auto",
          }}
        >
          <img
            src={require("../../images/fryes.jpg")}
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body text-center">
            <h5 className="card-title">לחם על הגריל</h5>
            <p className="card-text"> : מספר הזמנה {LehmGrillstate}</p>
            <a
              onClick={function () {
                LehmGrill(lehmGrill++);
                sendMessage("לחם על הגריל ");
              }}
              className="m-0 btn border border-2 bg-primary"
            >
תזמין            </a>
            </div>
          </div>
        </div>
      </div>
      </div>
      
  );
};

export default FirstDish;
