import React, { useState } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaClipboardCheck } from 'react-icons/fa';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

const AboutShop = () => {
    const [showMore, setShowMore] = useState(false);
    const services = [
        "All Surgical Products",
        "All Healthcare Products",
        "Hospital Furniture",
        "Laboratory Equipment",
        "All Healthcare Product",
        "Laboratory Setup",
        "Laboratory Equipment",
        "Orthocare Product",
        "Many More......"
    ];

    const displayedServices = showMore ? services : services.slice(0, 4);


    return (
        <section className="py-12 bg-gray-100">
            {/* Header Section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Accurate Distributor</h1>
                <p className="text-lg text-gray-600 font-medium">
                    Opp. Madhav Furniture, Near Sangh Petrol Pump, Kodinar
                </p>
                <p className="text-md text-gray-500">Owned by: <span className='text-xl text-black font-bold'>**Mayur Barad**</span></p>
            </div>

            {/* Contact and Details Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {/* Card 1 - Contact Numbers */}
                <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                    <div className="flex items-center mb-4">
                        <FaPhoneAlt className="text-blue-500 text-2xl mr-3" />
                        <h2 className="text-xl font-bold text-gray-800">Contact Numbers</h2>
                    </div>
                    <p className="text-gray-600 font-medium mb-4">+91 9274219999</p>
                    <p className=''>#-Call and take tips & full details about the product. You can also order any product over the phone.</p>
                </div>

                {/* Card 2 - Address */}
                <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                    <div className="flex items-center mb-4">
                        <FaMapMarkerAlt className="text-green-500 text-2xl mr-3" />
                        <h2 className="text-xl font-bold text-gray-800">Our Location</h2>
                    </div>
                    <p className="text-gray-600 font-medium mb-4">
                        Opp. Madhav Furniture, Near Sangh Petrol Pump, Kodinar
                    </p>

                    <a
                        href="https://maps.app.goo.gl/SVZvcYWQJ1m9Y3Zf9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-4 p-2 rounded-lg border-blue-500 hover:text-green-600"
                    >
                        See Direction/ Show On Map
                    </a>
                </div>

                {/* Card 3 - Services */}
                <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                    <div className="flex items-center mb-4">
                        <FaClipboardCheck className="text-red-500 text-2xl mr-3" />
                        <h2 className="text-xl font-bold text-gray-800">Our Products</h2>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 font-medium">
                        {displayedServices.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                    {services.length > 4 && (
                        <div className="mt-2 text-center">
                            <button
                                onClick={() => setShowMore(!showMore)}
                                className="text-blue-500 hover:underline grid grid-flow-col gap-2 hover:text-green-600"
                            >
                                {showMore ? "Show Less" : "Show More"}
                                {showMore ? <FaAngleUp /> : <FaAngleDown />}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer Section */}
            <div className="m-10 text-center">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <p className="text-green-700 font-medium text-lg leading-relaxed mb-6">
                        "Mayur Barad" Accurate Distributor is a one-stop shop for a wide range of medical supplies and equipment. Located in Kodinar, India, they offer a comprehensive selection of products, including surgical instruments, healthcare products, rapid cards, orthocare products, and laboratory supplies. Whether you need generic or standard medications, or specialized equipment for hospitals or laboratories, Accurate Distributor is your reliable source. They provide wholesale pricing and cater to the diverse needs of healthcare professionals and institutions.
                    </p>

                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key points highlighted:</h3>

                    <div className="text-left space-y-4 justify-center items-center w-auto h-auto ">
                        <ul className="list-disc pl-5">
                            <li className="text-black font-bold">
                                <span className="text-green-300 text-sm">Comprehensive product range:</span> Emphasizes the variety of medical supplies offered.
                            </li>
                            <li className="text-black font-bold">
                                <span className="text-green-300 text-sm">Location and Contact:</span> Includes the shop's location and contact information.
                            </li>
                            <li className="text-black font-bold">
                                <span className="text-green-300 text-sm">Target audience:</span> Indicates that they cater to healthcare professionals and institutions.
                            </li>
                            <li className="text-black font-bold">
                                <span className="text-green-300 text-sm">Pricing:</span> Mentions wholesale pricing for cost-effectiveness.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default AboutShop;