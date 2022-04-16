const router = require("express").Router();
const { Router } = require("express");
const User = require("../models/User");

//Register

router.post("/register", async(req,res)=> {  
    try{
        // générer le mot de passe

        // creer le nouvel utilisateur

        //sauver et envoyer la reponse

    }
    catch(err){
        res.status(500).json(err);
    }
})

//login



module.exports = router