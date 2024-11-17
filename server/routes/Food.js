// import express from "express";
// import { addProducts, getFoodById, getFoodItems } from "../controllers/Food.js";

// const router = express.Router();

// router.post("/add", addProducts);
// router.get("/", getFoodItems);
// router.get("/:id", getFoodById);

// export default router;
import express from "express";
import { addProducts, getFoodById, getFoodItems } from "../controllers/Food.js";
import verifyUser from "../middleware/verifyUser.js"; // Import middleware for protected routes if needed

const router = express.Router();

// Route for adding products (consider adding `verifyUser` middleware to protect this route)
router.post("/add", verifyUser, addProducts);

// Route for fetching all food items
router.get("/", getFoodItems);

// Route for fetching food item by ID
router.get("/:id", getFoodById);

export default router;
