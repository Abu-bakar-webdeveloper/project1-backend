import dotenv from "dotenv"
import connectDB from "./db/index.js"
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 3001, () => {
        console.log("Server started on port", process.env.PORT);
    })
})
.catch((err) => {
    console.log("Mongodb connection failed !!! ", err);
})


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// router
import userRouter from './routes/user.routes.js';

// routes declaration

app.use("/api/v1/users", userRouter)
// app.use("/api/v1/users", require('./routes/user.routes.js'))

export { app }