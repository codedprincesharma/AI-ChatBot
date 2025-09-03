import app from './src/app.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT ||3000

import { createServer } from "http";
import { Server } from "socket.io";


const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });


io.on("connection", (socket) => {

})


httpServer.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
});

