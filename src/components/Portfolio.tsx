
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'books', label: 'Books' },
    { id: 'brochures', label: 'Brochures' },
    { id: 'letterheads', label: 'Letterheads' },
    { id: 'calendars', label: 'Calendars' },
    { id: 'cards', label: 'ID Cards' }
  ];

  const portfolioItems = [
    { id: 1, title: "Annual Report Design", category: "books", image: "photo-1488590528505-98d2b5aba04b" },
    { id: 2, title: "Company Brochure", category: "brochures", image: "photo-1461749280684-dccba630e2f6" },
    { id: 3, title: "Business Letterhead", category: "letterheads", image: "photo-1486312338219-ce68d2c6f44d" },
    { id: 4, title: "2024 Wall Calendar", category: "calendars", image: "photo-1581091226825-a6a2a5aee158" },
    { id: 5, title: "Employee ID Cards", category: "cards", image: "photo-1526374965328-7f61d4dc18c5" },
    { id: 6, title: "Technical Manual", category: "books", image: "photo-1487058792275-0ad4aaf24ca7" },
    { id: 7, title: "Product Catalog", category: "brochures", image: "photo-1605810230434-7631ac76ec81" },
    { id: 8, title: "Corporate Stationery", category: "letterheads", image: "photo-1498050108023-c5249f4df085" }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-apex-black">
            Our <span className="text-apex-blue">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our diverse portfolio showcasing the quality and creativity we bring to every project.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  activeFilter === category.id 
                    ? 'bg-apex-pink hover:bg-pink-600 text-white' 
                    : 'border-apex-pink text-apex-pink hover:bg-apex-pink hover:text-white'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 overflow-hidden animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${item.image}?w=400&h=300&fit=crop`}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
