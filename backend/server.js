const express = require('express')
const app = express()
const mongoose = require("mongoose")
require('dotenv').config()

//Connect to MongoDB
mongoose.connect(process.env.DB_CONNECT,
  () => console.log("Connected to MongoDB"))

//Import Routes
const testRoutes = require("./routes/test")

//Route Middleware
app.use("/api/test", testRoutes)

//Start Server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server live on port ${PORT}`)
})