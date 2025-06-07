
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg print-pattern">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-apex-blue via-apex-pink to-apex-yellow bg-clip-text text-transparent">
            Apex Printing Press
          </h1>
          <p className="text-2xl md:text-3xl text-apex-black font-semibold mb-4">
            Pvt. Ltd.
          </p>
          <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
            Quality Design, Timely Printing – Affordable Price <br /> Transforming ideas into stunning print reality with cutting-edge technology and creative excellence
          </h2>
          <div className="animate-float">
            <Button 
              size="lg" 
              className="bg-apex-pink hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +977 985-1098800
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-apex-blue rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-apex-pink rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-apex-yellow rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;
