import app from './src/app.js'
import { createServer } from "http";
import { Server } from "socket.io";
import generateResponse from './src/services/ai.service.js'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 3000


const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  socket.on("ai-message", async (data) => {
    console.log("postman prompt:", data.prompt)
    const response = await generateResponse(data.prompt)
    socket.emit("ai-message-responce",{response})
  })
});

httpServer.listen(PORT, () => {
  console.log(`server running on port num ${PORT}`);
})