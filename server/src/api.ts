import express from "express";
import cors from "cors";
import mongoose from "mongoose";
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "*"
}));

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// API ENDPOINTS //

// DB CONNECTION (modify .env file to conform to your DB info) //
mongoose.connect(process.env.MONG_URI)
app.listen(process.env.PORT)
console.log(`Server listening on PORT ${process.env.PORT}`);

module.exports = app;
