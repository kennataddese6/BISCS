const express = require("express");
const connectDB = require("./config/dbConfig");
const WebSocket = require("ws");
const cors = require("cors");
const dotenv = require("dotenv");

const wss = new WebSocket.Server({ noServer: true });
dotenv.config();
const port = process.env.PORT || 5000;
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/academicType", require("./routes/academicRoutes"));

const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (socket) => {
    wss.emit("connection", socket, request);
  });
});