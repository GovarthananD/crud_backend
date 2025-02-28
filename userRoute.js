import express from "express";
import User from "./userModal.js";

const router = express.Router();

router.post("/addUser", async (req,res) => {
    try{
        const newUser = req.body;
        const result =  new User(newUser);
        await result.save();
        res.status(200).send({message: "User Added!", result})
    }catch(error){
        res.status(500).send(error.message);
    }
});

router.get("/allUsers", async (req,res) => {
    try{
        const result = await User.find();
        res.status(200).send({message: "All Users!", result});
    }catch(error){
        res.status(500).send(error.message);
    }
});

router.get("/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const result = await User.findOne({_id:id});
        res.status(200).send({message: "", result});
    }catch(error){
        res.status(500).send(error.message);
    }
});

router.delete("/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const result = await User.deleteOne({_id:id});
        res.status(200).send({message: "User Deleted!", result});
    }catch(error){
        res.status(500).send(error.message);
    }
});

router.put("/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const updateUser = req.body;
        const result = await User.updateOne({_id:id}, {$set:updateUser});
        res.status(200).send({message: "User Updated!", result});
    }catch(error){
        res.status(500).send(error.message);
    }
});


export const userRouter = router;