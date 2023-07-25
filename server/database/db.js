import mongoose from "mongoose";

export const Connection = async (USERNAME,PASSWORD) =>{
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@ecom-web-new.rlh2m6s.mongodb.net/?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL,{useUnifiedTopology: true, useNewurlParser: true});
       console.log('Database Connected Successfully ');
    }catch(error){
        console.log('Error while connection the database ', error.message)
    }
}

export default Connection;