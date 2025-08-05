# 🏡 TripVilla – Your Go-To Travel Stay Booking Platform 🌍
**Live Demo 🚀** [https://tripvilla.onrender.com]

TripVilla is a full-stack web application inspired by Airbnb that enables users to discover, list, and review vacation properties. Built with the MVC pattern, the platform includes dynamic property listings, user authentication, reviews, image uploads, and a mobile-friendly responsive design.

---

## ✨ Features

- 🔐 **User Authentication** with secure session-based login/signup  
- 🏘️ **Create, Edit, and Delete Listings** for vacation stays  
- 📂 **Filter Listings by Categories** – Hotels, Villas, Resorts, and more  
- ⭐ **Leave Reviews** – Users can write and manage reviews for properties  
- 📸 **Upload Images** using **Cloudinary** and **Multer**  
- 💻 **Responsive UI** built with Bootstrap and EJS templating  
- ⚙️ **Robust Backend** – Express middlewares for error handling and route protection  
- 🌍 **Deployed on Render** with .env configuration for secure keys  

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, Bootstrap 5, EJS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (with Mongoose ODM)  
- **Authentication:** Passport.js, express-session  
- **Image Uploads:** Multer, Cloudinary  
- **Deployment:** Render  

---
📁 Project Structure
pgsql
Copy
Edit
TripVilla/
│
├── controllers/        → Route handlers  
├── models/             → Mongoose schemas  
├── routes/             → Express routes  
├── views/              → EJS templates (pages, layouts, partials)  
├── public/             → Static files (CSS, JS, images)  
├── utils/              → Reusable helper functions  
├── app.js              → Express app setup and middleware  
├── cloudConfig.js      → Cloudinary configuration  
├── middleware.js       → Custom middlewares  
└── schema.js           → JOI validation schemas  








git clone https://github.com/Akshita-Kasera/TripVilla.git
cd TripVilla
