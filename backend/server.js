const express = require('express')
var cors = require('cors')
const app = express()
const mongoose = require("mongoose")
require('dotenv').config()

app.use(cors());
app.use(express.json())

//Connect to MongoDB
mongoose.connect(process.env.DB_CONNECT,
  () => console.log("Connected to MongoDB"))

//Import Routes
const questionnaireRoutes = require("./routes/questionnaire")
const resultRoutes = require("./routes/result")


//Route Middleware
app.use("/api/q", questionnaireRoutes)
app.use("/api/result", resultRoutes)


//Start Server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server live on port ${PORT}`)
})