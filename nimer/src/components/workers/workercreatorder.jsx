import React from 'react'
import io from "socket.io-client";
 import { useEffect, useState } from "react";
const socket=io.connect("http://localhost:3900");
const room=1
const Workercreatorder=()=> {
 
  
    const [message, setMessage] = useState("");
    const [messageReceived, setMessageReceived] = useState("");
  
 
  
    const sendMessage = () => {
      socket.emit("send_message", { message, room });
    };
  
    useEffect(() => {
      socket.on("receive_message", (data) => {
        setMessageReceived(data.message);
      });
    }, [socket]);
    return (
      <div className="App">
      
       
        <input
          placeholder="Message..."
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <button onClick={sendMessage}> Send Message</button>
        <h1> Message:</h1>
        {messageReceived}
      </div>
    );
  }
  
export default Workercreatorder;


