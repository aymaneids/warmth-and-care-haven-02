
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Coffee, Utensils, Footprints, Music, BookOpen, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import CallToAction from '../components/CallToAction';

const Community = () => {
  const amenities = [
    {
      icon: <Utensils className="h-6 w-6 text-hope-blue" />,
      title: "Dining Services",
      description: "Restaurant-style dining with nutritious, chef-prepared meals tailored to individual dietary needs and preferences."
    },
    {
      icon: <Users className="h-6 w-6 text-hope-blue" />,
      title: "Social Activities",
      description: "Regular social events, games, and group activities designed to foster community engagement and friendship."
    },
    {
      icon: <Footprints className="h-6 w-6 text-hope-blue" />,
      title: "Walking Paths",
      description: "Beautifully landscaped walking paths throughout our grounds, perfect for daily exercise and outdoor enjoyment."
    },
    {
      icon: <Coffee className="h-6 w-6 text-hope-blue" />,
      title: "Coffee Shop",
      description: "On-site coffee shop serving fresh beverages and light snacks, providing a cozy spot for residents and visitors."
    },
    {
      icon: <Music className="h-6 w-6 text-hope-blue" />,
      title: "Entertainment",
      description: "Regular musical performances, movie nights, and other entertainment options for residents to enjoy."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-hope-blue" />,
      title: "Library",
      description: "Well-stocked library with a variety of books, magazines, and comfortable seating for quiet reading."
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageHeader 
          title="Our Community" 
          subtitle="Experience a vibrant, supportive community where residents thrive"
          backgroundImage="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070"
        />
        
        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-hope-text font-semibold">A Place to Call <span className="text-hope-blue">Home</span></h2>
                <p className="text-hope-text-light">
                  At Hope Health & Rehabilitation Center, we believe that a fulfilling life extends beyond medical care. Our community is designed to provide a warm, welcoming environment where residents can enjoy their favorite activities, form meaningful connections, and live with dignity and purpose.
                </p>
                <p className="text-hope-text-light">
                  We offer a range of amenities and activities tailored to meet the diverse interests and needs of our residents, ensuring that everyone has the opportunity to engage in activities they enjoy and discover new passions.
                </p>
              </div>
              
              <div className="staggered-animation-1">
                <img 
                  src="https://images.unsplash.com/photo-1516571126636-52c74122dfab?q=80&w=1942" 
                  alt="Seniors enjoying community activities" 
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Amenities */}
        <section className="py-16 bg-hope-gray">
          <div className="page-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block px-4 py-1 rounded-full bg-hope-blue/10 text-hope-blue font-medium text-sm mb-4">
                Our Amenities
              </div>
              <h2 className="text-hope-text font-semibold mb-4">
                Comfort and Convenience
              </h2>
              <p className="text-hope-text-light">
                Our facility offers a wide range of amenities designed to enhance the daily lives of our residents, providing comfort, convenience, and opportunities for enjoyment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {amenities.map((amenity, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-hope-beige rounded-full w-fit mb-4">
                    {amenity.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
                  <p className="text-hope-text-light">{amenity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Activities */}
        <section className="py-16 bg-white">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?q=80&w=1470" 
                  alt="Seniors playing cards" 
                  className="w-full h-60 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="https://images.unsplash.com/photo-1454418747937-bd95bb945625?q=80&w=1470" 
                  alt="Art therapy session" 
                  className="w-full h-60 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="https://images.unsplash.com/photo-1558642891-54be180ea339?q=80&w=1470" 
                  alt="Garden activities" 
                  className="w-full h-60 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="https://images.unsplash.com/photo-1596496050827-8299e0220de1?q=80&w=1470" 
                  alt="Music therapy" 
                  className="w-full h-60 object-cover rounded-lg shadow-md"
                />
              </div>
              
              <div className="order-1 lg:order-2 space-y-6">
                <div className="inline-block px-4 py-1 rounded-full bg-hope-blue/10 text-hope-blue font-medium text-sm">
                  Activities & Programs
                </div>
                <h2 className="text-hope-text font-semibold">Engaging Activities for <span className="text-hope-blue">Every Interest</span></h2>
                <p className="text-hope-text-light">
                  We offer a diverse range of activities and programs designed to engage residents physically, mentally, and socially, promoting overall well-being and a fulfilling lifestyle.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-hope-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Arts and Crafts</h4>
                      <p className="text-hope-text-light text-sm">Creative expression through various artistic mediums</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-hope-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Fitness Classes</h4>
                      <p className="text-hope-text-light text-sm">Gentle exercise tailored to different ability levels</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-hope-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Game Nights</h4>
                      <p className="text-hope-text-light text-sm">Fun, social gatherings with board games and card games</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-hope-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Musical Performances</h4>
                      <p className="text-hope-text-light text-sm">Regular concerts and sing-alongs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-hope-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Gardening Club</h4>
                      <p className="text-hope-text-light text-sm">Hands-on gardening in our accessible garden areas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-hope-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium">Educational Lectures</h4>
                      <p className="text-hope-text-light text-sm">Interesting presentations on a variety of topics</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Link to="/contact" className="btn-primary">
                    Schedule a Visit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Accommodations */}
        <section className="py-16 bg-hope-beige/50">
          <div className="page-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block px-4 py-1 rounded-full bg-hope-blue/10 text-hope-blue font-medium text-sm mb-4">
                Our Accommodations
              </div>
              <h2 className="text-hope-text font-semibold mb-4">
                Comfortable Living Spaces
              </h2>
              <p className="text-hope-text-light">
                Our thoughtfully designed living spaces provide comfort, safety, and a sense of home for all residents.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=1458" 
                  alt="Private Room" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Private Rooms</h3>
                  <p className="text-hope-text-light mb-4">
                    Our private rooms offer a personal sanctuary with ample space, natural light, and private bathrooms. Each room is designed with safety features and modern amenities for comfort and convenience.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-hope-blue" />
                      <span className="text-hope-text-light">Adjustable beds with quality linens</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-hope-blue" />
                      <span className="text-hope-text-light">Emergency call system</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-hope-blue" />
                      <span className="text-hope-text-light">Individual climate control</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-hope-blue" />
                      <span className="text-hope-text-light">Space for personal furnishings</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1486304873000-235643847519?q=80&w=1528" 
                  alt="Semi-Private Room" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Semi-Private Rooms</h3>
                  <p className="text-hope-text-light mb-4">
                    Our semi-private rooms offer a balance of companionship and personal space, thoughtfully arranged to ensure privacy and comfort for both residents while fostering social connection.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-hope-blue" />
                      <span className="text-hope-text-light">Privacy curtains</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-hope-blue" />
                      <span className="text-hope-text-light">Individual storage space</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-hope-blue" />
                      <span className="text-hope-text-light">Shared bathroom with safety features</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-hope-blue" />
                      <span className="text-hope-text-light">Emergency call system</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Link to="/gallery" className="btn-primary">
                View Our Gallery
              </Link>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Community;
