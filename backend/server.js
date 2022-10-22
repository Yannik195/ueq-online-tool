const express = require('express')
const app = express()

const testRoutes = require("./routes/test")

app.use("/api/test", testRoutes)


//Start Server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server live on port ${PORT}`)
})