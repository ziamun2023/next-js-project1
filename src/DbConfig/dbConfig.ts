import mongoose from "mongoose"
export async function connect () {
    try {
     mongoose.connect(process.env.MONGO_URI!)
     const connection=mongoose.connection
     connection.on('connected',()=>{
        console.log("mongo connected");
     })
     connection.on('error',(err)=>{
        console.log(`mongo not connected for the ${err}`);
     })
    }
    catch(error){
        console.log(error);
    }
    
}