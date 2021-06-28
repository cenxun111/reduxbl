// const router = require('express').Router();
const express = require("express")
// const Product = require('./models/Product')
require('dotenv').config()
const  mongoose = require("mongoose")
const productRoute = require('./routes/product')
const app = express();
const path = require("path")
const cors = require('cors')

app.use(cors())
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
})
.then(console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

// app.get("/",async (req,res)=> {
// //    const name = req.body.name;
// //     const desc = req.body.resc; 

//     const product = new Product({ name:"name",desc:"desc"});
//     try{
//         await product.save();
//         res.send("data")
//     } catch (err) {
//         console.log(err);
//     }
// });


app.use("/api/product",productRoute)

app.listen(4000,()=> console.log("Server running on port 4000"))