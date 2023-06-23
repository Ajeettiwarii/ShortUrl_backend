import mongoose from "mongoose";
// import * as dotenv from "dotenv";
// dotenv.config();

export const connectDb = () => {
  mongoose
    .connect("mongodb://localhost:27017", {
      dbName: "short-url",
    })
    .then(() => console.log("database connected"))
    .catch((e) => console.log(e));
};
