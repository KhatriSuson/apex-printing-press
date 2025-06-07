
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      info: "Tinkune, Kathmandu, Nepal",
      color: "bg-apex-blue"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+977 985-1098800",
      color: "bg-apex-pink"
    },
    {
      icon: Mail,
      title: "Email",
      info: "apexpress100@gmail.com",
      color: "bg-apex-yellow"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-apex-black">
            Get In <span className="text-apex-pink">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your printing project? Contact us today for a free consultation 
            and quote. We're here to help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <h3 className="text-2xl font-bold text-apex-black mb-6">Contact Information</h3>
            
            {contactInfo.map((contact, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${contact.color} rounded-full mr-4 flex-shrink-0`}>
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-apex-black">{contact.title}</h4>
                    <p className="text-gray-600">{contact.info}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="border-0 shadow-md bg-gradient-to-r from-apex-blue to-apex-pink text-white">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Company Registration</h4>
                <p className="mb-1">Reg. No: 81463/067/068</p>
                <p>Reg. Date: 2011/03/14</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-xl animate-fade-in-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-apex-black mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-apex-blue focus:ring-apex-blue"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-apex-blue focus:ring-apex-blue"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-apex-blue focus:ring-apex-blue"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-gray-300 focus:border-apex-blue focus:ring-apex-blue"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-apex-pink to-apex-blue hover:from-pink-600 hover:to-blue-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
