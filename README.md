# Food Delivery MERN Project

## Overview

This is a comprehensive food delivery web application developed using the MERN stack (MongoDB, Express.js, React, Node.js). The project enables users to browse food items, manage their cart, place orders, and mark items as favorites. The backend is connected to a MongoDB database, and user authentication is implemented to secure sensitive actions.

## Features

- User Authentication: Users can sign up and log in securely.
- Browse Food Items: Display a list of available food items with detailed information.
- Add to Cart: Users can add and remove food items from their cart.
- Favorites Management: Mark food items as favorites and manage them.
- Order Placement: Users can place orders and view their order history.
- Responsive Design: Frontend developed using React for a seamless user experience.

## Tech Stack

- Frontend: React with Vite for faster build and development.
- Backend: Node.js and Express.js for server-side logic.
- Database: MongoDB (local or Atlas) for data storage.
- Authentication: JWT (JSON Web Token) for secure user sessions.

## Installation

### Prerequisites

- Node.js installed on your system.
- MongoDB installed (local setup or Atlas cluster).
- Git for version control.

### Steps to Run Locally

1. Clone the repository:

  
   `git clone https://github.com/<username>/food-delivery-mern.git`
   
   `cd food-delivery-mern`
   
3. Install dependencies for server:

  
   `cd server`
   
   `npm install`
   
5. Set up environment variables:

   - Create a .env file in the server directory with the following contents:
    
     `MONGODB_URI=mongodb://localhost:27017/<database-name>`
     
     `JWT=mySuperSecretKey`
     
     Replace <database-name> with your desired database name.

6. Start the backend server:

  
   `npm start`
   
7. Install dependencies for frontend:

  
   `cd ../client`
   
   `npm install`
   
9. Start the frontend server:

  
   `npm run dev`
   
10. Access the application:

   - Navigate to http://localhost:5173 in your web browser.

## API Endpoints

### User Routes

- POST /api/user/signup: Register a new user.
- POST /api/user/signin: Log in a user.
- POST /api/user/cart: Add an item to the cart.
- GET /api/user/cart: Retrieve all cart items.
- PATCH /api/user/cart: Remove an item from the cart.
- POST /api/user/favorite: Add an item to favorites.
- GET /api/user/favorite: Get all favorite items.
- PATCH /api/user/favorite: Remove an item from favorites.
- POST /api/user/order: Place an order.
- GET /api/user/order: Get all orders.

### Food Routes

- POST /api/food/add: Add a new food item.
- GET /api/food/: Get all food items.
- GET /api/food/:id: Get food details by ID.

## Contributing

Pull requests are welcome. For significant changes, please open an issue first to discuss what you would like to change.

## Acknowledgements

- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Express.js Guide](https://expressjs.com/en/starter/installing.html)
- [React Documentation](https://react.dev/)
- [Node.js](https://nodejs.org/en/docs/)
