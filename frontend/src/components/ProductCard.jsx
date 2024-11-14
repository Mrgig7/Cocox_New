import { useState } from 'react';
import { FramerModal } from './Modal';
import PropTypes from 'prop-types';

const ProductCard = ({ title, description, imageUrl }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <div
                className="bg-white p-6 rounded-lg shadow-lg w-72 text-center transform transition-transform hover:scale-105 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
            >
                <img src={imageUrl} alt="" className="h-48 w-full object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description.slice(0, 50)}...</p>
                <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
                    Learn More
                </button>
            </div>

            {/* Modal Component */}
            <FramerModal open={isModalOpen} setOpen={setIsModalOpen}>
                <div className="flex flex-col items-center justify-center p-6 space-y-4">
                    <img src="https://via.placeholder.com/150" alt="Placeholder" className="h-40 w-full object-contain mb-4 rounded-lg" />
                    <h2 className="text-2xl font-bold text-center text-gray-800">{title}</h2>
                    <p className="text-gray-600 text-center">{description}</p>
                    <div className="flex space-x-2 mt-4">
                        {['#Tag1', '#Tag2', '#Tag3'].map((tag, index) => (
                            <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </FramerModal>
        </div>
    );
};

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default ProductCard;
