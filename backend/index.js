import { PORT, mongoDB_URL } from "./config.js";
import mongoose from "mongoose";
import express from "express";
import booksRoute from "./routes/booksRoute.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());

app.use("/books", booksRoute);

// middleware for handling CORS POLICY
//option 1: Allow All origins whit default of cors(*)
// app.use(cors());

//option 2: Allow costum origins 
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Types"],
  })
);

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
