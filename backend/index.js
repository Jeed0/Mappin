const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const pinRoute = require("./routes/pins")

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log("MongoDB Connecté!")
}).catch(err=> console.log(err));

app.listen("/api/pins", pinRoute);

app.listen(8800,()=>{
    console.log("backend server est en marche!")
})

//  "start" : "nodemon index.js" à la place de test dans -> pckjson