<<<<<<< HEAD
const express = require("express");
const cors= require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 8080;

const about = require("./JSON/About.json");
const portfolio = require("./JSON/Portfolio.json");

app.get("/", (req,res) => {
    res.send("mi primera web pls!!!") 
});

app.get("/about", (req,res) => {
    res.json(about)
});

app.get("/portfolio", (req,res) => {
    res.json(portfolio)
});

app.listen(port, () => {
    console.log(`server on : ${port}`)
});
=======
const express = require("express");
const cors= require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 8080;

const about = require("./JSON/About.json");
const portfolio = require("./JSON/Portfolio.json");

app.get("/", (req,res) => {
    res.send("mi primera web pls!!!") 
});

app.get("/about", (req,res) => {
    res.json(about)
});

app.get("/portfolio", (req,res) => {
    res.json(portfolio)
});

app.listen(port, () => {
    console.log(`server on : ${port}`)
});
>>>>>>> e933011865f7f5316e4f780bb5031e4f8f1da0e8
