// import express from "express";
// import {
//   UserLogin,
//   UserRegister,
//   addToCart,
//   addToFavorites,
//   getAllCartItems,
//   getAllOrders,
//   getUserFavorites,
//   placeOrder,
//   removeFromCart,
//   removeFromFavorites,
// } from "../controllers/User.js";
// import { verifyToken } from "../middleware/verifyUser.js";

// const router = express.Router();

// router.post("/signup", UserRegister);
// router.post("/signin", UserLogin);

// router.post("/cart", verifyToken, addToCart);
// router.get("/cart", verifyToken, getAllCartItems);
// router.patch("/cart", verifyToken, removeFromCart);

// router.post("/favorite", verifyToken, addToFavorites);
// router.get("/favorite", verifyToken, getUserFavorites);
// router.patch("/favorite", verifyToken, removeFromFavorites);

// router.post("/order", verifyToken, placeOrder);
// router.get("/order", verifyToken, getAllOrders);

// export default router;
import express from "express";
import {
  UserLogin,
  UserRegister,
  addToCart,
  getAllCartItems,
  removeFromCart,
  addToFavorites,
  getUserFavorites,
  removeFromFavorites,
  placeOrder,
  getAllOrders,
} from "../controllers/User.js";
import { verifyToken } from "../middleware/verifyUser.js"; // Ensure this middleware is implemented correctly

const router = express.Router();

// Authentication routes
router.post("/signup", UserRegister);
router.post("/signin", UserLogin);

// Cart routes
router.post("/cart", verifyToken, addToCart); // Add items to cart
router.get("/cart", verifyToken, getAllCartItems); // Get all cart items
router.patch("/cart", verifyToken, removeFromCart); // Remove items from cart

// Favorites routes
router.post("/favorite", verifyToken, addToFavorites); // Add to favorites
router.get("/favorite", verifyToken, getUserFavorites); // Get user's favorite items
router.patch("/favorite", verifyToken, removeFromFavorites); // Remove from favorites

// Order routes
router.post("/order", verifyToken, placeOrder); // Place an order
router.get("/order", verifyToken, getAllOrders); // Get all orders for the user

export default router;
