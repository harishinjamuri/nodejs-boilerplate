import user from "../controllers/user.js"
import { logger } from "../core/logger.js"

const getAllUsers = async (req, res) => {
  try {
    const users = await user.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await user.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: "Failed to create user" });
  }
};

// Implement other controller functions (getUserById, updateUser, deleteUser)

export {
  getAllUsers,
  createUser,
  // ... other controller functions
};
