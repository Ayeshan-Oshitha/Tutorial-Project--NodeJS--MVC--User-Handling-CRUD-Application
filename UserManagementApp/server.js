const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require("path");


 const app = express();

 dotenv.config({path:'./config.env'})
 const PORT = process.env.PORT || 8080

 //log requests
 app.use(morgan('tiny'))

 //parse request to body-parse
 app.use(bodyparser.urlencoded({extended:true}))
 
 //set view engine
 app.set("view engine","ejs")
 // app.set("views",path.resolve(__dirname,"src/views/ejs"))  If the ejs file are in the different folder, We should use this code line

 //load assests
app.use('/css',express.static(path.resolve(__dirname,"src/assests/css")))
app.use('/img',express.static(path.resolve(__dirname,"src/assests/img")))
app.use('/js',express.static(path.resolve(__dirname,"src/assests/js")))


 app.get('/',(req,res) => {
    res.send("Crud Application");
 })

 app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});