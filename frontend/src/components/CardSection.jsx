import { FaBuilding, FaCertificate, FaUsers, FaShippingFast, FaCogs, FaBoxOpen } from 'react-icons/fa';

const CardSection = () => {
    const cards = [
        { title: "Infrastructure", description: "Well Equipped and Good Infrastructure with advanced technology and machineries located at south India", icon: <FaBuilding /> },
        { title: "Quality", description: "We are certified, and our products meet international standard quality and satisfy our clients", icon: <FaCertificate /> },
        { title: "Professional Team", description: "Our team of Experts monitors all stages of production with rigorous quality standards", icon: <FaUsers /> },
        { title: "Packing", description: "Products are packed in palletized or loose stuffing or bundle packing as per specifications", icon: <FaBoxOpen /> },
        { title: "Variety", description: "We provide multiple blends of coco peat with coco husk chips and coco fibers based on requirements", icon: <FaCogs /> },
        { title: "Delivery", description: "We deliver our products on time safely and ensure quality & quantity of the products", icon: <FaShippingFast /> }
    ];

    return (
        <section className="w-full py-8 md:py-10 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col space-y-4 lg:w-1/3">
                        {cards.slice(0, 3).map((card, index) => (
                            <div 
                                key={index} 
                                className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center transform transition hover:scale-105"
                            >
                                <div className="text-3xl md:text-4xl text-green-500 mb-3 md:mb-4">
                                    {card.icon}
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">
                                    {card.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-600">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Center Image - Hidden on mobile, shown on larger screens */}
                    <div className="hidden lg:flex items-center justify-center lg:w-1/3">
                        <img 
                            src="https://via.placeholder.com/200x300" 
                            alt="Placeholder" 
                            className="rounded-lg shadow-md w-full max-w-[250px]" 
                        />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col space-y-4 lg:w-1/3">
                        {cards.slice(3).map((card, index) => (
                            <div 
                                key={index} 
                                className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center transform transition hover:scale-105"
                            >
                                <div className="text-3xl md:text-4xl text-green-500 mb-3 md:mb-4">
                                    {card.icon}
                                </div>
                                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">
                                    {card.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-600">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardSection;
