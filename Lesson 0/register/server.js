const express = require("express")
const mongoose = require("mongoose")
const UserController = require("./controllers/UserController.js")
const app = express()
const PORT = process.env.PORT || 3000


app.use(express.json())

try{
    mongoose.connect('mongodb://127.0.0.1:27017/register',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log("Connected To Database...")
}
catch(err){
    console.log(err);
}
app.get('/',(req,res) => {
    res.send("Welcome to registration page");

})
app.post("/reg",UserController.store)

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})
