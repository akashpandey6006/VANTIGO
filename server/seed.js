require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

const fallbackSvgDataUri = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22300%22%20height%3D%22300%22%20viewBox%3D%220%200%20300%20300%22%3E%3Crect%20width%3D%22300%22%20height%3D%22300%22%20fill%3D%22%23cccccc%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%20fill%3D%22%23666666%22%3EProduct%20Image%3C%2Ftext%3E%3C%2Fsvg%3E';

const dummyProducts = [
  {
    image: "https://images.unsplash.com/photo-1542291026472-574d561fd03e?w=500&q=80",
    title: "Nike Air Zoom Pegasus 39",
    description: "Breathable mesh upper with Zoom Air cushioning.",
    category: "men",
    brand: "nike",
    price: 120,
    salePrice: 99.99,
    totalStock: 50,
    averageReview: 4.5,
  },
  {
    image: "https://images.unsplash.com/photo-1595950133284-24f33d4e0e27?w=500&q=80",
    title: "Adidas Stan Smith",
    description: "Classic leather sneakers for everyday wear.",
    category: "men",
    brand: "adidas",
    price: 100,
    salePrice: 85,
    totalStock: 30,
    averageReview: 4.7,
  },
  {
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80",
    title: "Puma Ultraride",
    description: "Lightweight running shoes for women.",
    category: "women",
    brand: "puma",
    price: 90,
    salePrice: 75,
    totalStock: 40,
    averageReview: 4.2,
  },
  {
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80",
    title: "Levi's 501 Original Fit Jeans",
    description: "Classic straight fit denim jeans.",
    category: "men",
    brand: "levi",
    price: 70,
    salePrice: 59.5,
    totalStock: 100,
    averageReview: 4.6,
  },
  {
    image: "https://images.unsplash.com/photo-1551028719-0c15984ba16a?w=500&q=80",
    title: "Zara Faux Leather Biker Jacket",
    description: "Stylish biker jacket with zip details.",
    category: "women",
    brand: "zara",
    price: 89,
    salePrice: 89,
    totalStock: 25,
    averageReview: 4.8,
  },
  {
    image: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=500&q=80",
    title: "H&M Cotton Printed T-Shirt",
    description: "Soft cotton t-shirt for kids.",
    category: "kids",
    brand: "h&m",
    price: 15,
    salePrice: 12,
    totalStock: 200,
    averageReview: 4.3,
  },
  {
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    title: "Garmin Forerunner 245",
    description: "GPS running smartwatch with advanced training features.",
    category: "accessories",
    brand: "garmin",
    price: 300,
    salePrice: 250,
    totalStock: 15,
    averageReview: 4.9,
  },
  {
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
    title: "Ray-Ban Aviator Classic",
    description: "Iconic aviator sunglasses.",
    category: "accessories",
    brand: "ray-ban",
    price: 160,
    salePrice: 160,
    totalStock: 60,
    averageReview: 4.8,
  },
  {
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
    title: "Nike Sportswear Club Fleece",
    description: "Classic comfort fleece pullover hoodie.",
    category: "men",
    brand: "nike",
    price: 55,
    salePrice: 45,
    totalStock: 80,
    averageReview: 4.6,
  },
  {
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80",
    title: "Zara Flowy Maxi Dress",
    description: "Elegant and comfortable maxi dress.",
    category: "women",
    brand: "zara",
    price: 75,
    salePrice: 60,
    totalStock: 35,
    averageReview: 4.5,
  },
  {
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500&q=80",
    title: "Adidas Kids Superstar",
    description: "Iconic shell-toe sneakers for kids.",
    category: "kids",
    brand: "adidas",
    price: 60,
    salePrice: 50,
    totalStock: 50,
    averageReview: 4.7,
  },
  {
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=500&q=80",
    title: "Levi's Men's Reversible Belt",
    description: "Classic leather reversible belt.",
    category: "accessories",
    brand: "levi",
    price: 30,
    salePrice: 25,
    totalStock: 120,
    averageReview: 4.4,
  },
  {
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
    title: "Puma Essential Logo Tee",
    description: "Comfortable everyday t-shirt.",
    category: "men",
    brand: "puma",
    price: 25,
    salePrice: 20,
    totalStock: 150,
    averageReview: 4.2,
  },
  {
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80",
    title: "H&M Block Heel Sandals",
    description: "Stylish and comfortable block heels.",
    category: "women",
    brand: "h&m",
    price: 40,
    salePrice: 35,
    totalStock: 45,
    averageReview: 4.3,
  },
  {
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&q=80",
    title: "Nike Windrunner Kids",
    description: "Lightweight kids windrunner jacket.",
    category: "kids",
    brand: "nike",
    price: 65,
    salePrice: 55,
    totalStock: 40,
    averageReview: 4.6,
  }
];

async function seedProducts() {
  try {
    if (!process.env.MONGO_URI) {
      console.log("Error: MONGO_URI is not defined in .env");
      process.exit(1);
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected for seeding...");

    const existingProductsCount = await Product.countDocuments();
    if (existingProductsCount > 0) {
      console.log("Products already exist in the database. Seeding skipped to prevent duplicates.");
      process.exit(0);
    }

    await Product.insertMany(dummyProducts);
    console.log(`Successfully seeded ${dummyProducts.length} products!`);
    process.exit(0);
  } catch (error) {
    console.error("Error seeding products:", error);
    process.exit(1);
  }
}

seedProducts();
