# Authify Backend

A simple and secure backend project for user authentication and product management built with **Node.js**, **Express**, and **MongoDB**.

---

## 🔧 Tech Stack

- **Node.js** – JavaScript runtime  
- **Express.js** – Web framework for building APIs  
- **MongoDB** – NoSQL database for storing users and products  
- **Mongoose** – ODM for MongoDB  
- **JWT** – JSON Web Tokens for authentication  
- **bcrypt** – Password hashing for security  
- **Middleware** – Custom authentication and validation  

---

## ⚡ Features

- **User Authentication**  
  - Signup with email, name, and password  
  - Login with JWT token generation  
  - Password hashing with bcrypt  


- **Security & Validation**  
  - Server-side input validation  
  - JWT-based route protection  

## 🛠️ Project Structure

Backend/
├── Controllers/
│ └── AuthController.js # Handles signup/login logic
├── Middlewares/
│ ├── Auth.js # Protects routes with JWT
│ └── AuthValidation.js # Validates user input
├── Models/
│ ├── User.js # User schema
│ └── db.js # MongoDB connection setup
├── Routes/
│ ├── AuthRouter.js # Signup/Login routes
│ └── ProductRouter.js # Product CRUD routes
├── index.js # Entry point for server
├── package.json
└── .gitignore 



---

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/Shivam14raj/User-Authentication.git
cd Authify/Backend
npm install
Create a .env file in the Backend folder with the following:
PORT=9090
MONGO_URI=<Your MongoDB connection string>
JWT_SECRET=<Your secret key>
npm start


## 📜 License

This project is open-source and free to use.  

Made with ❤️ by **Shivam Raj**


## 🛠️ Project Structure

