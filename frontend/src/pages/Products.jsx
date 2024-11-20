// import React from 'react';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';
import seedStarterImage from '../assets/cocodisk.jpg';
import cocoCubeImage from '../assets/cococube.jpg';
import openTopImage from '../assets/cocopot.jpg';
import growBagsImage from '../assets/growbag.png';
import cocoBrickImage from '../assets/cocobrick.jpg';
import cocoHeartImage from '../assets/cocoheart.jpg';
import cocoMixImage from '../assets/cocomix.jpg';
import cocoSupremeImage from '../assets/cocosupreme.jpg';

// List of possible tags
const possibleTags = [
    '#EcoFriendly', 
    '#Sustainable', 
    '#Organic', 
    '#Gardening', 
    '#Hydroponics', 
    '#IndoorGardening', 
    '#PlantCare', 
    '#CocoCoir', 
    '#SoilHealth', 
    '#GrowYourOwn', 
    '#HomeGarden', 
    '#PlantLovers', 
    '#GreenThumb'
];

// Function to generate random tags
const getRandomTags = (numTags) => {
    const shuffled = possibleTags.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numTags);
};

// Product data from the catalog
const products = [
    { title: "Seed Starter / Coco Disc", description: "Specially formulated and pH-balanced for germination with options for buffered or triple-washed material.", imageUrl: seedStarterImage, tags: getRandomTags(3) },
    { title: "Coco Cube / Grow Cube", description: "100% coco coir cubes with various sizes, ideal for multiple grow systems with no switching costs.", imageUrl: cocoCubeImage, tags: getRandomTags(3) },
    { title: "Open Top / Grow Pot", description: "Pre-mixed coco blend for indoor, greenhouse, and outdoor growth with options for plastic or non-woven containers.", imageUrl: openTopImage, tags: getRandomTags(3) },
    { title: "Grow Bags", description: "Moisture-manage technology ensuring uniform moisture content, minimizing run-off and enhancing crop quality.", imageUrl: growBagsImage, tags: getRandomTags(3) },
    { title: "Coco Brick", description: "5 kg compressed coco blocks for versatile use.", imageUrl: cocoBrickImage, tags: getRandomTags(3) },
    { title: "Coco Heart", description: "Blocks with embedded names and logos, customized as per requirements.", imageUrl: cocoHeartImage, tags: getRandomTags(3) },
    { title: "Coco Mix", description: "Custom coco mix options for specific grow requirements.", imageUrl: cocoMixImage, tags: getRandomTags(3) },
    { title: "Coco Supreme", description: "Premium coco coir with customized material options.", imageUrl: cocoSupremeImage, tags: getRandomTags(3) }
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0, transition: { duration: 0.5 } },
    visible: { opacity: 1, transition: { duration: 0.5 } }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const Products = () => {
    return (
        <>
            <motion.div 
                className="flex flex-col items-center justify-center py-20"
                style={{ backgroundColor: '#e0f7e0' }}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Page Header */}
                <div className="text-center mb-12">
                    <motion.h1
                        className="text-4xl font-bold text-green-700 mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Product Range
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-700 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Explore our eco-friendly products designed to promote sustainable gardening and agriculture.
                    </motion.p>
                </div>
                {/* Products Section */}
                <div className="flex flex-wrap justify-center">
                    {products.map((product, index) => (
                        <motion.div 
                            key={index} 
                            className="m-4"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: index * 0.1 }}
                        >
                            <ProductCard 
                                title={product.title} 
                                description={product.description} 
                                imageUrl={product.imageUrl} 
                                tags={product.tags} // Pass the randomly generated tags here
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </>
    );
};

export default Products;
