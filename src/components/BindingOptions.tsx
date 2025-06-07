
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, FileText, RotateCcw, Calendar, Shield } from 'lucide-react';

const BindingOptions = () => {
  const bindingTypes = [
    {
      icon: BookOpen,
      title: "Hard Cover",
      description: "Durable and professional hardcover binding for books and documents",
      color: "bg-apex-blue"
    },
    {
      icon: FileText,
      title: "Soft Cover",
      description: "Flexible and cost-effective softcover binding for various publications",
      color: "bg-apex-pink"
    },
    {
      icon: RotateCcw,
      title: "Spiral Binding",
      description: "Convenient spiral binding for notebooks, manuals, and presentations",
      color: "bg-apex-yellow"
    },
    {
      icon: Calendar,
      title: "Calendar Clip",
      description: "Specialized binding for calendars with easy page-turning functionality",
      color: "bg-green-500"
    },
    {
      icon: Shield,
      title: "Lamination",
      description: "Protective lamination to enhance durability and appearance",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-apex-black">
            Binding <span className="text-apex-yellow">Options</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our wide range of professional binding options to give your documents 
            the perfect finish they deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {bindingTypes.map((binding, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-110 border-0 bg-white animate-slide-in-right overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="text-center p-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${binding.color} rounded-full mb-4 group-hover:animate-bounce shadow-lg`}>
                  <binding.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-apex-black mb-2 group-hover:text-apex-blue transition-colors">
                  {binding.title}
                </h3>
                <p className="text-sm text-gray-600">{binding.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BindingOptions;
