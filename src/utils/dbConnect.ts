import mongoose from "mongoose";
const mongo_url = process.env.MONGO_URL || "";

if (!mongo_url) {
    throw new Error("No mongo db url defined");
}

async function dbConnect() {
    try{
        const opt = {
            bufferCommands: true,
            autoIndex:false
        }
        const db = await mongoose.connect(mongo_url,opt)
        if(db){console.log("mongodb success connection")}
    }catch(error){
        console.error(error);
    }
} 
export default dbConnect;