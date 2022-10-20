const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const {json} = require("body-parser");
const axios = require("axios");
const app = express();
const PORT = 5000;
app.use(cors());
app.use(json());
const { parsed: config} = dotenv.config();
const BASE_URL = `https://api.cloudinary.com/v1_1/${config.CLOUD_NAME}/resources/image`
const auth = {
    username: config.API_KEY,
    password: config.API_SECRET
}
app.get("/photos", async(req,res) =>{
    return res.send({message: "Hello"})
})
app.listen(PORT, () => console.log(`Server listening at port ${PORT}`))