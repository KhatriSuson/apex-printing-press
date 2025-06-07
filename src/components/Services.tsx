
import { Card, CardContent } from '@/components/ui/card';
import { Printer, Palette, BookOpen, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Printer,
      title: "Professional Printing",
      description: "High-quality digital and offset printing services for all your business needs",
      color: "from-apex-blue to-blue-600"
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Expert graphic design services to bring your vision to life with stunning visuals",
      color: "from-apex-pink to-pink-600"
    },
    {
      icon: BookOpen,
      title: "Book Binding",
      description: "Complete binding solutions including hardcover, softcover, and spiral binding",
      color: "from-apex-yellow to-yellow-600"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Fast turnaround times without compromising on quality - your deadlines are our priority",
      color: "from-apex-black to-gray-700"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-apex-black">
            Our <span className="text-apex-pink">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we provide comprehensive printing and design solutions 
            tailored to your specific requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 animate-fade-in-up"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <CardContent className="text-center p-8 h-full flex flex-col">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${service.color} rounded-full mb-6 group-hover:animate-pulse shadow-lg`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-apex-black mb-4 group-hover:text-apex-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
