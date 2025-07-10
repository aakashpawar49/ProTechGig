# 🌐 PROTECHGIG – Freelance Job Marketplace App (MERN Stack)

A full-stack freelance job marketplace application inspired by **Fiverr**, built using the **MERN stack (MongoDB, Express, React, Node.js)** with modern tools like **React Query**, **JWT Auth**, and **Stripe** for secure payments.


## 📌 Features

### ✅ Frontend (React.js)
- Fully responsive UI (using CSS)
- React Router DOM for routing
- Functional components with Hooks
- Navbar scroll effect
- Category pages & product listing
- Image sliders & carousels
- Complex forms using `useReducer`
- State management using `useState` & `React Query`

### ✅ Backend (Node.js + Express + MongoDB)
- Secure Authentication with JWT and Cookies
- RESTful API for users, gigs, orders, and messages
- MongoDB database schema with Mongoose
- File upload via Cloudinary
- Error handling middleware
- Filtering gigs with `req.query`

### ✅ Additional Features
- Stripe payment integration for gig orders 💳
- Realtime chat system for buyers and sellers 💬
- Rating & review system ⭐
- Protected routes & logout functionality
- React Query for fetching and mutating data

---

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| React.js | Frontend UI |
| React Router DOM | Routing |
| React Query | Data fetching and mutation |
| Express.js | Backend API |
| MongoDB & Mongoose | Database and schema |
| Cloudinary | Image upload |
| Stripe | Payments |
| JWT | Authentication |
| CSS | Styling |

---

## 📁 Folder Structure

```bash
client/        # React frontend (Vite)
 └── src/
      ├── components/
      ├── pages/
      ├── hooks/
      └── App.jsx

server/        # Express backend
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/
 └── index.js

