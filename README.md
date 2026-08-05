# VANTIGO - Modern MERN E-Commerce Platform

Vantigo is a full-featured, modern e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a seamless shopping experience for users and a comprehensive admin dashboard for managing the store.

## 🚀 Features

### User Features
- **Authentication & Authorization**: Secure login and registration using JWT and HTTP-only cookies.
- **Product Browsing**: Advanced filtering, sorting, and search capabilities.
- **Shopping Cart**: Real-time cart management.
- **Checkout & Payments**: Secure payment processing integrated with **Razorpay**.
- **Order Management**: Order history and tracking for users.
- **Reviews & Ratings**: Users can leave reviews for purchased products.
- **User Profile**: Manage shipping addresses and account details.

### Admin Features
- **Dashboard**: Overview of store performance.
- **Product Management**: Full CRUD operations for products with image upload functionality (via Cloudinary).
- **Order Management**: View and update order statuses.
- **Feature Management**: Manage promotional banners and features on the homepage.

## 🛠️ Technology Stack

### Frontend (Client)
- **Framework**: React 18 with Vite
- **State Management**: Redux Toolkit & React-Redux
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI (shadcn/ui) & Lucide React for icons
- **Data Fetching**: Axios

### Backend (Server)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT & bcryptjs
- **Payment Gateway**: Razorpay
- **Image Storage**: Cloudinary (integrated with Multer)

## 📦 Project Structure

```
VANTIGO/
├── client/                 # Frontend React Application (Vite)
│   ├── src/
│   │   ├── components/     # Reusable UI & Feature components
│   │   ├── pages/          # Page components (Admin, Auth, Shopping)
│   │   ├── store/          # Redux slices and store configuration
│   │   └── ...
│   └── package.json
└── server/                 # Backend Node/Express Application
    ├── controllers/        # Route controllers
    ├── models/             # Mongoose database schemas
    ├── routes/             # API routes
    ├── helpers/            # Utility functions (e.g., Cloudinary config)
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB instance (local or Atlas)
- Razorpay Account
- Cloudinary Account

### Environment Variables

**Server (`server/.env`)**
Create a `.env` file in the `server` directory and add the following variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLIENT_BASE_URL=http://localhost:5173

# JWT Setup
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=30d

# Cloudinary Setup
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Razorpay Setup
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/akashpandey6006/VANTIGO.git
   cd VANTIGO
   ```

2. **Install Server Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install Client Dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Run the Application**

   *In the server directory:*
   ```bash
   npm run dev
   ```

   *In the client directory:*
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## 🛡️ Security Features
- Password hashing with bcrypt.
- JWT-based authentication using HTTP-only cookies to prevent XSS attacks.
- Protected routes on both frontend (CheckAuth component) and backend middleware.
- Secure signature verification for Razorpay payments to prevent client-side tampering.

## 📄 License
This project is licensed under the ISC License.
