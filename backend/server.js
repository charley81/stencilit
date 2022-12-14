import express from "express";
import dotenv from "dotenv";
import goalRoutes from "./routes/goal-routes.js";
import { errorHandler } from "./middleware/error-middleware.js";
import colors from "colors";
import { connectDB } from "./config/db.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8001;

connectDB();

app.use("/api/goals", goalRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
