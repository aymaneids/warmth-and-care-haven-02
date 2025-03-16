
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import LocationMap from '../components/LocationMap';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <>
      <Navbar />
      <main>
        <PageHeader 
          title="Contact Us" 
          subtitle="We're here to answer your questions and help you find the right care"
          backgroundImage="https://images.unsplash.com/photo-1584476870450-31bcd5c6a5af?q=80&w=2070"
        />
        
        <section className="py-16 bg-white">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-semibold text-hope-text mb-4">Get in Touch</h2>
                  <p className="text-hope-text-light">
                    We'd love to hear from you! Whether you have questions about our services, 
                    want to schedule a tour, or need more information, our team is here to help.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-hope-beige rounded-full p-2 flex-shrink-0 h-10 w-10 grid place-items-center">
                      <Phone className="h-5 w-5 text-hope-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-hope-text-light">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-hope-beige rounded-full p-2 flex-shrink-0 h-10 w-10 grid place-items-center">
                      <Mail className="h-5 w-5 text-hope-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-hope-text-light">info@hopehealthcenter.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-hope-beige rounded-full p-2 flex-shrink-0 h-10 w-10 grid place-items-center">
                      <MapPin className="h-5 w-5 text-hope-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-hope-text-light">123 Care Lane, Hopeville, NY 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-hope-beige rounded-full p-2 flex-shrink-0 h-10 w-10 grid place-items-center">
                      <Clock className="h-5 w-5 text-hope-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium">Hours</h4>
                      <p className="text-hope-text-light">Mon-Fri: 8:00 AM - 8:00 PM</p>
                      <p className="text-hope-text-light">Sat-Sun: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-hope-gray p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-hope-blue rounded-full p-2 flex-shrink-0 h-10 w-10 grid place-items-center">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-hope-text">Schedule a Tour</h4>
                      <p className="text-hope-text-light mb-4">
                        We invite you to visit our facility and see firsthand the warm, 
                        supportive environment we've created for our residents.
                      </p>
                      <a 
                        href="tel:+15551234567" 
                        className="inline-flex items-center bg-hope-blue hover:bg-hope-blue/90 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                      >
                        Call to Schedule: (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-hope-text mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-hope-text font-medium mb-1">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hope-blue focus:border-hope-blue outline-none transition-all"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-hope-text font-medium mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hope-blue focus:border-hope-blue outline-none transition-all"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-hope-text font-medium mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hope-blue focus:border-hope-blue outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-hope-text font-medium mb-1">Subject *</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hope-blue focus:border-hope-blue outline-none transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Tour Request">Tour Request</option>
                      <option value="Admission Information">Admission Information</option>
                      <option value="Employment">Employment</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-hope-text font-medium mb-1">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hope-blue focus:border-hope-blue outline-none transition-all"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-hope-blue hover:bg-hope-blue/90 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        <LocationMap />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
