// @desc get goals
// @route  GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "get goals" });
};

// @desc create a goal
// @route  POST /api/goals
// @access Private
const createGoal = (req, res) => {
  res.status(200).json({ message: "create goal" });
};

// @desc update a goal
// @route  PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `update goal: ${req.params.id}` });
};

// @desc delete a goal
// @route  DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `delete goal: ${req.params.id}` });
};

export { getGoals, createGoal, updateGoal, deleteGoal };
