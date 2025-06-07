import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Printer, FileText, Image, Calendar, Palette, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Servicenav = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const services = [
        {
            icon: FileText,
            title: "Business Printing",
            description: "Professional business cards, letterheads, and corporate materials",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: Image,
            title: "Large Format",
            description: "Banners, posters, and signage for maximum visual impact",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: Calendar,
            title: "Marketing Materials",
            description: "Brochures, flyers, and promotional content that converts",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: Palette,
            title: "Custom Design",
            description: "Bespoke design services tailored to your brand identity",
            color: "from-orange-500 to-red-500",
        },
        {
            icon: Zap,
            title: "Express Service",
            description: "Rush orders delivered without compromising on quality",
            color: "from-yellow-500 to-orange-500",
        },
        {
            icon: Printer,
            title: "Digital Printing",
            description: "High-resolution digital printing for short to medium runs",
            color: "from-indigo-500 to-purple-500",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="sercice-nav">
            <Navigation />
            <Services />
            <section ref={ref} className="py-20 px-4 md:px-8 bg-white relative overflow-hidden">
                {/* Background Elements */}
                <motion.div
                    className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Our Printing Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive printing solutions designed to elevate your brand and message
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-6" />
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                variants={cardVariants}
                                className="group"
                            >
                                <motion.div
                                    className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                                    whileHover={{
                                        y: -10,
                                        rotateX: 5,
                                        rotateY: 5,
                                    }}
                                    style={{
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    {/* Animated Background Gradient */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                        initial={{ scale: 0, rotate: 45 }}
                                        whileHover={{ scale: 1.5, rotate: 0 }}
                                        transition={{ duration: 0.5 }}
                                    />

                                    {/* Icon */}
                                    <motion.div
                                        className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                                        whileHover={{
                                            rotate: [0, -10, 10, -10, 0],
                                            scale: 1.2,
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <service.icon className="w-8 h-8 text-white" />
                                    </motion.div>

                                    {/* Content */}
                                    <motion.h3
                                        className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                                    >
                                        {service.title}
                                    </motion.h3>

                                    <motion.p
                                        className="text-gray-600 leading-relaxed mb-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                                    >
                                        {service.description}
                                    </motion.p>

                                    {/* Hover Button */}
                                    <motion.button
                                        className={`opacity-0 group-hover:opacity-100 px-4 py-2 bg-gradient-to-r ${service.color} text-white rounded-lg font-medium transition-all duration-300 transform translate-y-4 group-hover:translate-y-0`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Learn More
                                    </motion.button>

                                    {/* Decorative Elements */}
                                    <motion.div
                                        className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                                        animate={{
                                            rotate: [0, 360],
                                        }}
                                        transition={{
                                            duration: 10,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    />
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                        className="text-center mt-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <motion.button
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started Today
                        </motion.button>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </section>

    );
};

export default Servicenav;