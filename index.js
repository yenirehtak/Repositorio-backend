const express = require("express");
const cors= require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 8080;

const about = require("./JSON/About.json");
const portfolio = require("./JSON/Portfolio.json");
const contacto = require("./JSON/Contacto.json");

app.get("/", (req,res) => {
    res.send("mi primera web pls!!!") 
});

app.get("/about", (req,res) => {
    res.json(about)
});

app.get("/portfolio", (req,res) => {
    res.json(portfolio)
});
app.get("/contacto", (req,res) => {
    res.json(contacto)
});

app.listen(port, () => {
    console.log(`server on : ${port}`)
});