import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "get goals" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "create goal" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `update goal: ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `delete goal: ${req.params.id}` });
});

export default router;
