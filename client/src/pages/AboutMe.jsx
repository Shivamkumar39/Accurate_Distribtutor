import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaMobileAlt, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <>
            <section className="py-12 bg-gray-100">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Get Help</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                        <div className="flex items-center mb-4">
                            <FaPhoneAlt className="text-blue-500 text-2xl mr-3" />
                            <h2 className="text-xl font-bold text-gray-800">Contact Number</h2>
                        </div>
                        <p className="text-gray-600 font-medium">+91 7265059999</p>
                        <p className="text-gray-600 font-medium mb-5">+91 9274219999</p>

                         
                        <a
                            href="https://wa.link/lsm4ng"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-4 p-2 rounded-lg border-blue-500 hover:text-green-600 "
                        > 
                              Message if argent
                        </a>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                        <div className="flex items-center mb-4">
                            <FaMapMarkerAlt className="text-green-500 text-2xl mr-3" />
                            <h2 className="text-xl font-bold text-gray-800">Contact Place</h2>
                        </div>
                        <p className="text-lg text-gray-600 font-medium mb-5">
                            Opp. Madhav Furniture, Near Sangh Petrol Pump, Kodinar, Rajkot
                        </p>
                        <a
                            href="https://maps.app.goo.gl/SVZvcYWQJ1m9Y3Zf9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-4 p-2 rounded-lg border-blue-500 hover:text-green-600"
                        >
                            See Directions on the Map
                        </a>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                        <div className="flex items-center mb-4">
                            <FaMobileAlt className="text-red-500 text-2xl mr-3" />
                            <h2 className="text-xl font-bold text-gray-800">ABout My Shop</h2>
                        </div>
                        <p className='mb-5'>Read all About My shop Location, contact details and All Products</p>
                        <Link to='/aboutShop' className="border-4 p-2 rounded-lg border-blue-500 hover:text-green-600"
                        >About My Shop / Products</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutMe;
