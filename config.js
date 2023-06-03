const mongoose=require("mongoose")

const dbConnection=async()=>{
   await mongoose.connect("mongodb+srv://arslan:Arslan123@firstapp.ova38gb.mongodb.net/")
    .then(()=>{
        console.log("Mongodb Connected")
    })
    .catch((error)=>{
        console.error("Error connecting mongodb!")
    })
}


module.exports=dbConnection;