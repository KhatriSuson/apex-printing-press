import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const DigitalPrint = () => {
  return (
    <section className="min-h-screen bg-white py-16 px-6 md:px-12">
        <Navigation />
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-apex-blue mb-6">Digital Printing Services</h1>
        <p className="text-lg text-gray-700 mb-4">
          At Apex Printing Press, we offer high-quality digital printing services tailored to meet your personal and professional needs. Whether you need business cards, brochures, flyers, posters, or customized prints, our state-of-the-art digital printing technology ensures vibrant color reproduction and crisp details.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our digital printing is perfect for short to medium print runs and provides fast turnaround without compromising on quality. We use eco-friendly inks and premium paper stock to deliver prints that make a lasting impression.
        </p>
        <h2 className="text-2xl font-semibold text-apex-pink mt-10 mb-4">Why Choose Our Digital Printing?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>High-resolution prints with vivid colors</li>
          <li>Quick turnaround time</li>
          <li>Cost-effective for small quantities</li>
          <li>Wide range of customization options</li>
          <li>Eco-friendly and sustainable materials</li>
        </ul>
        <h2 className="text-2xl font-semibold text-apex-yellow mt-10 mb-4">Get a Quote</h2>
        <p className="text-lg text-gray-700 mb-4">
          Ready to print your project? <a href="/contact" className="text-apex-blue hover:underline">Contact us</a> today for a personalized quote and let us help bring your ideas to life with premium digital printing services.
        </p>
      </div>
        <Footer />
    </section>
  );
};

export default DigitalPrint;