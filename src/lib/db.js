import mongoose from "mongoose";

 const connestionSTR= process.env.MongoUri;

export  const ConnectMongo= async()=>{
try {
await mongoose.connect(connestionSTR)
console.log("db connect");
} catch (error) {
    console.log(error); 
}
}