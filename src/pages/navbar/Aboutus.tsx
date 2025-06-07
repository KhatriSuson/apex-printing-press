import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Printer, Award, Users, Clock } from "lucide-react";
import About from "@/components/About";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    const features = [
        {
            icon: Award,
            title: "Excellence",
            description: "Over a decade of award-winning print quality",
        },
        {
            icon: Users,
            title: "Expert Team",
            description: "Skilled professionals dedicated to your vision",
        },
        {
            icon: Printer,
            title: "Latest Technology",
            description: "State-of-the-art equipment for superior results",
        },
        {
            icon: Clock,
            title: "Fast Delivery",
            description: "Quick turnaround without compromising quality",
        },
    ];

    return (
        <section id="navba">
            <Navigation />
            <About />
            <section ref={ref} className="py-20 px-4 md:px-8 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-100 z-0" />
                <motion.div
                    className="absolute top-40 right-10 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl z-0"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                        >
                            Our Story
                        </motion.h2>
                        <motion.div
                            variants={itemVariants}
                            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"
                        />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="space-y-6"
                        >
                            <motion.p
                                variants={itemVariants}
                                className="text-lg md:text-xl text-gray-700 leading-relaxed"
                            >
                                Welcome to{" "}
                                <span className="font-semibold text-blue-600">Apex Printing</span>
                                , your premier destination for high-quality printing solutions.
                                With over a decade of experience in the industry, we pride
                                ourselves on delivering exceptional service and top-notch products
                                to our clients.
                            </motion.p>
                            <motion.p
                                variants={itemVariants}
                                className="text-lg md:text-xl text-gray-700 leading-relaxed"
                            >
                                Our team of skilled professionals is dedicated to bringing your
                                ideas to life, whether you need business cards, brochures,
                                banners, or any other printed materials. We use the latest
                                technology and techniques to ensure that every project meets our
                                high standards of quality.
                            </motion.p>
                            <motion.p
                                variants={itemVariants}
                                className="text-lg md:text-xl text-gray-700 leading-relaxed"
                            >
                                At Apex Printing, we believe in building lasting relationships
                                with our clients. We take the time to understand your unique needs
                                and work closely with you throughout the entire process to ensure
                                your complete satisfaction.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <h3 className="text-2xl font-bold mb-4">Why Choose Apex?</h3>
                                <p className="text-blue-100 leading-relaxed">
                                    We combine traditional craftsmanship with modern innovation to
                                    deliver printing solutions that exceed expectations. Every
                                    project is a testament to our commitment to excellence.
                                </p>
                            </div>
                        </motion.div>
                    </div>


                    {/* Features Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {features.map(({ icon: Icon, title, description }) => (
                            <motion.div key={title} variants={itemVariants} className="group">
                                <motion.div
                                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200"
                                    whileHover={{ y: -10, scale: 1.02 }}
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                                        {title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{description}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            <Footer />
        </section>



    );
};

export default AboutUs;
