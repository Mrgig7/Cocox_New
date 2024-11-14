// import React from 'react';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

// Product data from the catalog
const products = [
    { title: "Seed Starter / Coco Disc", description: "Specially formulated and pH-balanced for germination with options for buffered or triple-washed material." },
    { title: "Coco Cube / Grow Cube", description: "100% coco coir cubes with various sizes, ideal for multiple grow systems with no switching costs." },
    { title: "Open Top / Grow Pot", description: "Pre-mixed coco blend for indoor, greenhouse, and outdoor growth with options for plastic or non-woven containers." },
    { title: "Grow Bags", description: "Moisture-manage technology ensuring uniform moisture content, minimizing run-off and enhancing crop quality." },
    { title: "Coco Brick", description: "5 kg compressed coco blocks for versatile use." },
    { title: "Coco Heart", description: "Blocks with embedded names and logos, customized as per requirements." },
    { title: "Coco Mix", description: "Custom coco mix options for specific grow requirements." },
    { title: "Coco Supreme", description: "Premium coco coir with customized material options." }
];

// Animation variants
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const Products = () => {
    return (
        <div className="flex flex-col items-center py-10 min-h-screen" style={{ background: "linear-gradient(135deg, #d3f3d3, #f2f2f2)" }}>
            <h1 className="text-4xl font-semibold text-green-600 mb-6">Our Product Range</h1>
            <p className="text-lg text-gray-700 max-w-2xl text-center mb-10">
                Discover our innovative, eco-friendly coir products designed for sustainable growth and optimized agriculture.
            </p>
            {/* Innovative Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl px-4">
                {products.map((product, index) => (
                    <motion.div
                        key={index}
                        className="p-4 shadow-lg rounded-lg transform transition-all duration-500 hover:scale-105"
                        style={{
                            backgroundColor: "#f0f8f5", // A light mint-green color matching the theme
                        }}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: index * 0.1 }}
                    >
                        <ProductCard 
                            title={product.title} 
                            description={product.description} 
                            imageUrl="https://via.placeholder.com/150" // Placeholder image
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Products;
