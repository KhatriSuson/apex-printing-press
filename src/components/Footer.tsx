import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
const Footer = () => {
  const quickLinks = [
    
    "About Us",
    "Services", 
    "Portfolio",
    "Contact",
    "Binding Options"
  ];

  const services = [
    { name: "Digital Printing", link: "/digital-print" },
    { name: "Offset Printing", link: "#" },
    { name: "Book Binding", link: "/book-binding" },
    { name: "Graphic Design", link: "#" },
    { name: "Lamination", link: "#" }
  ];

  return (
    <footer className="bg-apex-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-apex-blue to-apex-pink bg-clip-text text-transparent">
              Apex Printing Press
            </h3>
            <p className="text-gray-300 mb-6">
              Quality Design, Timely Printing – Affordable Price. 
              Your trusted printing partner since 2011.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-apex-blue rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-apex-pink rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-apex-yellow rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h4 className="text-xl font-semibold mb-4 text-apex-blue">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-apex-pink transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="text-xl font-semibold mb-4 text-apex-pink">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.link} 
                    className="text-gray-300 hover:text-apex-yellow transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <h4 className="text-xl font-semibold mb-4 text-apex-yellow">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-apex-blue mr-3 flex-shrink-0" />
                <span className="text-gray-300">Tinkune, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-apex-pink mr-3 flex-shrink-0" />
                <span className="text-gray-300">+977 985-1098800</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-apex-yellow mr-3 flex-shrink-0" />
                <span className="text-gray-300">apexpress100@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            &copy; 2024 Apex Printing Press Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-gray-400 text-center md:text-right mt-4 md:mt-0">
            Reg. No: 81463/067/068 | Est. 2011
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
