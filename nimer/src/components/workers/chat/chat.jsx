
import React, { useEffect, useRef } from 'react'
const Chat = ({Mltsar1,Mltsar2,Mltsar3,messagehistory1,messagehistory2,messagehistory3,MESSAGE1,MESSAGE2,MESSAGE3,date}) => {
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(scrollToBottom,[messagehistory1]);
  useEffect(scrollToBottom,[messagehistory2]);
  useEffect(scrollToBottom,[messagehistory3]);

  
  return (
    <>

    <div className="chat m-auto" style={{width:"25vw",padding:"10px"}}>
      <div
        className="messages chatbox"
        style={{
          height: "50vh",
          overflowY: "auto",
        }}
      >
        <div className="message text-center">
        <div className="day text-center my-3 text-warning fw-bold">
         {date}
         <div>{Mltsar3}{Mltsar1}{Mltsar2}</div>
         <p className="display-6">הזמנות  אחרונות</p>
        </div>
        <div className="text-primary fw-bold list-group-item">{messagehistory1}{messagehistory2}{messagehistory3}</div>     
          <span className="text-primary text-capitalize fw-bolder text-decoration-underline">
          {date}{Mltsar3}{Mltsar1}{Mltsar2}</span>
          
          <p className="text-alert alert alert-info fw-bolder fs-4">{MESSAGE3}{MESSAGE1}{MESSAGE2}</p>
        </div>
        <br></br>
        <div ref={messagesEndRef} />
      

        
      </div>
      <div className="message-input mt-3">
        <div className="input-group">
          <input type="text" className="form-control" />
          <button className="btn btn-primary">send</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Chat;
