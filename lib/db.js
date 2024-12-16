import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectdb = async() =>{
    try{
        await mongoose.connect(
            process.env.mongodb_URI
        );
        console.log('MongoDb connected...');

    }
    catch(error){
        console.error(error.message);
        process.exit(1);
    };
    
}

export default connectdb;