import mongoose from "mongoose";

let isConnected = false ; //track the connection

export const connectToDB = async ()=>{
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log('Mongo DB Is Coneenected')
        return;
    }

    try{
        const uri = process.env.MONGODB_URI
        await mongoose.connect(uri,{
            dbName : "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log('Mongo DB Connected')
        console.log("URI",process.env.MONGODB_URI)
    } catch(error){
        console.log(error)
    }


}