import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
dotenv.config();
mongoose
  .connect(process.env.MONGO_DBURI)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log("error connecting to MongoDB" + err.message);
  });
const app = express();

app.listen(3000, () => {
  console.log("listening on", 3000);
});

app.use("/api/user", userRoutes);
