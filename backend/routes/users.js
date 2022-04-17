const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');

//Register

router.post("/register", async(req,res)=> {  
    try{
        // générer le mot de passe -> yarn add bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password);
        // creer le nouvel utilisateur
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        })
        //sauver et envoyer la reponse
        const user = await newUser.save();
        res.status(200).json(user._id);
    }
    catch(err){
        res.status(500).json(err);
    }
})

//login

router.post("/login", async(req,res)=> {  
    try{
        // trouver l'utilisateur
        const user = await User.findOne({username:req.body.username});
        !user && res.status(400).json("Votre identifiant oou MDP n existent pas!");

        // valider le MDP
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        !validPassword && res.status(400).json("Votre identifiant oou MDP n existent pas!");

        //sauver et envoyer la reponse
        res.status(200).json({ _id: user._id, username: username });
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router