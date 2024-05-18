import { PORT, mongoDB_URL } from "./config.js";
import mongoose from "mongoose";
import express from "express";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
const app = express();

// Middleware for parsing request body
app.use(express.json());


// middleware for handling CORS POLICY
//option 1: Allow All origins whit default of cors(*)
// app.use(cors());

// option 2: Allow costum origins
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use("/books", booksRoute);
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MERN Stack");
});

mongoose
  .connect(mongoDB_URL)
  .then(() => {
    console.log("App connected To database");
    app.listen(PORT, () => {
      console.log(`The app is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
