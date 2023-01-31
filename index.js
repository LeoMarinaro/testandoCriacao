const express = require("express")
const path = require("path")
const app = express()

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "./views"));

app.get("/", (req, res)=>{
    res.render("main")
})

app.listen(5000, ()=>{
    console.log("Isto Funciona")
})