import mongoose from "mongoose";

const DB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DATABASE Connected!")
    }catch(error){
        console.log("Something wrong to connecting DATABASE")
    }
};

export default DB;