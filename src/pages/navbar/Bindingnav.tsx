import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, Book, FileText, Layers, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BindingOptions from "@/components/BindingOptions";

const Binding = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const bindingServices = [
        {
            icon: Book,
            title: "Perfect Binding",
            description: "Professional book binding for reports, manuals, and publications",
            features: ["Square spine", "Professional look", "Page counts 28-2000", "Glue binding"],
            image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop"
        },
        {
            icon: Layers,
            title: "Spiral Binding",
            description: "Flexible binding solution that lays flat for easy reading",
            features: ["Lay-flat design", "Easy page turning", "Durable plastic or wire", "Various colors available"],
            image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=600&h=400&fit=crop"
        },
        {
            icon: FileText,
            title: "Saddle Stitching",
            description: "Cost-effective binding for newsletters, brochures, and booklets",
            features: ["2-3 staples", "Page counts 4-48", "Quick turnaround", "Budget-friendly"],
            image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop"
        },
        {
            icon: Award,
            title: "Case Binding",
            description: "Premium hardcover binding for special publications",
            features: ["Hardcover finish", "Dust jacket optional", "Premium materials", "Long-lasting"],
            image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=400&fit=crop"
        }
    ];

    const applications = [
        { name: "Annual Reports", count: "500+" },
        { name: "Training Manuals", count: "1000+" },
        { name: "Marketing Brochures", count: "2000+" },
        { name: "Technical Documents", count: "800+" },
        { name: "Catalogs & Portfolios", count: "600+" },
        { name: "Presentation Materials", count: "1500+" }
    ];

    return (
        <section id="binding">
            <Navigation />
            <BindingOptions />
            <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-600 to-blue-800">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <motion.div
                        className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>

                <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        Professional{" "}
                        <motion.span
                            className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            Binding
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        Transform your documents into professional, polished publications with our expert binding services
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300"
                        >
                            Get Quote Now
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-2 border-white text-blue-600 hover:bg-white hover:text-black px-8 py-4 rounded-full transition-all duration-300"
                        >
                            View Samples
                        </Button>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="w-8 h-8 text-white/70" />
                </motion.div>
            </section>

            {/* Binding Services */}
            <section ref={ref} className="py-20 px-4 md:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Binding Solutions
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6" />
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            From simple booklets to premium hardcover publications, we offer comprehensive binding solutions for every need
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        {bindingServices.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                            >
                                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm h-full">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <motion.div
                                                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                                                whileHover={{ scale: 1.1, rotate: 360 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <service.icon className="w-6 h-6 text-white" />
                                            </motion.div>
                                        </div>
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <motion.div
                                            className="mt-6"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Button
                                                variant="outline"
                                                className="w-full border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-300"
                                            >
                                                Learn More
                                            </Button>
                                        </motion.div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Applications Grid */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Perfect For</h3>
                        <p className="text-lg text-gray-600">We've successfully bound thousands of documents across various industries</p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 lg:grid-cols-6 gap-6"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        {applications.map((app, index) => (
                            <motion.div
                                key={app.name}
                                className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="text-2xl font-bold text-blue-600 mb-2">{app.count}</div>
                                <div className="text-gray-700 text-sm font-medium">{app.name}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
                <div className="container mx-auto max-w-4xl text-center px-4 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Bind Your Project?
                        </h3>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Get a free consultation and quote for your binding needs. Our experts are ready to help you choose the perfect binding solution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Get Free Quote
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-white text-blue-600 hover:bg-white hover:text-blue-800 px-8 py-4 rounded-full transition-all duration-300"
                            >
                                Call Now: +977 985-1098800
                            </Button>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </section>
        </div>
            <Footer />
        </section>
        
    );
};

export default Binding;