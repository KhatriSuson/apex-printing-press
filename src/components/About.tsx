
import { Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    {
      icon: Award,
      title: "13+ Years Experience",
      description: "Serving since 2011"
    },
    {
      icon: Calendar,
      title: "Registered Company",
      description: "Reg. No: 81463/067/068"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Tinkune, Kathmandu"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-apex-black">
            About <span className="text-apex-blue">Apex Printing Press</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Established in 2011, Apex Printing Press has been a trusted name in Nepal's printing industry. 
            We combine traditional craftsmanship with modern technology to deliver exceptional printing solutions 
            that meet our clients' diverse needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-in-right border-0 bg-white"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-apex-blue to-apex-pink rounded-full mb-6 group-hover:animate-pulse">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-apex-black mb-3">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
