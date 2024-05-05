import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import passport from "passport"; 

import authRoutes from "./routes/auth.js";
import questionRoutes from "./routes/questionRoutes.js";
import userRoutes from "./routes/user.js";

import Passport from "./config/passport.js";
Passport(passport);

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// passport middleware
app.use(passport.initialize());

app.use("/auth", authRoutes);
app.use("/question", questionRoutes);
app.use("/user", userRoutes);
mongoose.set('strictQuery', false);


const CONNECTION_URI ="mongodb+srv://sayedmohdanas0:KFW1HUzh9tQk0Wgb@intiquery2.xa7kjts.mongodb.net/"

  const PORT = process.env.PORT || 8000;
mongoose
  .connect(CONNECTION_URI, { useNewUrlParser: false, useUnifiedTopology: false })
  .then(() =>
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
  )
  .catch((error) =>
    console.log(`${error} could not connect to the database.....`)
  );
