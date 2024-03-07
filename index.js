const express = require("express");
const cors= require("cors");
const app = express();
const mongoose = require('mongoose');
const ModeloCliente = require('./modelo/Cliente');
const about = require("./JSON/About.json");
const portfolio = require("./JSON/Portfolio.json");
const contacto = require("./JSON/Contacto.json");
const puerto = process.env.PORT || 8080; 

app.use(express.json());
app.use(cors());

app.get("/about", (req,res) => {
    res.json(about)
});

app.get("/portfolio", (req,res) => {
    res.json(portfolio)
});
app.get("/contacto", (req,res) => {
    res.json(contacto)
});

mongoose.connect('mongodb+srv://usuarioDB:CUGvEzisInugpEsf@cluster0.mawkfwo.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0');

app.post('/register', (req, res)=>{
    //  post / insertar datos en la db

    const {email, clave} = req.body;
    ModeloCliente.findOne({email: email})
    .then(usuario => {
        if(usuario){
            res.json("Ya está registrado")
        }
        else{
            ModeloCliente.create(req.body)
            .then(formato => res.json(formato))
            .catch(err => res.json(err))
        }
    })
    
})
app.post('/login', (req, res)=>{
    // para encontrar el record en la BD
    const {email, clave} = req.body;
   ModeloCliente.findOne({email: email})
    .then(usuario => {
        if(usuario){
            //si se consiguio el registro 
            if(usuario.clave === clave) {
                res.json("Exitoso");
            }
            else{
                res.json("La contraseña es incorrecta");
            }
        }
        // si no se consiguo el registro
        else{
            res.json("No se encontró el usuario! ");
        }
    })
})

app.listen(puerto, () => {
    console.log(`servidor en : ${puerto}`)
});