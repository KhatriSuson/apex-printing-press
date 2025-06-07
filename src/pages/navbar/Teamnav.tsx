import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TeamSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const teamMembers = [
        {
            name: "Alex Johnson",
            role: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
            bio: "Visionary leader with 15+ years in printing industry",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "alex@apexprinting.com"
            }
        },
        {
            name: "Sarah Chen",
            role: "Creative Director",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
            bio: "Award-winning designer specializing in brand identity",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "sarah@apexprinting.com"
            }
        },
        {
            name: "Mike Rodriguez",
            role: "Production Manager",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
            bio: "Quality control expert ensuring perfect results",
            social: {
                linkedin: "#",
                twitter: "#",
                email: "mike@apexprinting.com"
            }
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 100, rotateX: -15 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="teams">
            <Navigation />
             <section ref={ref} className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
            {/* Background Animation */}
            <motion.div
                className="absolute top-20 left-20 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-xl"
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
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
                        Meet Our Team
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        The passionate professionals behind Apex Printing's success
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-6" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            variants={cardVariants}
                            className="group perspective-1000"
                        >
                            <motion.div
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform-style-preserve-3d"
                                whileHover={{
                                    y: -10,
                                    rotateY: 5,
                                    rotateX: 5,
                                }}
                            >
                                {/* Image Container */}
                                <div className="relative overflow-hidden">
                                    <motion.img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                        initial={{ scale: 1.2, opacity: 0 }}
                                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                                        transition={{ duration: 0.8, delay: index * 0.2 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    
                                    {/* Social Links Overlay */}
                                    <motion.div
                                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={{ scale: 0 }}
                                        whileHover={{ scale: 1 }}
                                    >
                                        <div className="flex space-x-4">
                                            <motion.a
                                                href={member.social.linkedin}
                                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                                                whileHover={{ scale: 1.2, rotate: 10 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Linkedin className="w-5 h-5" />
                                            </motion.a>
                                            <motion.a
                                                href={member.social.twitter}
                                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                                                whileHover={{ scale: 1.2, rotate: -10 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Twitter className="w-5 h-5" />
                                            </motion.a>
                                            <motion.a
                                                href={`mailto:${member.social.email}`}
                                                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                                                whileHover={{ scale: 1.2, rotate: 10 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Mail className="w-5 h-5" />
                                            </motion.a>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <motion.h3
                                        className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                                    >
                                        {member.name}
                                    </motion.h3>
                                    <motion.p
                                        className="text-blue-600 font-medium mb-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                                    >
                                        {member.role}
                                    </motion.p>
                                    <motion.p
                                        className="text-gray-600 text-sm leading-relaxed"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                                    >
                                        {member.bio}
                                    </motion.p>
                                </div>
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

export default TeamSection;