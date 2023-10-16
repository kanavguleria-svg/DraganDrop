const mongoose = require('mongoose');
// const dotenv = require("dotenv");
// dotenv.config({path:"./config.env"});
// dotenv.config();

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        // console.log(process.env.MONGO_URI);
        console.log(`connected to Mongodb Database ${mongoose.connection.host}`);
    } catch(error){
        console.log(process.env.MONGO_URI);
        console.log(`Mongoose databse error ${error}`);
    }
}
module.exports = connectDB;