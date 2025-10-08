import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

app.get("/", (req, res) => res.send("Hello from server"));
const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () =>
      console.log("Server is up and running on: ", ENV.PORT)
    );
  } catch (error) {
    console.log("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();

// 2VBIANDgRB45VkCV password
