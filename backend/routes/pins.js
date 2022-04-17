const router = require("express").Router();
const Pin = require("../models/Pin");

// create PIN

router.post("/", async(req, res) => {  // router methode post url/ pour (demande et reponse)
    const newPin = new Pin(req.body); // creation du nouvau Pin en demandant le body
    try{
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    }catch(err){
        res.status(500).json(err);
    }
})
;
// GET ALL PINS

router.get("/", async(req, res) => {
    try{
        const pins = await Pin.find();
        res.status(200).json(pins);
    }catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;