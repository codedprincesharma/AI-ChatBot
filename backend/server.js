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
  socket.on("disconnect", () => {
    console.log("A user disconnect");
  })
  socket.on("ai-message", async (data) => {
    console.log("user prompt:", data.prompt)
    const response = await generateResponse(data.prompt)
    console.log("Ai response:", response);
  })
});

httpServer.listen(PORT, () => {
  console.log(`server running on port num ${PORT}`);
})