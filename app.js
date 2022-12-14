const express = require("express");
const app = express();
const path = require ("path");

app.use(express.static(path.join(__dirname,"./public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.listen("3000", () =>{
    console.log("The server is ON at port 3000");
});