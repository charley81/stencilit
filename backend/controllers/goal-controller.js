import asyncHandler from "express-async-handler";
import Goals from "../models/goal-model.js ";

// @desc get goals
// @route  GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goals.find();
  res.status(200).json(goals);
});

// @desc create a goal
// @route  POST /api/goals
// @access Private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.goal) {
    res.status(400);
    throw new Error("please add a goal");
  }

  const goal = await Goals.create({
    goal: req.body.goal,
  });

  console.log(goal);

  res.status(200).json(goal);
});

// @desc update a goal
// @route  PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goals.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error(`Goal ${req.params.id} not found`);
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// @desc delete a goal
// @route  DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goals.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error(`Goal ${req.params.id} not found`);
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

export { getGoals, createGoal, updateGoal, deleteGoal };
