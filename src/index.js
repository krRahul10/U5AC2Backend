const express = require("express");
const connection = require("./config/db.js")
const cors = require("cors");

const authRouter = require("./routes/auth.routes")
const notesRouter = require("./routes/notes.routes")

const app = express();

app.use(cors());
app.use(express.json())
app.use("/auth", authRouter)
app.use("/notes", notesRouter)


app.listen(7777, async() => {
    try{
        await connection;   
        console.log("connected to db successfully")
    }
    catch{
        console.log("something went wrong while connecting to db")
    }
    console.log("Server listening on localhost:7777")
})