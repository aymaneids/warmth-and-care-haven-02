
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationMap = () => {
  return (
    <section className="py-16">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-3xl font-semibold text-hope-text">Visit Our Center</h2>
            <p className="text-hope-text-light">
              We're conveniently located and easy to find. Stop by for a visit or reach out to schedule a tour.
            </p>
            
            <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
              <div className="flex gap-4">
                <div className="bg-hope-beige rounded-full p-2 flex-shrink-0 h-10 w-10 grid place-items-center">
                  <MapPin className="h-5 w-5 text-hope-blue" />
                </div>
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-hope-text-light">123 Care Lane, Hopeville, NY 12345</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-hope-beige rounded-full p-2 flex-shrink-0 h-10 w-10 grid place-items-center">
                  <Phone className="h-5 w-5 text-hope-blue" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-hope-text-light">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-hope-beige rounded-full p-2 flex-shrink-0 h-10 w-10 grid place-items-center">
                  <Mail className="h-5 w-5 text-hope-blue" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-hope-text-light">info@hopehealthcenter.com</p>
                </div>
              </div>
              
              <div className="flex gap-4">
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
          </div>
          
          <div className="lg:col-span-2">
            <div className="h-full min-h-[400px] rounded-xl overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096856941!3d40.759040371533136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA!5e0!3m2!1sen!2sus!4v1621523356671!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Hope Health & Rehabilitation Center Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
