/** @format */

import cloudinary from "cloudinary";
import { connectDatabase } from "./config/database.js";
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({ path: "./backend/config/config.env" });

connectDatabase();
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get("/", (req, res) => {
  res.send("This server is up and running");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
