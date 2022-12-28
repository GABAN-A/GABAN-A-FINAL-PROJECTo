const users = require("./routes/users");
const auth = require("./routes/auth");
const orders = require("./routes/orders");
const admin =require("./routes/admin");
const cors = require("cors");

const express = require("express");
const app = express();
const http = require("http");
const {Server} = require("socket.io");


const server = http.createServer(app)
const io=new Server(server,{
  cors:{
      "origin": "http://localhost:3000",
      "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
      "preflightContinue": false,
      "optionsSuccessStatus": 204
  }
})
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/my_rest_api")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(require("morgan")("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/admin", admin);
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/orders", orders);

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("send_message", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
   
    socket.to(data.room).emit("receive_message", data);
  });
});
exports.value1 = { value1 : 'SuperSecretKey' }
const port = 3900;
server.listen(port, () => console.log(`Listening on port ${port}...`));



