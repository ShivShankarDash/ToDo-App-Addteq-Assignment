const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
app.use(express.json())
app.use(cors())

const mainRouter = require("./routes/todo")

app.use("/api/v1", mainRouter)

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})

