import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
import cards from "./routes/cards.js"


dotenv.config()

const app = express()
app.use("/uploads", express.static("uploads"));
app.use(express.json())
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(cards)

const uri = process.env.MONGODB_URI

mongoose.connect(uri)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB Connection Error",err))

const PORT = process.env.PORT || 3001

app.listen(PORT,()=> {
    console.log(`server running on http://localhost:${PORT}`)
})