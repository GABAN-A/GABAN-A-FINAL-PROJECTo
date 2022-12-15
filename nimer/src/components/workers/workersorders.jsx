import io from "socket.io-client";
import { useEffect } from "react";
import Chat from "../workers/chat/chat"
import {  useState } from "react";
const socket=io.connect("http://localhost:3900");
let chat1=[],chat2=[],chat3=[],chathis1=[],chathis2=[],chathis3=[],num=0,lastorder1=[],lastorder2=[],lastorder3=[]; const room=1;
const ReciveOrder=()=> {
  
  const [date, setDate] = useState("");
  const [messageReceived1, setMessageReceived1] = useState("");
  const [UserName1, setUSERName1] = useState("");
  const [messageReceived2, setMessageReceived2] = useState("");
  const [UserName2, setUSERName2] = useState("");
  const [messageReceived3, setMessageReceived3] = useState("");
  const [UserName3, setUSERName3] = useState("");
  const [MessageHistor1, setmessagehistory1] = useState("");
  const [MessageHistor2, setmessagehistory2] = useState("");
  const [MessageHistor3, setmessagehistory3] = useState("");
 
  function joinRoom () {
       socket.emit("send_message",room);
   };
   joinRoom ()
   function refreshPage() {
    window.location.reload(false);
  }
  setInterval(refreshPage, 50000);
   useEffect(() => {
    if(localStorage.getItem("cht1") !== null){
    lastorder1 =JSON.parse(window.localStorage.getItem("cht1"));
    lastorder1=lastorder1.map(function(x){ return <li  key={"his1"+(num++)}>{(x.Hours+" ")+x.message}</li>})
    setmessagehistory1( lastorder1)
    }
    if(localStorage.getItem("cht2") !== null ){
      lastorder2 =JSON.parse(window.localStorage.getItem("cht2"));
      lastorder2=lastorder2.map(function(x){ return <li  key={"his2"+(num++)}>{(x.Hours+" ")+x.message}</li>})
      setmessagehistory2( lastorder2)
  }
    if(localStorage.getItem("cht3") !== null){
    lastorder3 =JSON.parse(window.localStorage.getItem("cht3"));
    lastorder3=lastorder3.map(function(x){ return <li  key={"his3"+(num++)}>{(x.Hours+" ")+x.message}</li>})
    setmessagehistory3( lastorder3)
  }
  }
   , [socket]);

   useEffect(() => {
    socket.on("receive_message", (data) => {
      setDate(data.sentAt);
      if(data.sendinguser==="mltsar1"){
        chat1.push(data)
        window.localStorage.setItem("cht1", JSON.stringify(chat1));
        function Chat1(){
          chathis1 = chat1.map(function(element){
            return <li  key={"item2"+(num++)}>{(element.Hours+" ")+element.message}</li>;
          })        }
        Chat1();
        function deletechat1() {
          localStorage.removeItem("cht1");
        }setInterval(deletechat1, 49000);
        setmessagehistory1( lastorder1.concat(chathis1))
      setMessageReceived1((data.Hours+" ")+(data.message)) ;
      setUSERName1(data.sendinguser);
      }
      else if(data.sendinguser==="mltsar2"){
        chat2.push(data);
        window.localStorage.setItem("cht2", JSON.stringify(chat2));
        function Chat2(){
          chathis2 = chat2.map(function(element){
            return <li  key={"item2"+(num++)}>{(element.Hours+" ")+element.message}</li>;
          })
        }Chat2();
        function deletechat3() {
          localStorage.removeItem("cht2");
        }setInterval(deletechat3, 49000);
        setmessagehistory2( lastorder2.concat(chathis2))
        setMessageReceived2(data.message);
        setUSERName2(data.sendinguser);
      }
      else if(data.sendinguser==="mltsar3"){
        chat3.push(data);
        window.localStorage.setItem("cht3", JSON.stringify(chat3));
        function Chat3(){
          chathis3 = chat3.map(function(element){
            return <li  key={"item3"+(num++)}>{(element.Hours+" ")+element.message}</li>;
          })
        }Chat3();
        function deletechat3() {
          localStorage.removeItem("cht3");
        }setInterval(deletechat3, 49000);
        setmessagehistory3( lastorder3.concat(chathis3))
        setMessageReceived3(data.message);
        setUSERName3(data.sendinguser);
       
      }
      
    });
  }, [socket]);
  
  return (
    
    <>

    <div className="container d-flex flex-wrap">
      <Chat date={date} messagehistory1={MessageHistor1} Mltsar1={UserName1}MESSAGE1={messageReceived1}/><Chat date={date} messagehistory2={MessageHistor2} Mltsar2={UserName2}MESSAGE2={messageReceived2} /><Chat date={date} messagehistory3={MessageHistor3} Mltsar3={UserName3}MESSAGE3={messageReceived3}/>     
</div>
</>
  )
}
export default ReciveOrder;
