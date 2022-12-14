import express from "express";
import dotenv from "dotenv";
import goalRoutes from "./routes/goal-routes.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8001;

app.use("/api/goals", goalRoutes);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
