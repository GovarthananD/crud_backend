import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DB from "./database.js";
import { userRouter } from "./userRoute.js";


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

DB();
app.use(userRouter);

app.get("/", (req, res) => {
    res.send("Hello World")
});

app.listen(process.env.PORT, () => console.log("Server Running on PORT", process.env.PORT));

