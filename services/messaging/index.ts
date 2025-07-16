import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("message", (data) => {
    console.log("Message:", data);
    socket.broadcast.emit("message", data);
  });
});

httpServer.listen(4004, () => {
  console.log("Messaging service running on port 4004");
});
