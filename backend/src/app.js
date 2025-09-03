import express from "express";
const app = express()

app.get("/getdata", (req, res) => {
  res.send("Hello from express")
})


export default app