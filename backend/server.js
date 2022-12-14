import express from "express";
import dotenv from "dotenv";
import goalRoutes from "./routes/goal-routes.js";
import { errorHandler } from "./middleware/error-middleware.js";
import colors from "colors";
import { connectDB } from "./config/db.js";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8001;

connectDB();

app.use("/api/goals", goalRoutes);

app.use(errorHandler);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
